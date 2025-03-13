"use client";
import { useEffect, useState } from "react";

export default function ContactPage() {




    return (

        <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
            {/* Contact.html inside iframe, ensuring navbar stays */}
            <iframe
                src="/contact.html"

                style={{ width: "100vw", height: "100vh", border: "none" }}
            ></iframe>
        </div>
    );
}
