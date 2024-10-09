export const getBaseUrl = (): string => {
  if (typeof import.meta !== 'undefined' && import.meta.env) {
    const baseUrl = import.meta.env.BASE_URL || '/';
    return baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  }
  return '/';
};
