"use client";

import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
;

export default function ContactForm() {
  return (
    <div className="flex lg:flex-col gap-4 items-center justify-center">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/matias-caprini/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground transition-colors"
      >
        <FaLinkedin className="h-6 w-6" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/541132892114"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-foreground text-background hover:bg-green-500 hover:text-white transition-colors"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>

      {/* Mail */}
      <a
        href="mailto:matiascaprini@gmail.com"
        className="p-3 rounded-full bg-foreground text-background hover:bg-blue-500 hover:text-white transition-colors"
      >
        <FaEnvelope className="h-6 w-6" />
      </a>
    </div>
  );
}
