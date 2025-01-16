import { useState } from "react"
import styles from "./edit-dialog.module.css"
import { X } from "lucide-react"
import { putVideo } from "../services/put-video"

export default function EditDialog({ isOpen, onClose, video, categories }) {
    const [formData, setFormData] = useState(video)

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        putVideo(formData)
        console.log(formData)
        onClose()
    }

    const handleClear = () => {
        setFormData({
            titulo: "",
            categoria: "",
            imageUrl: "",
            videoUrl: "",
            description: "",
        })
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.dialog}>
                <div className={styles.header}>
                    <h2 className={styles.title}>EDITAR CARD:</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="titulo" className={styles.label}>
                            Título
                        </label>
                        <input
                            id="titulo"
                            type="text"
                            className={styles.input}
                            value={formData.titulo}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    titulo: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="categoria" className={styles.label}>
                            Categoría
                        </label>
                        <select
                            id="categoria"
                            className={styles.select}
                            value={formData.categoria}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    categoria: e.target.value,
                                })
                            }
                        >
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.category} -{cat.id}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="imagen" className={styles.label}>
                            Imagen
                        </label>
                        <input
                            id="imagen"
                            type="text"
                            className={styles.input}
                            value={formData.imageUrl}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    imagen: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="video" className={styles.label}>
                            Video
                        </label>
                        <input
                            id="video"
                            type="text"
                            className={styles.input}
                            value={formData.videoUrl}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    video: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="descripcion" className={styles.label}>
                            Descripción
                        </label>
                        <textarea
                            id="descripcion"
                            className={styles.textarea}
                            value={formData.description}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    descripcion: e.target.value,
                                })
                            }
                        />
                    </div>

                    <div className={styles.buttonContainer}>
                        <button type="submit" className={styles.saveButton}>
                            GUARDAR
                        </button>
                        <button
                            type="button"
                            className={styles.clearButton}
                            onClick={handleClear}
                        >
                            LIMPIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
