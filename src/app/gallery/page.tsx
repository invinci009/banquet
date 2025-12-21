import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Gallery from "@/components/sections/Gallery";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const metadata = {
    title: "Gallery - Royal Grandeur Banquet Hall",
    description: "Browse our stunning gallery of weddings, receptions, and events hosted at Royal Grandeur Banquet Hall.",
};

export default function GalleryPage() {
    return (
        <main className="relative">
            <Header />
            <div className="pt-20">
                <Gallery />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
