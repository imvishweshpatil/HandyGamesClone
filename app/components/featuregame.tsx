"use client";
import Image from "next/image";
import { useState } from "react";

const FeatureGame = () => {
    return (
        <main>
            <div className="container">
                <div>
                    <h1 className="section flex font-extrabold text-white items-center justify-center"
                        style={{ fontSize: "37px", fontFamily: "Rubik", marginTop:"148px" }}
                    >
                        <span style={{ backgroundColor: "#ed1566", padding: "5px"}}>
                            APPS & GAMES
                        </span>
                    </h1>
                    <div className="multiplatform flex flex-col items-center justify-center m-4">
                        <h1 className="title"
                            style={{ textAlign: "center", fontSize:"70px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                        >
                            Explore our multi-platform
                        </h1>
                        <h1 className="title"
                            style={{ textAlign: "center", fontSize:"70px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                        >
                            <span
                                style={{ display: "inline-block" }}
                            >
                                apps
                            </span>
                        </h1>
                    </div>

                    <div className="games flex flex-column items-center justify-center mt-20">
                        <div className="gamesapp row gap-4" style={{margin:"80px"}}>
                            <div className="col flex flex-column items-center justify-center">
                                <Image
                                    src={"/Tap-Shap.png"}
                                    alt={"TapShap"}
                                    width={450}
                                    height={450}
                                    style={{borderRadius:"35px"}}
                                    className={"App"}
                                />
                                <h1 className="game-title font-extrabold mt-4"
                                    style={{fontFamily:"Rubik", fontSize:"60px"}}>
                                    Tap Shap
                                </h1>
                                <p className="game-description font-extrabold"
                                   style={{fontSize:"22px", fontFamily:"Rubik"}}
                                >
                                    The Worlds 1st Multi-Platform
                                    <span className="flex items-center justify-center">
                                        Reaction Game
                                    </span>
                                </p>
                                <div className="getgames flex items-center justify-center gap-4 mt-3">
                                    <Image
                                        src={"/appstore.png"}
                                        alt={"appstore"}
                                        width={10}
                                        height={10}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/playstore.png"}
                                        alt={"appstore"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/amazon.png"}
                                        alt={"appstore"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/steam.png"}
                                        alt={"steam"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/microsoft.png"}
                                        alt={"microsoft"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                </div>
                            </div>

                            <div className="col flex flex-column items-center justify-center">
                                <Image
                                    src={"/Phantom-Pets.png"}
                                    alt={"PhantomPets"}
                                    width={450}
                                    height={450}
                                    style={{borderRadius:"35px"}}
                                    className={"App"}
                                />
                                <h1 className="game-title font-extrabold mt-4"
                                    style={{fontFamily:"Rubik", fontSize:"60px"}}>
                                    Phantom Pets
                                </h1>
                                <p className="game-description font-extrabold"
                                   style={{fontSize:"20px", fontFamily:"Rubik"}}
                                >
                                    An AR(Augmented Reality) experience like
                                    <span className="flex items-center justify-center">
                                        never before
                                    </span>
                                </p>
                                <div className="getgames flex items-center justify-center gap-4 mt-3">
                                    <Image
                                        src={"/appstore.png"}
                                        alt={"appstore"}
                                        width={10}
                                        height={10}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/playstore.png"}
                                        alt={"appstore"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/amazon.png"}
                                        alt={"appstore"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/steam.png"}
                                        alt={"steam"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/microsoft.png"}
                                        alt={"microsoft"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="gamesapp row gap-4" style={{margin:"80px"}}>
                            <div className="col flex flex-column items-center justify-center">
                                <Image
                                    src={"/Drop-Dodge.png"}
                                    alt={"DropDodge"}
                                    width={450}
                                    height={450}
                                    style={{borderRadius:"35px"}}
                                    className={"App"}
                                />
                                <h1 className="game-title font-extrabold mt-4"
                                    style={{fontFamily:"Rubik", fontSize:"60px"}}>
                                    Drop Dodge
                                </h1>
                                <p className="game-description font-extrabold"
                                   style={{fontSize:"22px", fontFamily:"Rubik"}}
                                >
                                    The ultra-seek reaction game
                                </p>
                                <div className="getgames flex items-center justify-center gap-4 mt-3">
                                    <Image
                                        src={"/appstore.png"}
                                        alt={"appstore"}
                                        width={10}
                                        height={10}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/playstore.png"}
                                        alt={"appstore"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                    <Image
                                        src={"/amazon.png"}
                                        alt={"appstore"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                    />
                                </div>
                            </div>

                            <div className="col flex flex-column items-center justify-center">
                                <Image
                                    src={"/Mars.png"}
                                    alt={"Mars 1931"}
                                    width={450}
                                    height={450}
                                    style={{borderRadius:"35px"}}
                                    className={"App"}
                                />
                                <h1 className="game-title font-extrabold mt-4"
                                    style={{fontFamily:"Rubik", fontSize:"60px"}}>
                                    MARS 1931
                                </h1>
                                <p className="game-description font-extrabold"
                                   style={{fontSize:"20px", fontFamily:"Rubik"}}
                                >
                                    A classically modern arcade game
                                </p>
                                <button className="notified bg-black text-white p-2"
                                        style={{borderRadius:"40px", fontFamily:"Rubik", fontSize:"25px", width:"300px"}}
                                >
                                    GET NOTIFIED
                                </button>
                            </div>
                        </div>

                        <div className="gamesapp row gap-4" style={{margin:"80px"}}>
                            <div className="col flex flex-column items-center justify-center">
                                <Image
                                    src={"/IdeaDe.png"}
                                    alt={"IdeaDe"}
                                    width={450}
                                    height={450}
                                    style={{borderRadius:"35px"}}
                                    className={"App"}
                                />
                                <h1 className="game-title font-extrabold mt-4"
                                    style={{fontFamily:"Rubik", fontSize:"60px"}}>
                                    IdeaDe
                                </h1>
                                <p className="game-description font-extrabold"
                                   style={{fontSize:"22px", fontFamily:"Rubik"}}
                                >
                                    Your Global Idea Playground!
                                </p>
                                <button className="notified text-white p-2"
                                        style={{borderRadius:"40px", fontFamily:"Rubik", fontSize:"25px", width:"300px", marginTop:"68px", backgroundColor:"#eb9a28"}}
                                >
                                    GET NOTIFIED
                                </button>
                            </div>

                            <div className="col flex flex-column items-center justify-center" >
                                <Image
                                    src={"/TimeFunk.png"}
                                    alt={"TimeFunk"}
                                    width={450}
                                    height={450}
                                    style={{borderRadius:"35px"}}
                                    className={"App"}
                                />
                                <h1 className="game-title font-extrabold mt-4"
                                    style={{fontFamily:"Rubik", fontSize:"60px"}}>
                                    KIDA Watch <span className="flex items-center justify-center">Studio</span>
                                </h1>
                                <p className="game-description font-extrabold"
                                   style={{fontSize:"20px", fontFamily:"Rubik"}}
                                >
                                    Tradition Meets Innovation!
                                </p>
                                <button className="notified text-white p-2"
                                        style={{borderRadius:"40px", fontFamily:"Rubik", fontSize:"25px", width:"300px", backgroundColor:"#8226f0"}}
                                >
                                    GET NOTIFIED
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
};

export default FeatureGame;

/*
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
                        {/!*<div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/4 h-px bg-white"></div>*!/}
                        <h1 className="text-white text-center" style={{ fontSize: "25px", fontFamily:"Rubik", letterSpacing:"3px" }}>GET OUR GAMES HERE</h1>
                        {/!*<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/4 h-px bg-white"></div>*!/}
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
*/
