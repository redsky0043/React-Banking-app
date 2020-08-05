export async function fetchData(apiUrl) {
    const resp = await fetch(`http://localhost:3001/${apiUrl}`);
    return await resp.json();
}