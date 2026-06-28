import Container from "@/components/ui/Container"
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import MathClassHero from "@/components/math/MathClassHero";
import MathCurriculumSection from "@/components/math/MathCurriculumSection";

export default function MathClassPage() {
    return (
        <div>
            <Navbar></Navbar>
            <section className="py-20">
                <Container>
                    {/* Hero */}
                    <MathClassHero />

                    {/* Curriculum */}
                    <MathCurriculumSection />

                </Container>
            </section>
            <Footer></Footer>
        </div>

    );
}