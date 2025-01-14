import style from "./footer.module.css"
export default function Footer() {
    return (
        <footer className={style.footer}>
            <img className={style.img} src="./src/assets/logo.svg" alt="" />
        </footer>
    )
}
