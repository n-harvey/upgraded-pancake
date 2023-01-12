import "./App.css";
import Navbar from "./components/navbar.js";
import Games from "./components/games.js";
import Main from "./components/main.js";
import Footer from "./components/footer";
import Counterstrike from "./components/counterstrike";
import Rust from "./components/rust";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Container } from "react-bootstrap";

const router = createBrowserRouter([
        {
                path: "/",
                element: <Main />,
        },
        {
                path: "/csgo",
                element: <Counterstrike />,
        },
        {
                path: "/rust",
                element: <Rust />,
        },
]);

function App() {
        return (
                <>
                        <Navbar />
                        <Container>
                                <Games />
                                <RouterProvider router={router} />
                                <Footer />
                        </Container>
                </>
        );
}

export default App;
