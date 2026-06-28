import Link from "next/link";

import Container from "@/components/ui/Container";
import { navigationLinks } from "@/features/landing/data";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 border-b bg-white/80 backdrop-blur">
            <Container>
                <nav className="flex items-center justify-between py-5">

                    {/* Logo */}
                    <div className="font-semibold text-lg transition hover:text-sky-700">
                        <Link href="/">
                            BioMedCompute Lab
                        </Link>
                    </div>

                    {/* Navigation */}
                    <ul className="hidden md:flex gap-8">
                        {navigationLinks.map((link) => (
                            <li key={link.label}>
                                <a href={link.href}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Search */}
                    <input
                        type="text"
                        placeholder="Search laboratories..."
                        className="border rounded-md px-3 py-2 bg-white"
                    />
                </nav>
            </Container>
        </header>
    );
}