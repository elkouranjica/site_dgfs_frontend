import React from 'react';
import {Facebook, Linkedin, Mail} from "lucide-react";

function Footer() {
    return (
        <footer
            className="flex flex-col items-centertext-center text-white">
            <div className="pt-9 bg-green  w-full ">
                <div className="mb-9 flex justify-center gap-9">
                    <Facebook size={24}/>
                    <Linkedin size={24}/>
                    <Mail size={24}/>
                </div>
            </div>

            <div
                className="w-full bg-green text-neutral-400 bg-opacity-10 p-4 text-center  text-sm"> © 2023 Copyright :
                <a className=""> Direction Générale de Fourniture des Soins </a>
            </div>
        </footer>
    );
}

export default Footer;