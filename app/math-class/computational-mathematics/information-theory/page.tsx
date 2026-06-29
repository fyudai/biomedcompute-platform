import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import Container from "@/components/ui/Container"
import Sidebar from "@/components/math/Sidebar"
import AboutCard from "@/components/math/unit/AboutCard";
import ChapterCard from "@/components/math/unit/ChapterCard";
import SupportingMaterialCard from "@/components/math/unit/SupportCard";
import NextLearningCard from "@/components/math/unit/NextLearningCard";

import { computationalMethodsData } from "@/features/math-content/computational-methods/data";
import { informationTheoryData } from "@/features/math-content/computational-methods/information-theory/data";

export default function Page() {
    const OBJECTIVE = "Learn how to quantify information and uncertainty."
    const TITLTE = "Unit 1: Information Theory"
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
                                href="/math-class/computational-mathematics"
                                title="Computational Mathematics"
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
                                chapters={informationTheoryData}
                            ></AboutCard>

                            {informationTheoryData.map((chapter, index) => (
                                <div key={chapter.id} id={chapter.id} className="scroll-mt-25">
                                    <ChapterCard
                                        key={chapter.id}
                                        index={index}
                                        chapter={chapter}>
                                    </ChapterCard>
                                </div>

                            ))}

                            <SupportingMaterialCard />


                            <NextLearningCard />

                        </div>

                    </div>

                </Container>
            </section>
            <Footer></Footer>
        </div>
    )
}