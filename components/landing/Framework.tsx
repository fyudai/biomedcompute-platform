import Container from "@/components/ui/Container";

export default function Framework() {
    return (
        <section className="py-20">
            <Container>
                <div className="grid gap-12 md:grid-cols-2">

                    {/* LEFT SIDE */}
                    <div className="sticky top-30 h-fit">

                        <h1 className="font-serif text-4xl font-medium tracking-tight">
                            <span className="text-slate-500">
                                Main Framework
                            </span>

                            <br />

                            <span>
                                in Our Platform
                            </span>
                        </h1>

                        <p className="mt-4 text-lg">
                            We value three pillars to understand and apply
                            computational approaches for biomedical research.
                        </p>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="overflow-y-auto pr-4 space-y-6">

                        <button className="w-full rounded-2xl border p-8 text-left transition hover:bg-sky-100">

                            <h3 className="text-xl font-semibold">
                                UNDERSTAND
                            </h3>

                            <p className="mt-3 text-lg text-slate-600">
                                Mathematical foundations and scientific theory.
                            </p>

                        </button>


                        <button className="w-full rounded-2xl border p-8 text-left transition hover:bg-sky-100">

                            <h3 className="text-xl font-semibold">
                                BUILD
                            </h3>

                            <p className="mt-3 text-lg text-slate-600">
                                Implement algorithms from scratch through scientific programming.
                            </p>

                        </button>


                        <button className="w-full rounded-2xl border p-8 text-left transition hover:bg-sky-100">

                            <h3 className="text-xl font-semibold">
                                EXPLORE
                            </h3>

                            <p className="mt-3 text-lg text-slate-600">
                                Experiment with datasets, simulations, and models.
                            </p>

                        </button>

                    </div>

                </div>
            </Container>
        </section>
    );
}


