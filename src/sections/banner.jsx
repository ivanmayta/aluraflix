import styles from "./banner.module.css"
export default function Banner() {
    return (
        <section className={styles.container}>
            <img
                className={styles.background}
                src="./src/assets/banner.svg"
                alt="banner"
            />

            <div className={styles.content}>
                <div className={styles.textContent}>
                    <span className={styles.badge}>FRONT END</span>
                    <h1 className={styles.title}>Challenge React</h1>
                    <p className={styles.description}>
                        Este challenge es una forma de aprendizaje. Es un
                        mecanismo donde podrás comprometerte en la resolución de
                        un problema para poder aplicar todos los conocimientos
                        adquiridos en la formación React.
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <img
                        className={styles.featuredImage}
                        src="./src/assets/player.svg"
                        alt="banner"
                    />
                </div>
            </div>
        </section>
    )
}
