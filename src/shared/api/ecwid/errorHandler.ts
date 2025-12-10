import { AxiosError } from 'axios';

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

export const handleApiError = (error: unknown): ApiError => {
  if (error instanceof AxiosError) {
    if (error.response) {
      return {
        message: error.response.data?.message || error.message || 'Server error',
        status: error.response.status,
        code: error.response.data?.errorCode,
      };
    } else if (error.request) {
      return {
        message: 'No response from server. Check your internet connection',
        code: 'NETWORK_ERROR',
      };
    }
  }
  if (error instanceof Error) {
    return {
      message: error.message || 'An unknown error occurred',
    };
  }

  return {
    message: 'An unknown error occurred',
  };
};
