import styles from "./category-badge.module.css"
export const CategoryBadge = ({ title }) => {
    const color = getColor(title)

    return (
        <h2 className={styles.title} style={{ backgroundColor: color }}>
            {title}
        </h2>
    )
}

const getColor = (title) => {
    switch (title) {
        case "Front End":
            return "#6bd1ff" // Color para Front End
        case "Back End":
            return "#ff6b6b" // Color para Back End
        case "Innovación y gestión":
            return "#6bff95" // Color para Innovación y gestión
        default:
            return "#ccc" // Color por defecto
    }
}
