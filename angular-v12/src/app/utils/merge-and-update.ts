export const mergeAndUpdate = <T extends { id: number; lastUpdated?: string }>(
    source: T,
    update: Partial<T> | T,
): T => {
    if (!update.id || source.id === update.id) {
        source = { ...source, ...update, lastUpdated: new Date().toString() };
    }

    return source;
};
