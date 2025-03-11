"use client";
import { useEffect, useState } from "react";

export default function ContactPage() {
    const [reload, setReload] = useState(false);

    useEffect(() => {

        if (!sessionStorage.getItem("contactReloaded")) {
            sessionStorage.setItem("contactReloaded", "true");
            setReload(true);
        }
    }, []);

    return (
        
        <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
            {/* Contact.html inside iframe, ensuring navbar stays */}
            <iframe 
                src="/contact.html" 
                key={reload ? "reload" : "normal"} 
                style={{ width: "100vw", height: "100vh", border: "none" }}
            ></iframe>
        </div>
    );
}
