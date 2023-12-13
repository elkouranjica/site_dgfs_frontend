import Image from "next/image";
import {MDXRemote} from "next-mdx-remote/rsc";
import {formatDate} from "@/utils/date";

export default async function Page({params}) {

    const data = await (await fetch(`http://localhost:8000/api/post/${params.id}`)).json();

    console.log(data)

    return (
        <section className="mx-auto my-12">
            <div className="max-w-3xl mx-auto">
                <div className="aspect-video h-64 w-full flex justify-center items-center rounded-md overflow-hidden">
                    <Image width={900} height={400} className="w-full h-auto" src={data.image} alt={""}/>
                </div>
                <div className="flex flex-col  justify-between my-12 gap-3">
                    <h1 className="text-3xl  text-green font-bold">{data.title}</h1>
                    <p>{formatDate(data.created)} | {data.tags}</p>
                </div>
                <div className="flex flex-col gap-3 text-md ">
                    {
                        <MDXRemote source={data.body} />
                    }
                </div>
            </div>
        </section>
    )
}
