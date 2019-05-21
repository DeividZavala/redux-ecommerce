export const normalizedData = array => {
    if(!array || array.length === 0) return {};
    return array.reduce((acc, item) => {
        return {
            ...acc,
            [item.id]: item
        }
    }, {})
}