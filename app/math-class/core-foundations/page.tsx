import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Container from "@/components/ui/Container"
import Sidebar from "@/components/math/Sidebar"
import AboutCard from "@/components/math/framework/AboutCard";
import UnitCard from "@/components/math/framework/UnitCard";

import { coreFoundationData } from "@/features/math-content/core-foundations/data"

export default function CoreFoundationsPage() {
    const OBJECTIVE = "The goal of this class is to learn mathematical frameworks behind the algorithms in computational methods used in Biomedical sciences."

    return (
        <div>
            <Navbar></Navbar>
            <section className="py-30">
                <Container>
                    <div className="grid grid-cols-12 gap-12">
                        {/* LEFT */}
                        <div className="col-span-3">
                            <Sidebar
                                href="/math-class/core-foundations"
                                title="Core Foundation"
                                units={coreFoundationData}
                            />
                        </div>

                        {/* RIGHT */}
                        <div className="col-span-9 space-y-8">
                            <h1 className="font-serif text-4xl">
                                Core Foundations
                            </h1>
                            <AboutCard
                                objective={OBJECTIVE}
                                units={coreFoundationData}
                            ></AboutCard>

                            {coreFoundationData.map((unit, index) => (
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