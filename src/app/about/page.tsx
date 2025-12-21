import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const metadata = {
    title: "About Us - Royal Grandeur Banquet Hall",
    description: "Learn about Royal Grandeur Banquet Hall - Patna's premier destination for weddings and celebrations since 2010.",
};

export default function AboutPage() {
    return (
        <main className="relative">
            <Header />
            <div className="pt-20">
                <About />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
