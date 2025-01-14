import styles from "./video-card.module.css"

export default function CardVideo({ titulo, imageUrl }) {
    return (
        <div className={styles.card}>
            <img
                src={imageUrl || "/placeholder.svg"}
                alt={titulo}
                width={60}
                height={60}
                className={styles.cardImage}
            />
            <div className={styles.cardActions}>
                <button className={styles.button}>BORRAR</button>
                <button className={styles.button}>EDITAR</button>
            </div>
        </div>
    )
}
