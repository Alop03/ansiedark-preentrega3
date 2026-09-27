import Navbar from "./components/Navbar"
import ItemListContainer from "./components/ItemListContainer"
import "./App.css"

// Compone la navegación y el contenido principal del e-commerce.

function App() {
    return (
        <>
            <Navbar />

            <main>
                <ItemListContainer
                    greeting="Joyas para quienes hacen de su identidad una estética"
                />
            </main>
        </>
    )
}

export default App
