import Container from "@/components/ui/Container";
import { footerLinks } from "@/features/landing/data";

export default function Footer() {
    return (
        <footer className="border-t bg-black">
            <Container>
                <div className="py-10 text-center">

                    <h3 className="text-lg font-semibold text-white">
                        BioMedCompute Lab
                    </h3>

                    <p className="mt-2 text-gray-400">
                        Interactive Computational Laboratories
                        for Biomedical Research
                    </p>

                    <p className="mt-4 text-sm text-gray-100">
                        Currently Under Development
                    </p>

                </div>
            </Container>
        </footer>
    );
}