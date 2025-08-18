import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "@/core/presentation/store/useAppSelector";
import { setIsLoading } from "@/core/presentation/store/loadingSlice";
import { store } from "@/core/presentation/store";


export type RequestStrategy = "react-query" | "axios";

export interface UseRequestOptions<TData> {
    url?: string | undefined;
    method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
    body?: unknown;
    config?: AxiosRequestConfig;
    enabled?: boolean;
    strategy?: RequestStrategy;
    key?: string;
    onSuccess?: (data: TData) => void;
    onError?: (error: unknown) => void;
}

export type AxiosRequestResult<T> = {
    isLoading: boolean;
    error: unknown;
    data: T | null;
    request: AxiosInstance
    execute: () => Promise<T>;
}


export const useRequest = <TData>(
    options?: UseRequestOptions<TData>
): AxiosRequestResult<TData> => {
    const {
        url,
        method = "GET",
        body,
        config,
        enabled = true,
        onSuccess,
        onError
    } = options ?? {};

    const request = useMemo(() => {
        return axios.create({
            baseURL: import.meta.env.BASE_URL,
            withCredentials: true,
        });
    }, []);

    const [data, setData] = useState<TData | null>(null);
    const isLoading = useAppSelector(state => state.loading.global);
    const [error, setError] = useState<unknown>(null);


    useEffect(() => {
        if(method === "GET" && enabled) {
            store.dispatch(setIsLoading(true));
            request.get(url ?? '', config)
            .then((response) => {
                setData(response.data);
                onSuccess?.(response.data);
            })
            .catch((error) => {
                setError(error);
                onError?.(error);
            })
            .finally(() => store.dispatch(setIsLoading(false)));
        }
    }, [url, enabled, config, method, request, onSuccess, onError]);


    const execute = async () => {
        store.dispatch(setIsLoading(true));
        try {
            const response = await request.request({
                url,
                method,
                data: body,
                ...config
            });

            setData(response.data);
            onSuccess?.(response.data);
            return response.data;
        } catch(error) {
            setError(error);
            onError?.(error);
            throw error;
        }
        finally {
            store.dispatch(setIsLoading(false));
        }
    }


    return { data, isLoading, error, execute, request };
}
