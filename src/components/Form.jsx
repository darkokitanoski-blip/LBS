import React from "react";

const Form = () => {

    // kanske 
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const firstName = formData.get("firstName");
        const lastName = formData.get("lastName");
        const email = formData.get("email");
        const phone = formData.get("mobilePhoneNumber");
        const startYear = formData.get("startOfStudies-118922");

        const programValues = formData.getAll("progorgmappings");

        const programs = [];

        const programNames = {
            "b0a9117a-2087-f011-b4cb-000d3ab075aa": "AI och webbutveckling",
            "0a69d198-f2eb-e911-a812-000d3ab46f05": "Foto & film",
            "27a6afa0-f1eb-e911-a812-000d3ab46f05": "Grafisk design",
            "e37000bf-f1eb-e911-a812-000d3ab46f05": "Spelgrafik",
            "bd5e23b8-f2eb-e911-a812-000d3ab46f05": "Spelutveckling"
        };

        programValues.forEach((value) => {
            if (programNames[value]) {
                programs.push(programNames[value]);
            }
        });

        const message = `
            ANMÄLAN – ELEV FÖR EN DAG

            KONTAKTUPPGIFTER
            ────────────────────────
            Förnamn: ${firstName}
            Efternamn: ${lastName}
            E-post: ${email}
            Mobilnummer: ${phone}

            PROGRAM
            ────────────────────────
            ${programs.length
                            ? programs.map(program => `• ${program}`).join("\n")
                            : "Inget program valt"
                        }

            GYMNASIESTART
            ────────────────────────
            Startår: ${startYear}

            SAMTYCKE
            ────────────────────────
            Samtycke: Ja

            ────────────────────────
            Detta meddelande skickades via formuläret "Elev för en dag".
            `;

        console.log(message);
    };

    return (
        <div className="form flex-col md:flex-row lg:flex gap-20 pt-20 " id="form">
            <div className="w-full text-black p-5">
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
            <div className="w-full max-w-3xl mx-auto bg-black text-white border border-white rounded-none p-6 md:p-10">
                <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-center mb-3">
                        Anmäl dig till elev för en dag
                    </h3>

                    <p className="text-sm text-center text-white/70 mb-10">
                        Boka din plats som elev för en dag redan nu!
                    </p>

                    <form
                        id="ams-form__6ab6824ed3c46"
                        autoComplete="on"
                        method="POST"
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="hidden"
                            id="aca_send_form_nonce"
                            name="aca_send_form_nonce"
                            value="d555271494"
                        />

                        <input
                            type="hidden"
                            name="_wp_http_referer"
                            value="/malmo/elev-for-en-dag/"
                        />

                        <input
                            type="hidden"
                            name="aca_form_id"
                            value="9ylr4nwRHDEn"
                        />

                        {/* Förnamn */}
                        <label className="block">
                            <div className="text-sm font-medium mb-2">
                                Förnamn
                            </div>

                            <input
                                data-nicename="Förnamn"
                                maxLength="50"
                                required
                                type="text"
                                name="firstName"
                                className="w-full h-12 px-3 bg-black text-white border border-white rounded-none outline-none focus:bg-white focus:text-black transition-colors"
                            />
                        </label>

                        {/* Efternamn */}
                        <label className="block">
                            <div className="text-sm font-medium mb-2">
                                Efternamn
                            </div>

                            <input
                                data-nicename="Efternamn"
                                maxLength="50"
                                required
                                type="text"
                                name="lastName"
                                className="w-full h-12 px-3 bg-black text-white border border-white rounded-none outline-none focus:bg-white focus:text-black transition-colors"
                            />
                        </label>

                        {/* Email */}
                        <label className="block">
                            <div className="text-sm font-medium mb-2">
                                E-post
                            </div>

                            <input
                                data-nicename="Epost"
                                maxLength="100"
                                required
                                type="email"
                                name="email"
                                className="w-full h-12 px-3 bg-black text-white border border-white rounded-none outline-none focus:bg-white focus:text-black transition-colors"
                            />
                        </label>

                        {/* Mobilnummer */}
                        <label className="block">
                            <div className="text-sm font-medium mb-2">
                                Mobilnummer
                            </div>

                            <input
                                data-nicename="Mobilnummer"
                                maxLength="50"
                                required
                                type="text"
                                name="mobilePhoneNumber"
                                className="w-full h-12 px-3 bg-black text-white border border-white rounded-none outline-none focus:bg-white focus:text-black transition-colors"
                            />
                        </label>

                        {/* Program */}
                        <fieldset className="border border-white p-5 rounded-none">
                            <legend className="px-2 text-sm font-medium">
                                Välj program
                            </legend>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                                {[
                                    [
                                        "AI och webbutveckling",
                                        "b0a9117a-2087-f011-b4cb-000d3ab075aa",
                                    ],
                                    [
                                        "Foto & film",
                                        "0a69d198-f2eb-e911-a812-000d3ab46f05",
                                    ],
                                    [
                                        "Grafisk design",
                                        "27a6afa0-f1eb-e911-a812-000d3ab46f05",
                                    ],
                                    [
                                        "Spelgrafik",
                                        "e37000bf-f1eb-e911-a812-000d3ab46f05",
                                    ],
                                    [
                                        "Spelutveckling",
                                        "bd5e23b8-f2eb-e911-a812-000d3ab46f05",
                                    ],
                                ].map(([name, value]) => (
                                    <label
                                        key={value}
                                        className="flex items-center gap-3 p-4 border border-white cursor-pointer rounded-none hover:bg-white hover:text-black transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            name="progorgmappings"
                                            value={value}
                                            className="w-4 h-4 accent-black"
                                        />

                                        <span className="text-sm">
                                            {name}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        {/* Startår */}
                        <fieldset className="border border-white p-5 rounded-none">
                            <legend className="px-2 text-sm font-medium">
                                När börjar du gymnasiet?
                            </legend>

                            <div className="grid grid-cols-3 gap-3 mt-3">
                                {["2027", "2028", "2029"].map((year) => (
                                    <label
                                        key={year}
                                        className="flex items-center justify-center gap-2 p-4 border border-white cursor-pointer rounded-none hover:bg-white hover:text-black transition-colors"
                                    >
                                        <input
                                            type="radio"
                                            name="startOfStudies-118922"
                                            value={year}
                                            required
                                            className="accent-black"
                                        />

                                        <span className="text-sm">
                                            {year}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>

                        {/* Samtycke */}
                        <div className="border-t border-white pt-6">
                            <div className="text-sm font-medium mb-4">
                                Samtycke
                            </div>

                            <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                    data-nicename="Samtycke"
                                    type="checkbox"
                                    id="box_id_6ab6824f355e0"
                                    name="specialField__combinedAcceptance"
                                    value="Samtycke"
                                    required
                                    className="mt-1 w-4 h-4 shrink-0 accent-black"
                                />

                                <span className="text-xs md:text-sm leading-relaxed text-white/80">
                                    Jag samtycker (jag har fyllt 16 år) eller har min
                                    vårdnadshavares samtycke (jag har inte fyllt 16 år)
                                    till att lämna mina kontaktuppgifter här. Jag,
                                    alternativt min vårdnadshavare, godkänner LBS
                                    Kreativa Gymnasiets hantering av personuppgifter.
                                </span>
                            </label>

                            <p className="text-xs text-white/60 mt-4">
                                <b>Läs mer om vår personuppgiftshantering här.</b>
                            </p>
                        </div>

                        <input
                            type="hidden"
                            name="operation-type"
                            value="event-register-efd-with-sessions"
                        />

                        {/* Submit */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full md:w-auto min-w-40 px-8 py-3 bg-white text-black border border-white rounded-none font-medium hover:bg-black hover:text-white transition-colors cursor-pointer"
                            >
                                Skicka
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;