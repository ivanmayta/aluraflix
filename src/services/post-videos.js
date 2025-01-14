export const postVideo = async (newVideo) => {
    try {
        const response = await fetch("http://localhost:3000/videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newVideo),
        })
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        //const addedVideo = await response.json()
        //return addedVideo
        return response
    } catch (error) {
        console.error("Error posting data:", error)
    }
}
