import { AxiosResponse, AxiosRequestConfig } from 'axios';
import api from '../services/ApiService';

export interface ErrorAPI {
  code: string;
  details: ErrorAPI[];
  error: string;
  message: string;
}

interface ResponseAPI<T> {
  fail?: ErrorAPI;
  data?: T;
  response?: AxiosResponse<T>;
}

export interface Success {
  body: any;
  statusCode: string;
  statusCodeValue: number;
}

const generic = { message: 'Ocorreu algo inesperado' };
const mainEndpoint = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/'

export async function get<T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<ResponseAPI<T>> {
  const url = `${mainEndpoint}${endpoint}`;
  try {
    const response = await api.get<T>(url, config);
    return {
      data: response.data,
      response,
    };
  } catch (error) {
    return {
      fail: error.response?.data || generic,
    };
  }
}

export async function post<T>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ResponseAPI<T>> {
  const url = `${mainEndpoint}${endpoint}`;
  try {
    const response = await api.post<T>(url, data, config);
    return {
      data: response.data,
      response,
    };
  } catch (error) {
    return {
      fail: error.response?.data || generic,
    };
  }
}

export async function put<T>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<ResponseAPI<T>> {
  const url = `${mainEndpoint}${endpoint}`;
  try {
    const response = await api.put<T>(url, data, config);
    return {
      data: response.data,
      response,
    };
  } catch (error) {
    return {
      fail: error.response?.data || generic,
    };
  }
}

export async function del<T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<ResponseAPI<T>> {
  const url = `${mainEndpoint}${endpoint}`;
  try {
    const response = await api.delete<T>(url, config);
    return {
      data: response.data,
      response,
    };
  } catch (error) {
    return {
      fail: error.response?.data || generic,
    };
  }
}
