import toast from "react-hot-toast";

export function handleError(error: unknown) {
  if (typeof window !== 'undefined') {
    toast.error('Something went wrong');
  }

  if (error && typeof error === 'object' && 'message' in error) {
    return (error as any).message;
  }

  return;
}
