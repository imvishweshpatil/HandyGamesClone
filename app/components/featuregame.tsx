"use client";
import Image from "next/image";
import { useState } from "react";

const FeatureGame = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const games = [
        { title: "SPONGEBOB SQUAREPANTS: THE COSMIC SHAKE",
            description: "Wish-granting Mermaid's Tears in the hands of SpongeBob and Patrick..." },

        { title: "ODDSPARKS",
            description: "Build machines and make various Sparks while you explore new lands and builds automation lanes to adapt this unknown technology." },

        { title: "AIRHEAD",
            description: "Help a small body save a head-like organism full of air, from a leak that threatens its life." },

        { title: "ENDLING",
            description: "Your mission is to safety guide the last mother fox and her three vulnerable cubs trough a dystopian future of an exploited Earth." }
    ];

    return (
        <main>
            <div className="featuregame relative flex flex-col items-center" style={{ flexGrow: 1}}>
                <Image src={"/featuregamebg.jpg"} alt={"background"} layout={"fill"} objectFit={"cover"} className={"featuregamebg"} />
                <div className="overlay relative flex-grow bg-gray-800 opacity-90 flex flex-col justify-center items-center w-100">
                    <h1 className="heading text-white font-bold flex items-center justify-center p-5"
                        style={{ letterSpacing: "6px", fontSize: "33px", fontFamily:"Rubik"}}
                    >
                        FEATURED GAMES
                    </h1>
                    <div className="featuregame-images flex cursor-pointer w-full">
                        {games.map(({ title, description }, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <Image
                                    src={`/featuregame${index + 1}.jpg`}
                                    alt={`featuregame${index + 1}`}
                                    width={999}
                                    height={250}
                                />
                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 bg-blue-200 opacity-95 flex items-center justify-center">
                                        <div className="text-black text-center">
                                            <h2 className="font-bold mb-2" style={{fontSize:"25px", fontFamily:"Rubik"}}>{title}</h2>
                                            <p style={{fontFamily:"Karla"}}>{description}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-center my-10">
                        <button className="games font-bold p-3 text-white"
                                style={{border: "1px solid white", fontSize:"14px", width:"280px", letterSpacing:"1px", fontFamily:"Karla"}}
                        >
                            CHECK OUT ALL OUR GAMES
                        </button>
                    </div>
                    <div className="getgames mb-10">
                        <div className="relative my-10">
                            {/*<div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-px bg-white"></div>*/}
                            <h1 className="text-white text-center" style={{ fontSize: "25px", fontFamily:"Rubik", letterSpacing:"3px" }}>GET OUR GAMES HERE</h1>
                            {/*<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 h-px bg-white"></div>*/}
                        </div>
                        <div className="gamesapp flex gap-40 cursor-pointer">
                            <Image src={"/GOG1.svg"} alt="gog1" width={100} height={100} className="gog"/>
                            <Image src={"/GOG2.svg"} alt="gog2" width={170} height={100} className="app-images"/>
                            <Image src={"/GOG3.svg"} alt="gog3" width={150} height={100} className="app-images"/>
                        </div>
                        <div className="gamesapp flex gap-40 cursor-pointer">
                            <Image src={"/GOG6.svg"} alt="gog6" width={100} height={100} className="steam mt-4"/>
                            <Image src={"/GOG7.svg"} alt="gog7" width={170} height={100} className="app-images"/>
                            <Image src={"/GOG4.svg"} alt="gog8" width={150} height={100} className="app-images"/>
                        </div>
                        <div className="gamesapp flex gap-40 mt-5 cursor-pointer">
                            <Image src={"/GOG12.svg"} alt="gog11" width={100} height={100} className="app-images"/>
                            <Image src={"/GOG5.svg"} alt="gog12" width={170} height={100} className="app-images"/>
                            <Image src={"/GOG13.svg"} alt="gog13" width={150} height={100} className="app-images"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FeatureGame;
