import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import { Socialicons } from "./components/Social";
import Ceo from "./components/Ceo";
import Circle from "./components/Circle";
import Testimonials from "./components/Testimonials";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Nav />
            <Socialicons />
            <Header />
            <About />
            <Ceo />
            <Circle />
            <Testimonials />
            <Works />
            <Contact />
            <Footer />
            {/*
             */}
        </>
    );
}

export default App;
