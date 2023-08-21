import React from 'react'
import { images } from "../constants/"
import { BsCheckLg } from "react-icons/bs";

const ArticleCard = ({ className }) => {
    return (
        <div className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}>
            <img src={images.PostImage} alt="title" className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-68"/>
            <div className="p-5">
                <h2 className="font-roboto font-bold text-xl text-dark-hard md:text-2xl lg:text-[28px]">Future of Work</h2>
                <p className="text-dark-light mt-3 text-sm md:text-lg ">Majority of peole will work in jobs that don’t exist today.</p>
                <div className="flex justify-between fle-nowrap items-center mt-6">
                    <div className="flex items-center gap-x-2 md:gap-x-2.5">
                        <img src={images.PostProfileImage} alt="profile" className="w-9 h-9 md:w-10 md:h-10"/>
                    <div className="flex flex-col">
                        <h4 className="font-bold italic text-dark-hard text-sm md:text-base">Chulsoo Kim</h4>
                        <div className="flex items-center gap-x-2">
                            <span className="bg-[#36B37E] w-fit bg-opacity-20 p-0.5 rounded-full">
                                <BsCheckLg className="w-2.5 h-2.5 text-[#36B37E]"/>
                            </span>
                            <span className="itatlic text-dark-light text-xs md:text-sm">Verified writer</span>
                        </div>
                    </div>
                </div>
                    <span className="text-bold text-dark-light italic text-sm md:text-base">02 May</span>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard