import { cookies } from 'next/headers';
import { fetcher } from './fetcher';

export async function makeApiRequestByToken<T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'GET',
  body?: unknown
): Promise<T> {
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value;
  return fetcher<T>(url, {
    method,
    token,
    body,
  });
}