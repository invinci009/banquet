import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services";
import ServiceDetailClient from "./ServiceDetailClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllServiceSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | Alba Banquet Hall Patna`,
        description: service.description,
        keywords: [
            service.title,
            `${service.title} in Patna`,
            "catering service patna",
            "wedding catering bihar",
            ...service.features,
        ],
        openGraph: {
            title: `${service.title} - Alba Banquet Hall`,
            description: service.description,
            images: [service.image],
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Alba Banquet Hall",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alba Colony, Near Alba Masjid, Phulwari Sharif",
                "addressLocality": "Patna",
                "addressRegion": "Bihar",
                "postalCode": "800005",
                "addressCountry": "IN",
            },
        },
        "areaServed": {
            "@type": "City",
            "name": "Patna",
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": service.title,
            "itemListElement": service.features.map((feature, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": feature,
                },
                "position": index + 1,
            })),
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ServiceDetailClient service={service} />
        </>
    );
}
