"use client"

import AOS from 'aos';
import {useEffect} from "react";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className="px-32 py-12 flex flex-col gap-12">
                <h1 className="text-2xl font-semibold text-green">Liste des Centres Hospitaliers Universitaires à
                    Madagascar :</h1>

                <div className="grid grid-cols-4 gap-6">
                    <ChuCard/>
                    <ChuCard/>
                    <ChuCard/>
                    <ChuCard/>
                </div>
            </div>
        </>
    )
}

function ChuCard() {
    return (
        <div className="rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-green duration-300">
            <div>
                <Image width={620} height={330} src={"/assets/hopital.png"} alt={""}/>
            </div>
            <div className="flex flex-row-reverse justify-between items-center p-2 bg-neutral-100 gap-6">
                <div className="w-24">
                    <Image className="w-full h-auto" width={400} height={380} src={"/assets/chu-logo.png"} alt={""}/>
                </div>
                <div className="text-green font-bold text-base">
                    CHU JOSEPH RASETA BEFELATANANA
                </div>
            </div>
        </div>
    )
}