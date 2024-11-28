import { useEffect, useState } from 'react';
import { type Item, useSession } from './use-session';

export const usePersistentState = <PersistentState>(
  key: string,
  initialState: PersistentState,
): [PersistentState, React.Dispatch<React.SetStateAction<PersistentState>>] => {
  const getItem = () => {
    const item = sessionStorage.getItem(key);

    if (item) return item as PersistentState;

    return initialState;
  };

  const [state, setState] = useState(getItem());

  const { addItem } = useSession();

  useEffect(() => {
    addItem(key ?? 'persistent-state', state as Item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, key]);

  return [state, setState];
};
