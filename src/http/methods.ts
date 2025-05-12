import { fetcher } from './fetcher';

export const get = <T>(endpoint: string, token?: string) =>
  fetcher<T>(endpoint, { method: 'GET', token });

export const post = <T>(endpoint: string, body: any, token?: string) =>
  fetcher<T>(endpoint, { method: 'POST', body, token });

export const put = <T>(endpoint: string, body: any, token?: string) =>
  fetcher<T>(endpoint, { method: 'PUT', body, token });

export const patch = <T>(endpoint: string, body: any, token?: string) =>
  fetcher<T>(endpoint, { method: 'PATCH', body, token });

export const del = <T>(endpoint: string, token?: string) =>
  fetcher<T>(endpoint, { method: 'DELETE', token });
