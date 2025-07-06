import { useEffect, useState } from "react";
// import supabase from '../assets/supabase';

export default function Home() {
    // const [user, setUser] = useState(null);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //       const updateUser = (session) => {
    //             setUser(session?.user ?? null);
    //         };

    //         // Initial: Session abfragen
    //         supabase.auth.getSession().then(({ data: { session } }) => {
    //             updateUser(session);
    //             setLoading(false);
    //         });

    //         // Auth-Status abonnieren
    //         const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
    //             updateUser(session);
    //         });

    //         // Cleanup bei Unmount
    //         return () => listener.subscription.unsubscribe();

    // },[]);
    return (
        <div>
            <h1>Kassenbuch</h1>
            <div><p className="text-decoration-underline">{user ? `angemeldet als ${user.identities[0].email}` : <p>Sie müssen sich anmelden, wenn Sie die App nutzen wollen.</p>}</p></div>
            <div></div>
        </div>
    )
}