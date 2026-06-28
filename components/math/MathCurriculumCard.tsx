import Link from "next/link"
import { MathCategory } from "@/features/math-content/types"

interface Props {
    category: MathCategory
}

export default function MathCarriculumCard({ category }: Props) {

    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            {/* Category Title */}
            <Link href={category.href}>
                <h2 className="font-serif text-2xl font-bold hover:text-sky-700">
                    {category.title}
                </h2>
            </Link>

            {/* Description */}
            <p className="mt-3 text-sm text-slate-600">
                {category.description}
            </p>

            {/* Units */}
            <div className="mt-6 space-y-3">
                {category.units.map((unit, index) => (
                    <Link key={unit.id} href={unit.href}>
                        <div className="py-2 text-sm transition hover:text-sky-700">
                            {index + 1}. {unit.title}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}