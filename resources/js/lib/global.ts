globalThis.isEmpty = (value?: string | null): boolean => {
    return value === '' || value === null || value === undefined;
};


if(typeof window !== "undefined") {
    window.isEmpty = globalThis.isEmpty;
}
