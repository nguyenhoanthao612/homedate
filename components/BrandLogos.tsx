'use client';

import React from 'react';

export function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function MessengerIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.9 1.15 5.48 3.1 7.23a.85.85 0 01.27.65c-.03.75-.24 2.15-.36 2.94a.53.53 0 00.75.56l3.35-1.87a.93.93 0 01.5 0c.75.2 1.55.3 2.39.3 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm4.84 8.78l-2.6 4.14a1.05 1.05 0 01-1.46.32l-2.45-1.63a.35.35 0 00-.39 0l-3.32 2.5a.35.35 0 01-.52-.45l2.6-4.14a1.05 1.05 0 011.46-.32l2.45 1.63c.12.08.28.08.4 0l3.32-2.5a.35.35 0 01.51.45z" />
    </svg>
  );
}

export function ZaloIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Official rounded rect-style speech bubble - White */}
      <path
        fill="#FFFFFF"
        d="M 7 4.5 h 10 c 2.5 0, 4.5 2, 4.5 4.5 v 4 c 0 2.5, -2 4.5, -4.5 4.5 H 9.5 l -3.8 2.8 c -0.4 0.3, -0.9 -0.1, -0.8 -0.6 l 0.6 -2.2 C 4 17.5, 2.5 15.5, 2.5 13 v -4 c 0 -2.5, 2.5 -4.5, 4.5 -4.5 z"
      />
      {/* Official Capitalized "Zalo" text styled with tight letter-spacing and ultra-bold weight */}
      <text
        x="12.3"
        y="11.4"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="5.5px"
        letterSpacing="-0.35px"
        fill="#0068FF"
      >
        Zalo
      </text>
    </svg>
  );
}

export function TikTokIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.86 4.86 0 0 1-3.7-1.11 4.85 4.85 0 0 1-1-3.78h-3.07v12.5c0 1.34-1.08 2.42-2.42 2.42a2.42 2.42 0 0 1-2.42-2.42 2.42 2.42 0 0 1 2.42-2.42c.47 0 .91.13 1.28.37V9.02a5.45 5.45 0 0 0-1.28-.15c-3 0-5.45 2.45-5.45 5.45s2.45 5.45 5.45 5.45 5.45-2.45 5.45-5.45V7.26a8.26 8.26 0 0 0 5.45 2.11V6.3a5.45 5.45 0 0 1-1-.1c-.9-.23-1.63-.74-2.2-1.5z" />
    </svg>
  );
}

export function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}
