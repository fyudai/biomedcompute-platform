import Link from "next/link";

interface Props {
    unit: {
        id: string;
        title: string;
        href: string;
        chapters: {
            id: string;
            title: string;
        }[];
    };
    index: number;
}

export default function UnitCard({
    unit,
    index,
}: Props) {
    return (
        <section id={unit.id} className="rounded-2xl border bg-white p-8">
            <Link href={unit.href}>
                <h3 className="text-xl font-semibold transition hover:text-sky-700">
                    Unit {index + 1}: {unit.title}
                </h3>
            </Link>
            <div className="mt-6 space-y-2">
                {unit.chapters.map((chapter, i) => (
                    <p key={i} className="text-slate-600">
                        {i + 1}. {chapter.title}
                    </p>
                ))}
            </div>
        </section>
    );
}