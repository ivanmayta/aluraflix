import { useState, useEffect } from "react"
import { getData } from "../services/ge-videos"
import { CategoryBadge } from "../components/category-badge"
import styles from "./videos.module.css"
import CardVideo from "../components/video-card"

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

    if (loading) {
        return <div>Cargando...</div>
    }

    const handleVideoDeleted = (deletedVideoId) => {
        setVideos((prevVideos) =>
            prevVideos.filter((video) => video.id !== deletedVideoId)
        )
    }

    return (
        <section>
            {categories.map(({ category, id }) => {
                const content = videos.filter((video) => video.categoria == id)
                return (
                    <article className={styles.container} key={id}>
                        <CategoryBadge title={category} />
                        <div className={styles.grid}>
                            {content.map((video, index) => (
                                <CardVideo
                                    key={index}
                                    video={video}
                                    categories={categories}
                                    onVideoDeleted={handleVideoDeleted}
                                />
                            ))}
                        </div>
                    </article>
                )
            })}
        </section>
    )
}
