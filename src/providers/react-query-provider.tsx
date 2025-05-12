"use client"
import { ReactNode } from "react";
import { getQueryClient } from "@/app/get-query-client";
import { QueryClientProvider } from "@tanstack/react-query";
export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient()

  // useQuery({
  //   queryKey: ['post', postId],
  //   queryFn: () => fetcher<Post>(`/api/posts/${postId}`),
  //   onError: handleError,
  // });
  return (

    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}