import Container from "@/components/ui/Container";

interface FrameworkSectionProps {
    titles: string[],
    description: string;
    items: string[];
    reverse?: boolean;
}

export default function FrameworkSection({
    titles,
    description,
    items,
    reverse = false,
}: FrameworkSectionProps) {
    const output = Array.from(titles, (value, index) => {
        return { index, value };
    });

    return (
        <section className="py-24">
            <Container>
                <div
                    className={`grid gap-12 ${reverse ? "md:grid-cols-[60%_40%]" : "md:grid-cols-[40%_60%]"} ${reverse ? "md:grid-flow-col-dense" : ""}`}
                >
                    {/* TEXT BLOCK */}
                    <div className={`sticky top-24 h-fit ${reverse ? "md:col-start-2" : ""}`}>
                        <h2 className="font-serif text-4xl/13 font-medium tracking-tight">
                            {/*title*/}
                            {output.map((out) => (
                                <p key={`${out.index}-${out.value}`}>
                                    {out.value}
                                </p>
                            ))}
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className={`grid gap-4 sm:grid-cols-2 ${reverse ? "md:col-start-1" : ""}`}>
                        {items.map((item) => (
                            <div
                                key={item}
                                className="
                                    rounded-2xl
                                    border
                                    p-6
                                    transition
                                    hover:bg-sky-50
                                    "
                            >
                                <h3 className="font-serif font-semibold">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}