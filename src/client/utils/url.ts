import qs from 'query-string'

export function getHref(url: string): string {
  const experiment = qs.parse(location.search).experiment;

  console.log('🚀 ~ file: index.tsx:19 ~ getHref ~ experiment:', experiment);

  const parsed = qs.parseUrl(url);

  console.log('🚀 ~ file: index.tsx:24 ~ getHref ~ parsed:', parsed);

  return qs.stringifyUrl(
    {
      url,
      query: {
        experiment: experiment === 'variant' ? 'variant' : null,
      },
    },
    { skipNull: true },
  );
}
