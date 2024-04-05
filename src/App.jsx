import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import { Socialicons } from "./components/Social";

function App() {
    return (
        <>
            <Nav />
            <Socialicons />
            <Header />
            <About />
        </>
    );
}

export default App;
