import React from 'react';
import Image from "next/image";

function Preface(props) {
    return (
        <div className="p-16 px-32 justify-between bg-green bg-opacity-10 grid grid-cols-2 gap-32">
            <div className="flex flex-col justify-center gap-8 " data-aos="fade-down">
                <h2 className="text-4xl font-bold text-green">
                    Initiative de la "Caravane Médicale" au sein de la Direction Générale de Fourniture de Soins.
                </h2>
                <p className="text-neutral-500 text-lg">
                    Dans le cadre de notre engagement à fournir des soins de santé accessibles à tous, nous organisons
                    régulièrement des caravanes médicales dans les zones en difficulté ou enclavées à travers
                    Madagascar. Notre objectif principal est d'apporter des soins de qualité à ceux qui en ont le plus
                    besoin, en particulier aux communautés éloignées qui ont un accès limité aux services de santé. Avec
                    la Caravane Médicale, nous amenons une équipe médicale qualifiée et du matériel médical nécessaire
                    pour fournir des soins gratuits à ceux qui ne peuvent pas se permettre de les payer. Lors de nos
                    caravanes médicales, nous proposons une gamme de services de santé complets, y compris des
                    consultations médicales, des soins préventifs, des vaccinations, des dépistages, des traitements de
                    base, des conseils en matière de santé et bien plus encore.
                </p>
            </div>

            <div data-aos="zoom-in" className="relative">
                <Image fill objectFit={"cover"} src={"/assets/preface.jpeg"} alt={""}/>
            </div>

        </div>
    );
}

export default Preface;