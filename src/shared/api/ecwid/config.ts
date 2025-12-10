import axios, { AxiosInstance } from 'axios';
import { setupInterceptors } from '@shared/api/ecwid/interceptors';
import { ECWID_CONFIG } from '@shared/api/ecwid/constants';

export const createApiClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: `${ECWID_CONFIG.BASE_URL}/${ECWID_CONFIG.STORE_ID}`,
    headers: {
      Authorization: `Bearer ${ECWID_CONFIG.TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  setupInterceptors(client);
  return client;
};
