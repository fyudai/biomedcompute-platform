import MathCarriculumCard from "@/components/math/MathCurriculumCard"
import { mathClassData } from "@/features/math-content/data"

export default function MathCurriculumSection() {
    return (
        <div className="mt-16 grid gap-8 md:grid-cols-3">
            {mathClassData.map((category) => (
                <MathCarriculumCard
                    key={category.id}
                    category={category}
                />
            ))}
        </div>
    )
}