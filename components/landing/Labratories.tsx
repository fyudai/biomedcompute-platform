import Container from "@/components/ui/Container";
import { laboratories } from "@/features/landing/data";

export default function Laboratories() {
    return (
        <section className="py-20">
            <Container>

                <div className="grid gap-12 md:grid-cols-[25%_75%]">

                    {/* LEFT SIDE */}

                    <div className="sticky top-30 h-fit">

                        <h1 className="font-serif text-4xl font-medium tracking-tight">

                            <span className="text-slate-500">
                                Computational
                            </span>

                            <br />

                            <span>
                                Laboratories
                            </span>

                        </h1>

                        <p className="mt-4 text-lg">

                            Explore domain-specific computational laboratories
                            designed to teach the fundamental methods required
                            for modern biomedical research and data science.

                        </p>

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="grid gap-4 md:grid-cols-2">

                        {laboratories.map((lab) => (

                            <button
                                key={lab.id}
                                className="
                  rounded-2xl
                  border
                  p-6
                  text-left
                  h-60
                  transition
                  hover:bg-sky-100
                "
                            >

                                <h3 className="text-2xl font-semibold">
                                    {lab.title}
                                </h3>

                                <p className="mt-3 text-lg text-slate-600">
                                    {lab.description}
                                </p>

                            </button>

                        ))}

                    </div>

                </div>

            </Container>
        </section>
    );
}