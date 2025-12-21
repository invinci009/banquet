import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Services from "@/components/sections/Services";
import WeddingPackages from "@/components/sections/WeddingPackages";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const metadata = {
    title: "Our Services - Royal Grandeur Banquet Hall",
    description: "Explore our comprehensive event services including weddings, receptions, corporate events, and more at Royal Grandeur.",
};

export default function ServicesPage() {
    return (
        <main className="relative">
            <Header />
            <div className="pt-20">
                <Services />
                <WeddingPackages />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
