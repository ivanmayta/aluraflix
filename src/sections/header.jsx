import Container from "../components/container"
import style from "./header.module.css"
import { Link } from "react-router"
export default function Header() {
    return (
        <Container>
            <header className={style.header}>
                <img className={style.img} src="./src/assets/logo.svg" alt="" />
                <nav className={style.nav}>
                    <Link className={style.link} to={"/"}>
                        {" "}
                        Home
                    </Link>
                    <hr />
                    <Link className={style.link} to="/create-video">
                        Nuevo Videos
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"
                            />
                        </svg>
                    </Link>
                </nav>
            </header>
        </Container>
    )
}
