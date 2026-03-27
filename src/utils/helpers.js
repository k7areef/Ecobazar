export const CALC_TOTAL_PAGES = (totalCount, limit) => {
    return Math.ceil((totalCount || 0) / limit);
}