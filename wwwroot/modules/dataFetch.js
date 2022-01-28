export async function getData(file) {
    const response = await fetch(file);
    const data = await response.json();
    return data;
}
