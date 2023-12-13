"use client"

import Image from "next/image";

export default function Home() {

    return (
        <>
            <div className="px-32 py-12 flex flex-col gap-12 container mx-auto">
                <div
                    className="w-full bg-neutral-100 h-64 relative mb-12">
                    <Image quality={100} src={"/assets/hopital.png"} alt={""} fill objectFit={"cover"}/>
                    <div
                        className="absolute w-full h-full z-50 flex items-end justify-center gap-6">
                        <div className="flex w-full max-w-3xl items-end justify-between gap-6">
                            <div className="w-32 aspect-square bg-white rounded-xl translate-y-1/2 overflow-hidden flex items-center justify-center border-2 border-green">
                                <Image className="w-full h-auto" width={200} height={200} src={"/assets/chu-logo.png"}
                                       alt={""}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col gap-6">

                    <h1 className="font-bold text-green text-2xl">CHU JOSEPH RASETA BEFELATANANA</h1>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-green text-2xl underline">Présentation</h2>
                        <p>
                            La Direction Générale de la Fourniture des Soins (DGFS) a pour mission d’assurer la
                            coordination, l’animation, le suivi et l’évaluation des activités des Directions et des Services
                            placés sous son autorité. Ces activités seront axées principalement à l’appui au développement
                            des Hôpitaux publics et privés de Madagascar...
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-green text-2xl underline">Contact</h2>
                        <div className="divide-y">
                           <Contact who={"Directeur  d’etablissement"} value={"+261 20 020 20"}/>
                           <Contact who={"ADAAF"} value={"+261 20 020 20"}/>
                           <Contact who={"ADAT"} value={"+261 20 020 20"}/>
                           <Contact who={"Urgences"} value={"+261 20 020 20"}/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="font-bold text-green text-2xl underline">Liste de service disponibles</h2>
                        <div className="flex gap-3 flex-wrap">
                            <Service value={"Chirurgie"}/>
                            <Service value={"Cardiologie"}/>
                            <Service value={"Radiologie"}/>
                            <Service value={"Pédiatrie"}/>
                            <Service value={"Soins intensifs"}/>
                            <Service value={"Gynécologie - Obstétrique"}/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

function Contact({who ,  value}) {
    return (
        <div className="flex justify-between items-center py-3">
            <span className="font-bold">{who}</span>
            <span>{value}</span>
        </div>
    )
}

function Service({value}) {
    return (
        <div className="border-green border-2 p-2 rounded-lg font-bold text-sm">
            {value}
        </div>
    )
}