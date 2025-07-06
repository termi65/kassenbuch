
import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Impressum from './components/Impressum';

import supabase from './assets/supabase';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorUI from './components/ErrorUI';
import { defaultAllowedOrigins } from 'vite';

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
          const updateUser = (session) => {
                setUser(session?.user ?? null);
            };

            // Initial: Session abfragen
            supabase.auth.getSession().then(({ data: { session } }) => {
                updateUser(session);
                setLoading(false);
            });

            // Auth-Status abonnieren
            const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
                updateUser(session);
            });

            // Cleanup bei Unmount
            return () => listener.subscription.unsubscribe();

    },[]);

    return (
        <ErrorBoundary FallbackComponent={ErrorUI}  >
            <div>            
                {user ? <div><p style={{backgroundColor: 'black', color: 'lightgray'}}>Anmelden</p></div>
                :
                <div>
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/about" element={<About />}></Route>
                            <Route path="/impressum" element={<Impressum />}></Route>
                        </Routes>
                    </main>
                </div>
                }
            </div>
        </ErrorBoundary>
    )
}

export default App
