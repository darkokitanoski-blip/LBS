import React, { useEffect, useState } from "react";


// komponent för form del, där användaren kommer vara redirektad till LBS officiela sida för att anmäla sig
const Form = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const updateViewport = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            if (!mobile) {
                setIsExpanded(true);
            }
        };

        updateViewport();
        window.addEventListener("resize", updateViewport);

        return () => window.removeEventListener("resize", updateViewport);
    }, []);

    const handleToggle = (event) => {
        if (!isMobile) return;

        const shouldIgnoreClick = event.target.closest(
            "input, textarea, select, button, label, a"
        );

        if (shouldIgnoreClick) return;

        setIsExpanded((prev) => !prev);
    };


    return (
        <div className="form flex-col md:flex-row lg:flex gap-20 pt-20 " id="form">
            <div className="form-wrapper w-full text-white p-5 overflow-auto">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                    ELEV FÖR EN DAG PÅ LBS LUND
                </h1>

                <div className="space-y-6 text-base md:text-lg leading-relaxed">
                    <p>
                        Välkommen att boka in dig till Elev för en dag!
                    </p>

                    <p>
                        Som Elev för en dag får du prova på hur det är att gå någon av våra
                        utbildningar, under en dag. Vi skräddarsyr besöket utifrån dina
                        önskemål, så informera oss gärna vad du är intresserad av att veta.
                    </p>

                    <p>
                        Boka den dag och profil i formuläret som du är mest intresserad av.
                        Om det inte finns några datum att välja på i formuläret kommer vi att
                        höra av oss till dig via mail för att komma överens om en passande dag
                        och tid!
                    </p>
                </div>

                <div className="mt-12 border-t border-black pt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-5">
                        Har du några frågor om ditt besök?
                    </h2>

                    <p className="text-base md:text-lg leading-relaxed">
                        Mejla oss på:{" "}
                        <a
                            href="mailto:lund@lbs.se"
                            className="underline underline-offset-4 hover:no-underline"
                        >
                            lund@lbs.se
                        </a>{" "}
                        eller ring oss:{" "}
                        <a
                            href="tel:046124450"
                            className="underline underline-offset-4 hover:no-underline"
                        >
                            046-12 44 50
                        </a>
                        . Du hittar oss på{" "}
                        <a
                            href="https://www.hitta.se/kartan!~55.70696,13.19282,14z/tr!i=X7vGTMAX/search!i=icnqqrrb!q=LBS%20Kreativa%20Gymnasiet%20Lund%20Bredgatan%2010%20Lund!t=single!st=cmp!ai=icnqqrrb!aic=55.70696:13.19282?search=LBS%20Kreativa%20Gymnasiet%20Lund%20Bredgatan%2010%20Lund&st=single&sst=cmp&sids=icnqqrrb&srb=0"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="underline underline-offset-4 hover:no-underline"
                        >
                            Bredgatan 10
                        </a>
                        .
                    </p>

                    <p className="mt-6 font-semibold text-base md:text-lg">
                        Kom ihåg att du själv ansvarar för att söka ledigt hos din nuvarande
                        skola innan du besöker oss.
                    </p>
                </div>
            </div>
            <div
                className={`form-panel flex items-center justify-center ${isExpanded ? "is-open" : "is-closed"}`}
                onClick={handleToggle}
                aria-expanded={isExpanded}
                role={isMobile ? "button" : undefined}
                tabIndex={isMobile ? 0 : undefined}
                onKeyDown={(event) => {
                    if (!isMobile) return;
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setIsExpanded((prev) => !prev);
                    }
                }}
            >
                    <a
                        href="https://lbs.se/lund/elev-for-en-dag/"
                        target="_blank"
                        className="inline-flex items-center justify-center bg-white px-6 py-3 text-base font-semibold text-black shadow-sm transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                    >
                        Skicka anmälan här!
                    </a>
            </div>
        </div>
    );
};

export default Form;