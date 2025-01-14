import { useState, useEffect } from "react"
import { getData } from "../services/ge-videos"
import { postVideo } from "../services/post-videos"

export default function Videos() {
    const [videos, setVideos] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("Render")
        Promise.all([getData("categories"), getData("videos")])
            .then(([categoriesData, videosData]) => {
                setCategories(categoriesData)
                setVideos(videosData)
                setLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data:", error)
                setLoading(false)
            })
    }, [])

    const handlePost = async () => {
        const newVideo = {
            titulo: "Tendencias en Innovación Tecnológica",
            categoria: 3,
            imagen: "https://example.com/imagen-innovacion.jpg",
            video: "https://example.com/video-innovacion.mp4",
            description:
                "Explora las últimas tendencias en innovación tecnológica y su impacto en la industria.",
        }
        const addedVideo = await postVideo(newVideo)
        setVideos((prevVideos) => [...prevVideos, addedVideo])
    }

    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <section>
            <button onClick={handlePost}>Add Video</button>
            {categories.map(({ category, id }) => {
                const content = videos.filter((video) => video.categoria == id)
                return (
                    <article key={id}>
                        <h1>{category}</h1>
                        <ul>
                            {content.map((video, index) => (
                                <li key={index}>
                                    <h3>{video.titulo}</h3>
                                    <p>{video.description}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                )
            })}
        </section>
    )
}