import { AxiosError, AxiosInstance } from 'axios';
import { handleApiError } from '@shared/api/ecwid/errorHandler';

export const setupInterceptors = (client: AxiosInstance): void => {
  client.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const apiError = handleApiError(error);
      console.error('API Error:', apiError);
      return Promise.reject(apiError);
    },
  );
};
