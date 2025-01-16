export const putVideo = async (video) => {
    try {
        const response = await fetch(
            `http://localhost:3000/videos/${video.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(video),
            }
        )

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const updatedVideo = await response.json()
        return updatedVideo
    } catch (error) {
        console.error("Error updating video:", error)
        throw error
    }
}
