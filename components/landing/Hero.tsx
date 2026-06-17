import Container from "@/components/ui/Container";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex items-center pt-20">
            <Container>
                {/* Main text */}
                <div className="text-center">
                    <h1 className="font-serif text-6xl md:text-7xl/25 font-medium tracking-tight">
                        Building Computational Intuition
                        <br />
                        <span className="text-slate-500">
                            in Biomedical Research
                        </span>
                    </h1>
                    <br />
                    <p className="text-lg">
                        Understand theory, build algorithms from scratch, and explore real-world biomedical data through interactive computational laboratories.
                    </p>
                </div>

                <div className="mt-8 text-5xl text-red-800">
                    Currently under active development.
                </div>
            </Container>
        </section>
    );
}