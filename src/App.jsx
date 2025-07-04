
import './App.css'

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Impressum from './components/Impressum';

function App() {

    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/impressum" element={<Impressum />}></Route>
                </Routes>
            </main>
        </>
    )
}

export default App
