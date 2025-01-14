const API_URL = "http://localhost:3000"
export const getData = async (term) => {
    const response = await fetch(`${API_URL}/${term}`)
    const data = response.json()
    return data
}
