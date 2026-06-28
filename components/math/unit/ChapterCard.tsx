import Link from "next/link";

interface Props {
    chapter: {
        id: string;
        title: string;
        lectures: {
            id: string;
            title: string;
        }[];
    },
    index: number;
}

export default function ChapterCard({
    chapter,
    index,
}: Props) {
    return (
        <section id={chapter.id} className="rounded-2xl border bg-white p-8">
            <Link href="">
                <h3 className="text-xl font-semibold transition hover:text-sky-700">
                    Chapter {index + 1}: {chapter.title}
                </h3>
            </Link>

            <div className="mt-6 space-y-2">
                {chapter.lectures.map((lec, i) => (
                    <p key={i} className="text-slate-600">
                        {i + 1}. {lec.title}
                    </p>
                ))}
            </div>
        </section>
    );
}