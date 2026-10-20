"use client";

import React, { useEffect, useRef } from "react";
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp';

export default function FloatingWhatsAppWidget({ phoneNumber, message }: { phoneNumber: string; message: string }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = wrapperRef.current;
    if (!root) return;

    const applyInert = () => {
      root
        .querySelectorAll<HTMLElement>('[aria-hidden="true"]')
        .forEach((el) => {
          el.inert = true;
        });
    };

    applyInert();

    const observer = new MutationObserver(applyInert);
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["aria-hidden"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef}>
      <FloatingWhatsApp
        phoneNumber={phoneNumber}
        accountName="Customer Support"
        avatar="/images/logo.png" // Path to public folder image
        statusMessage="Typically replies within minutes"
        chatMessage="Hello there! 💬 How can we help you today?"
        allowEsc

        notification
        notificationSound
      />
    </div>
  );
}
