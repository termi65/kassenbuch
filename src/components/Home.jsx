import { useEffect, useState } from "react";
import supabase from '../assets/supabase';

export default function Home() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data?.user);
        }
        checkUser();

        const {data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user || null);
            return () => authListener?.subscription.unsubscribe();
        })

    },[]);
    return (
        <div>
            <h1>Kassenbuch</h1>
            <div><p className="text-decoration-underline">{user ? `angemeldet als ${user.identities[0].email}` : 'Gast'}</p></div>
        </div>
    )
}