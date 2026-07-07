"use client";

import React from 'react';
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp';

export default function FloatingWhatsAppWidget({ phoneNumber, message }: { phoneNumber: string; message: string }) {
  return (
    <FloatingWhatsApp
      phoneNumber={phoneNumber}
      accountName="Customer Support"
      avatar="/avatar-image.png" // Path to public folder image
      statusMessage="Typically replies within minutes"
      chatMessage="Hello there! 💬 How can we help you today?"
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  );
}
