export const deleteVideo = async (videoId) => {
    try {
        const response = await fetch(
            `http://localhost:3000/videos/${videoId}`,
            {
                method: "DELETE",
            }
        )

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        return true // Indica que la eliminación fue exitosa
    } catch (error) {
        console.error("Error deleting video:", error)
        throw error
    }
}
