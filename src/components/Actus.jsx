import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {formatDate} from "@/utils/date";
import {ArrowRight} from "lucide-react";

async function Actus(props) {

    const data = await (await fetch("http://localhost:8000/api/post")).json();

    return (
        <div id="actu" className="p-24 px-32 flex flex-col gap-12">
            <div className="flex justify-between items-center">
                <h1 className="text-green border-b-2 border-red text-4xl font-bold w-max py-2">
                    Actualités
                </h1>

                <Link
                    href={"/actu"}
                    className="group/more text-red flex gap-3 font-bold items-center"
                >
                    <p>Lire plus</p>
                    <ArrowRight className="group-hover/more:translate-x-1/2 duration-300"/>
                </Link>
            </div>

            <div className="grid grid-cols-3 gap-14">
                {
                    data.results.map(
                        (post, index) => <Actu key={index} title={post.title} tags={post.tags[0]}
                                               date={formatDate(post.updated)} resume={post.summary}
                                               image={post.image || ""} id={post.id}/>
                    )
                }
            </div>
        </div>
    );
}


function Actu({title, resume, date, tags, image, id}) {
    return (
        <Link
            href={`/actu/${id}`}
            data-aos="fade-up"
            className="border-2 rounded-sm overflow-hidden border-transparent hover:border-green duration-300 cursor-pointer">
            <div className="overflow-hidden h-72">
                <Image className="w-full h-auto" width={420} height={220} src={image} alt={""}/>
            </div>
            <div className="p-6 bg-white flex flex-col gap-3">
                <p>{date} | {tags}</p>
                <h1 className="lowercase first-letter:uppercase font-bold text-green">
                    {title}
                </h1>
                <p className="text-base text-neutral-400">
                    {resume}
                </p>
            </div>
        </Link>
    )
}

export default Actus;