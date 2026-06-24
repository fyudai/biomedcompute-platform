import Container from "@/components/ui/Container";
import { CTAButtons } from "@/features/landing/data";
import { ROUTES } from "@/features/navigation/route";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex items-center pt-30">
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
                        BioMedCompute Lab is a living computational platform that combines mathematical learning, algorithm implementation, real-world biomedical research applications, and frontier scientific discovery in one unified ecosystem.
                    </p>
                </div>

                {/* CTA buttons */}
                <div className="grid grid-cols-1 gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
                    {CTAButtons.map((cta) => (
                        <div key={cta.id} className="p-1">
                            <button
                                key={cta.id}
                                className="
                                    w-full
                                    rounded-2xl
                                    border
                                    bg-white
                                    p-6
                                    text-left
                                    transition
                                    hover:bg-sky-100
                                    min-h-[180px]
                                    h-full
                                "
                            >
                                <h3 className="text-lg font-semibold">
                                    {cta.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">
                                    {cta.description}
                                </p>
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-5xl text-red-800 text-center">
                    Currently under active development.
                </div>
            </Container>
        </section>
    );
}