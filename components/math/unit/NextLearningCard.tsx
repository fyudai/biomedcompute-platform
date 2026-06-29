

export default function NextLearningCard() {
    return (
        <div id="next-learning-path" className="rounded-2xl border bg-white p-8 scroll-mt-25">
            <h3 className="text-xl font-semibold">
                Next Learning Paths
            </h3>
            <div className="grid grid-cols-2 gap-12">
                <div className="col-span-1">
                    Coding lab
                </div>
                <div className="col-span-1">
                    Biomedical applications
                </div>
            </div>
        </div>
    )
}