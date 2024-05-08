"use client";
import Image from "next/image";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

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
                            Explore our <span className="title-span">multi-platform</span>
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
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/playstore.png"}
                                        alt={"playstore"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/amazon.png"}
                                        alt={"amazon"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/steam.png"}
                                        alt={"steam"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/microsoft.png"}
                                        alt={"microsoft"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
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
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/playstore.png"}
                                        alt={"playstore"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/amazon.png"}
                                        alt={"amazon"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/steam.png"}
                                        alt={"steam"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/microsoft.png"}
                                        alt={"microsoft"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
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
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/playstore.png"}
                                        alt={"playstore"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
                                    />
                                    <Image
                                        src={"/amazon.png"}
                                        alt={"amazon"}
                                        width={100}
                                        height={100}
                                        style={{width:"30px", height:"30px"}}
                                        className={"store"}
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
                                        style={{borderRadius:"40px", fontFamily:"Rubik", fontSize:"25px", width:"300px", marginTop:"10px"}}
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
                                        style={{borderRadius:"40px", fontFamily:"Rubik", fontSize:"25px", width:"300px", marginTop:"74px", backgroundColor:"#eb9a28",}}
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
                                        style={{borderRadius:"40px", fontFamily:"Rubik", fontSize:"25px", width:"300px", backgroundColor:"#8226f0", marginTop:"10px"}}
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