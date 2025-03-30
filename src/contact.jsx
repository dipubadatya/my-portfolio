import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
    return (
        <div className="contact w-full bg-gray-950 text-white py-10 px-4 md:px-10 lg:px-20">
            <div className="text-center mb-10">
                <h1 className="text-lg md:text-xl lg:text-2xl font-normal bg-yellow-300 inline-block px-2 py-1">Get in Touch</h1>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2">Contacts</h1>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-sm md:text-base lg:text-lg text-center md:text-left">
                <h1 className="flex gap-2 items-center"><IoIosMail /> papubadatya355@gmail.com</h1>
                <h1 className="flex gap-2 items-center"><IoMdCall /> +91 6370134774</h1>
                <h1 className="flex gap-2 items-center text-center md:text-left"><FaLocationDot /> Berhampur, Ganjam, Odisha, India - 760010</h1>
            </div>
            
            <div className="mt-10">
                <div className="flex justify-center gap-6 text-2xl md:text-3xl">
                    <a href="https://www.linkedin.com/in/papu-badatya-759767254/" className="hover:text-blue-500 transition"><IoLogoLinkedin /></a>
                    <a href="https://github.com/pstarz7" className="hover:text-gray-400 transition"><FaGithubSquare /></a>
                    <a href="https://www.instagram.com/_pstarz/" className="hover:text-pink-500 transition"><FaSquareInstagram /></a>
                    <a href="https://www.behance.net/papubadatya1" className="hover:text-blue-600 transition"><FaBehanceSquare /></a>
                </div>
                
                <div className="mt-6 text-center text-sm md:text-base">
                    <h1>&copy; Made in ReactJs By Papu Badatya</h1>
                </div>
            </div>
        </div>
    );
}

export default Contact;