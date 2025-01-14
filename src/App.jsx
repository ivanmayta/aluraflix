import "./App.css"
import Footer from "./sections/footer"
import Header from "./sections/header"
import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./sections/home"
import CreateVideo from "./sections/create-video"

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/create-video" element={<CreateVideo />} />
                    </Routes>
                </main>

                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App
