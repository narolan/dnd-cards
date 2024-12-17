export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

export const setItem = (key, items) => {
    localStorage.setItem(key, JSON.stringify(items));
}