"use client";

import React, { useEffect, useRef, useState } from "react";
import { FloatingWhatsApp } from "@digicroz/react-floating-whatsapp";

const CHATBOX_CLASS = "halepath-wa-chatbox";

export default function FloatingWhatsAppWidget({
  phoneNumber,
}: {
  phoneNumber: string;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const chatbox = wrapperRef.current?.querySelector<HTMLElement>(
      `.${CHATBOX_CLASS}`,
    );
    if (!chatbox) return;
    chatbox.inert = !isOpen;
  }, [isOpen]);

  return (
    <div ref={wrapperRef}>
      <FloatingWhatsApp
        phoneNumber={phoneNumber}
        accountName="Customer Support"
        avatar="/images/logo.png"
        statusMessage="Typically replies within minutes"
        chatMessage="Hello there! 💬 How can we help you today?"
        chatboxClassName={`floating-whatsapp-chatbox ${CHATBOX_CLASS}`}
        allowEsc
        notification
        notificationSound
        onClick={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
