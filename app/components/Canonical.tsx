'use client';

import { usePathname } from 'next/navigation';

export default function Canonical() {
    const pathname = usePathname();
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';
    const canonicalUrl = baseUrl + pathname;

    return <link rel="canonical" href={canonicalUrl} />;
}
