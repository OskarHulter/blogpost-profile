import React from 'react';

declare global {
  interface Window {
    analytics: {
      addSourceMiddleware?: (fn: (event: AnalyticsEvent) => void) => void;
    };
  }
}


type TrackingPayload = {
  obj: TrackingContext
};

type TrackingContext = {
    type: string;
    properties: {
      referrer: string;
    };
    context: {
      page: {
        referrer: string;
      };
    };
};

type AnalyticsEvent = {
  next: (payload: TrackingPayload) => void;
  payload: TrackingPayload;
};

export const pageLoadedKey = 'isFirstLoad';
export const referrerKey = 'saveReferrer';

function mutateReferrer(payload: TrackingPayload, referrer: string | null): TrackingPayload {
  if (!referrer) return payload;
  if (!payload.obj) return payload;
  console.log('🚀 ~ file: use-segment-middleware.ts:64 ~ mutateReferrer ~ referrer:', referrer);

  console.log('🚀 ~ Mutated Referrer');
  if (payload.obj.type === 'page') {
    payload.obj.properties.referrer = referrer;
  }
  console.log(
    '🚀 ~ file: index.ts:39 ~ window.analytics.addSourceMiddleware ~ payload.obj.properties.referrer:',
    payload.obj.properties.referrer,
  );

  payload.obj.context.page.referrer = referrer;
  return payload;
}

export function useSegmentTrackingFilter(enabled: boolean, originalReferrer: string | null): void {
  React.useEffect(() => {
    if (!window.analytics.addSourceMiddleware) return;
    
    window.analytics.addSourceMiddleware(({ payload, next }: AnalyticsEvent) => {
      console.log('🚀 ~ MW START');
      if (enabled) return null;
      console.log('🚀 ~ Filter disabled');

      let trackingPayload = payload;

      if (originalReferrer) {
        console.log('🚀 ~ Mutating payload');
        trackingPayload = mutateReferrer(trackingPayload, originalReferrer);
      }

      console.log('🚀 ~ MW END');
      next(trackingPayload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
