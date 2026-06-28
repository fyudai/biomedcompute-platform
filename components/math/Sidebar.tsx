import Link from "next/link";

interface MathSidebarProps {
    href: string;
    title: string;
    units: {
        id: string;
        title: string;
        href: string;
    }[];
}

export default function MathSidebar({
    href,
    title,
    units,
}: MathSidebarProps) {
    return (
        <aside className="sticky top-24 h-fit">
            {/* Title */}
            <Link href={href}>
                <h3 className="font-serif text-2xl font-medium border-b pb-4 transition hover:text-sky-700">
                    {title}
                </h3>
            </Link>

            {/* Units */}
            <nav className="mt-6 space-y-4">
                {units.map((unit, index) => (
                    <a
                        key={unit.id}
                        href={unit.href}
                        className="block text-sm text-slate-600 transition hover:text-sky-700"
                    >
                        <p>Unit {index + 1}</p>
                        <p>{unit.title}</p>
                    </a>
                ))}
            </nav>
        </aside>
    );
}