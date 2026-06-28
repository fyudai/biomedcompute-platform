interface Props {
    objective: string;
    chapters: {
        title: string;
        id: string;
    }[];
}

export default function AboutCard({
    objective,
    chapters,
}: Props) {
    return (
        <div className="rounded-2xl border bg-white p-8">
            <h3 className="text-xl font-semibold">
                About this unit
            </h3>
            <div className="mt-4 space-y-4">
                <div>
                    <p className="font-medium text-slate-600">
                        {objective}
                    </p>
                </div>

                <div className="">
                    <h3 className="text-xl font-semibold">
                        Chapters
                    </h3>
                    <div className="mt-4 space-y-2">
                        {chapters.map((unit, index) => (
                            <a key={unit.id} href={`#${unit.id}`} className="">
                                <p className="text-slate-600 transition hover:text-sky-700">
                                    {index + 1}. {unit.title}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4 space-y-4">
                <h3 className="text-xl font-semibold">
                    Supporting Materials
                </h3>
            </div>
        </div>
    );
}