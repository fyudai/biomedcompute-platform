import Link from 'next/link';

export default function Page() {
    return (
        <div>
            {/* Navigation Link */}
            <Link href="#target-section">Go to Section</Link>

            <div className="h-screen">Scroll down content...</div>

            {/* Target Section with scroll margin */}
            <section id="target-section" className="scroll-mt-20">
                <h2>Target Section Header</h2>
                <p>Your section content goes here.</p>
            </section>
        </div>
    );
}
