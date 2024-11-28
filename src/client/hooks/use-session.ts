import { useEffect, useState } from 'react';

export const checkItem = (key: string) => sessionStorage.getItem(key);

export const getCurrentSession = () => {
  const items: Record<string, string | null>[] = [];

  const keys = Object.keys(sessionStorage);

  keys.forEach((key) => {
    items.push({ [key]: sessionStorage.getItem(key) });
  });

  return items;
};
export type Item = string | number | object | null;

export const useSession = (fn?: () => void) => {
  const items = getCurrentSession();

  const [session, setSession] = useState<Record<string, Item>[]>(items);

  useEffect(() => {
    if (fn && typeof fn === 'function') {
      fn();
    }
  }, [session, fn]);

  const getValue = (itemKey: string) => {
    const items = Object.values(session);

    for (const item of items) {
      if (itemKey in item) {
        return item[itemKey];
      }
    }

    return null;
  };

  const addItem = (key: string, value: Item) => {
    if (typeof value === 'object') {
      sessionStorage.setItem(key, JSON.stringify(value));
    }

    if (typeof value === 'number') {
      sessionStorage.setItem(key, value.toString());
    }

    if (typeof value === 'string') {
      sessionStorage.setItem(key, value);
    }

    setSession([...session, { [key]: value }]);
  };

  const deleteItem = (key: string) => {
    const item = checkItem(key);
    if (!item) {
      throw new Error('This item does not exist in the session storage');
    }

    if (item) {
      sessionStorage.removeItem(key);
      setSession(getCurrentSession());
    }
  };

  const deleteItemAfterDelay = (key: string, time: number) => {
    setTimeout(() => {
      deleteItem(key);
    }, time);
  };

  return {
    session,
    getValue,
    addItem,
    deleteItem,
    deleteItemAfterDelay,
  };
};
