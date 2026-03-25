import statistics from "@data/statistics.json";

function Statistics() {
    return (
        <section className="statistics-section py-10 md:py-14 bg-[#010a06]" id="statistics">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {statistics.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card bg-[#07160e]/55 border border-white/5 rounded-2xl px-4 py-6 md:px-6 md:py-7 text-center"
                        >
                            <div className="stat-value text-soft-primary font-light text-2xl sm:text-3xl md:text-4xl leading-none">{stat.value}</div>
                            <p className="stat-label text-white! mt-3 text-sm sm:text-base">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Statistics;