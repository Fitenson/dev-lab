import type { route as routeFn } from 'ziggy-js';

declare global {
    const route: typeof routeFn;

    function isEmpty(value?: string | null): boolean;
}
