import Container from "@/components/ui/Container";

export default function Vision() {
    return (
        <section className="py-28">
            <Container>
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight">
                        Our Vision
                    </h2>
                    <p className="mt-8 text-lg text-slate-700 leading-relaxed">
                        BioMedCompute Lab aims to bridge the gap between mathematical theory
                        and real-world biomedical research by providing interactive computational
                        laboratories where users develop intuition through implementation and experimentation.
                    </p>
                    <p className="mt-6 text-base text-slate-500 leading-relaxed">
                        Instead of passive learning, we focus on active construction of knowledge —
                        encouraging users to understand underlying principles, build algorithms
                        from scratch, and explore complex biological systems through computation.
                    </p>
                    <p className="mt-10 text-sm text-slate-400">
                        Built for researchers, students, and engineers in computational science.
                    </p>
                </div>
            </Container>
        </section>
    );
}