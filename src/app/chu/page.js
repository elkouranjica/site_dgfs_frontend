import Image from "next/image";

export default async function Home() {

    const data = (await (await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/etablissement/?limit=30` , { next: { revalidate: 0 }})).json()).results;

    return (
        <>
            <div className="px-32 py-12 flex flex-col gap-12">
                <h1 className="text-2xl font-semibold text-green">Liste des Centres Hospitaliers Universitaires à
                    Madagascar :</h1>

                <div className="grid grid-cols-4 gap-6">
                    {
                        data.map(chu => <ChuCard name={chu.name} image={chu.image || "/assets/hopital.png"} logo={chu.logo || "/assets/MINSAN.jpg"}/>)
                    }
                </div>
            </div>
        </>
    )
}

function ChuCard({image , name , logo}) {
    return (
        <div className="rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-green duration-300">
            <div className="h-48 overflow-hidden flex items-center justify-center">
                <Image width={620} height={330} src={image} alt={""}/>
            </div>
            <div className="flex flex-row-reverse justify-between items-center p-2 bg-neutral-100 gap-6">
                <div className="w-24 flex aspect-square items-center justify-center overflow-hidden bg-white p-3 rounded-xl ">
                    <Image className="w-auto h-full" width={400} height={380} src={logo} alt={""}/>
                </div>
                <div className="text-green font-bold text-base">
                    {name}
                </div>
            </div>
        </div>
    )
}
