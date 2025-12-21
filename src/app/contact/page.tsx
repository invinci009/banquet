import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

export const metadata = {
    title: "Contact Us - Royal Grandeur Banquet Hall",
    description: "Get in touch with Royal Grandeur Banquet Hall. Schedule a venue tour or inquire about our event services.",
};

export default function ContactPage() {
    return (
        <main className="relative">
            <Header />
            <div className="pt-20">
                <Contact />
            </div>
            <Footer />
            <WhatsAppButton />
        </main>
    );
}
