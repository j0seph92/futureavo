"use client";
import { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    const tawkToScript = document.createElement("script");
    tawkToScript.src = "code";
    tawkToScript.async = true;

    document.head.appendChild(tawkToScript);

    return () => {
      // Cleanup if needed
      document.head.removeChild(tawkToScript);
    };
  }, []);

  return null; // You can customize this based on your needs
};

export default TawkToChat;
