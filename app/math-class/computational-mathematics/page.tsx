import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Container from "@/components/ui/Container"
import Sidebar from "@/components/math/Sidebar"
import AboutCard from "@/components/math/framework/AboutCard";
import UnitCard from "@/components/math/framework/UnitCard";

import { computationalMethodsData } from "@/features/math-content/computational-methods/data";

export default function Page() {
    const OBJECTIVE = "The goal of this class is to learn mathematical frameworks behind the algorithms in computational methods used in Biomedical sciences."
    const TITLTE = "Computational Mathematics"
    const href = "/math-class/computational-mathematics"
    return (
        <div>
            <Navbar></Navbar>
            <section className="py-30">
                <Container>
                    <div className="grid grid-cols-12 gap-12">
                        {/* LEFT */}
                        <div className="col-span-3">
                            <Sidebar
                                href={href}
                                title={TITLTE}
                                units={computationalMethodsData}
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="col-span-9 space-y-8">
                            <h1 className="font-serif text-4xl">
                                {TITLTE}
                            </h1>
                            <AboutCard
                                objective={OBJECTIVE}
                                units={computationalMethodsData}
                            ></AboutCard>

                            {/* CHAPTER CARDS */}
                            {computationalMethodsData.map((unit, index) => (
                                <div key={unit.id} id={unit.id} className="scroll-mt-25">
                                    <UnitCard
                                        key={unit.id}
                                        index={index}
                                        unit={unit}>
                                    </UnitCard>
                                </div>

                            ))}

                        </div>
                    </div>

                </Container>
            </section>
            <Footer></Footer>
        </div>
    )
}