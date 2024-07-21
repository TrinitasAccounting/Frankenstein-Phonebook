
export const getData = async <T>(url: string): Promise<T> => {     //if returning an async or await, then it is a Promise
    const response = await fetch(url);
    return await response.json();
}
