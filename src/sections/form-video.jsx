import { useEffect, useState } from "react"
import styles from "./form-video.module.css"
import { postVideo } from "../services/post-videos"
import { useNavigate } from "react-router"
import { getData } from "../services/ge-videos"

export default function VideoForm() {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        titulo: "",
        categoria: "1",
        imageUrl: "",
        videoUrl: "",
        description: "",
    })

    const [categories, setCategories] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newErrors = {}

        if (!formData.titulo.trim()) {
            newErrors.titulo = "El título es obligatorio"
        }
        if (!formData.imageUrl.trim()) {
            newErrors.imageUrl = "La imagen es obligatoria"
        }
        if (!formData.videoUrl.trim()) {
            newErrors.videoUrl = "El enlace del video es obligatorio"
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", formData)
            // Aquí iría la lógica para enviar los datos

            const response = await postVideo(formData)
            if (response.ok) navigate("/")

            console.log("redirecting")
            //console.log(response)
        }
    }

    const handleReset = () => {
        setFormData({
            titulo: "",
            categoria: "",
            imageUrl: "",
            videoUrl: "",
            description: "",
        })
        setErrors({})
    }

    useEffect(() => {
        getData("categories").then(setCategories)
    }, [])

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Nuevo Video</h1>
                <p className={styles.subtitle}>
                    Complete el formulario para crear una nueva tarjeta de video
                </p>
            </header>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title" className={styles.label}>
                        Título
                    </label>
                    <input
                        id="title"
                        type="text"
                        className={styles.input}
                        value={formData.titulo}
                        onChange={(e) =>
                            setFormData({ ...formData, titulo: e.target.value })
                        }
                        placeholder="Ingrese el título"
                    />
                    {errors.title && (
                        <span className={styles.error}>{errors.title}</span>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="category" className={styles.label}>
                        Categoría
                    </label>
                    <select
                        id="category"
                        className={styles.select}
                        value={formData.categoria}
                        onChange={(e) => {
                            //console.log(e.target.value)
                            setFormData({
                                ...formData,
                                categoria: e.target.value,
                            })
                        }}
                    >
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.category} -{cat.id}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="imageUrl" className={styles.label}>
                        Imagen
                    </label>
                    <input
                        id="imageUrl"
                        type="url"
                        className={styles.input}
                        value={formData.imageUrl}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                imageUrl: e.target.value,
                            })
                        }
                        placeholder="Ingrese el enlace de la imagen"
                    />
                    {errors.imageUrl && (
                        <span className={styles.error}>{errors.imageUrl}</span>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="videoUrl" className={styles.label}>
                        Video
                    </label>
                    <input
                        id="videoUrl"
                        type="url"
                        className={styles.input}
                        value={formData.videoUrl}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                videoUrl: e.target.value,
                            })
                        }
                        placeholder="Ingrese el enlace del video"
                    />
                    {errors.videoUrl && (
                        <span className={styles.error}>{errors.videoUrl}</span>
                    )}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="description" className={styles.label}>
                        Descripción
                    </label>
                    <textarea
                        id="description"
                        className={styles.textarea}
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value,
                            })
                        }
                        placeholder="¿De qué trata este video?"
                    />
                </div>

                <div className={styles.buttonGroup}>
                    <button
                        type="submit"
                        className={`${styles.button} ${styles.primary}`}
                    >
                        Guardar
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className={`${styles.button} ${styles.secondary}`}
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </div>
    )
}
