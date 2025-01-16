import { useState } from "react"
import styles from "./video-card.module.css"
import EditDialog from "./dialog-edit"

export default function CardVideo({ video, categories }) {
    const [isOpen, setIsOpen] = useState(false)
    const handleClickEdit = () => {
        console.log(isOpen)
        setIsOpen(true)
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
                <button className={styles.button}>BORRAR</button>
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
