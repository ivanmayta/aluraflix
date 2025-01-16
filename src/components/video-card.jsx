import { useState } from "react"
import styles from "./video-card.module.css"
import EditDialog from "./dialog-edit"
import { deleteVideo } from "../services/delete-video"

export default function CardVideo({ video, categories, onVideoDeleted }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClickEdit = () => {
        console.log(isOpen)
        setIsOpen(true)
    }
    const handleDelete = async () => {
        try {
            await deleteVideo(video.id)
            onVideoDeleted(video.id) // Solo actualiza el estado si la eliminación es exitosa
        } catch (error) {
            console.error("Error deleting video:", error)
        }
    }
    return (
        <div className={styles.card}>
            <img
                src={video.imageUrl || "/placeholder.svg"}
                alt={video.titulo}
                width={60}
                height={60}
                className={styles.cardImage}
            />
            <div className={styles.cardActions}>
                <button onClick={handleDelete} className={styles.button}>
                    BORRAR
                </button>
                <button onClick={handleClickEdit} className={styles.button}>
                    EDITAR
                </button>
            </div>
            <EditDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                video={video}
                categories={categories}
            />
        </div>
    )
}
