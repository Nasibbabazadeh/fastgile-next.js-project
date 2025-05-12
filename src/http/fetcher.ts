import { ApiResponse } from "@/shared/types/api";
import { useErrorBoundary } from "react-error-boundary";
import toast from "react-hot-toast";

type TMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface RequestOptions {
  method: TMethod;
  token: string;
  body: unknown;
  headers: HeadersInit;
}


export async function fetcher<T>(
  endpoint: string,
  { method = 'GET', body, headers, token }: Partial<RequestOptions> = {}
): Promise<ApiResponse<T>> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(headers || {}),
      },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
      const errorResponse = await res.json();
      toast.error(errorResponse.data.errorMessage);
      throw new Error(errorResponse.data.errorMessage);
    }

    return res.json();
  } catch (error) {
    return error as ApiResponse<T>;
  }
}