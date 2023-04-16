import {useMemo} from 'react';
import {useHttpLog} from '@/utils/httpLog';
import axiosInstance from './axiosInstance';

type HttpLog = {
  timestamp: number;
  url: {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'TRACE' | 'CONNECT' | string;
    host?: string;
    url?: string;
    query: any;
  };
  req: {
    headers: Record<string, any>;
    body: any;
  };
  resp: {
    headers: Record<string, any>;
    status: number;
    body: any;
  };
};

const useAxiosInterceptor = () => {
  const {setHttpLog} = useHttpLog();

  useMemo(() => {
    axiosInstance.interceptors.response.use(
      resp => {
        const {config, headers: respHeaders, status, data} = resp;
        const {baseURL, url, method, params, headers: reqHeaders, data: body} = config;

        // console.log('timestamp', new Date().getTime());
        // console.log('url', {method, host: baseURL, url, query: params});
        // console.log('req', {headers: reqHeaders, body});
        // console.log('resp', {headers: respHeaders, status, body: data});
        setHttpLog(prev => {
          return [
            {
              timestamp: new Date().getTime(),
              url: {method, host: baseURL, url, query: params},
              req: {headers: reqHeaders, body},
              resp: {headers: respHeaders, status, body: data},
            },
            ...prev,
          ];
        });
        return resp;
      },
      error => Promise.reject(error),
    );
  }, []);
};

export default useAxiosInterceptor;
export type {HttpLog};
