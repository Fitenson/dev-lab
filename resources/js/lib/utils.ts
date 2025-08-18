import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { LaravelPaginator } from '@/types';


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const convertToDataTable = <T>(paginator: LaravelPaginator<T>): T[] => {
    const data = paginator?.data || [];

    return data;
}
