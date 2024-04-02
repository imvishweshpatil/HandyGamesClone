"use client"
import React, { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";

const NewsLetter = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = () => {
        setIsSubscribed(true);
    };

    const closePopup = () => {
        setIsSubscribed(false);
    };

    return (
        <main>
            <div className="relative bg-gray-500" style={{ width: "100%", height: "100vh" }}>
                <Image
                    src={"/newsletter.jpg"}
                    alt={"newsletter"}
                    layout={"fill"}
                    objectFit={"cover"}
                />
                <div className="absolute top-0 start-50 translate-middle-x flex items-center justify-center"
                     style={{marginTop:"150px"}}
                >
                    <div className="apply flex flex-col items-center justify-start bg-white text-black p-2"
                         style={{borderRadius:"40px", width:"680px"}}
                    >
                        <div className="apply-card p-10">
                            <h1 className="card-title font-extrabold text-center"
                                style={{fontFamily:"Rubik", fontSize:"50px"}}
                            >
                                Got what we need?
                            </h1>
                            <p className="card-des" style={{fontFamily:"Karla", fontSize:"20px", fontWeight:"600"}}
                            >
                                Have you got what we are looking for?
                            </p>
                            <button className="apply-btn bg-gray-500 text-white rounded-full w-50 mt-3"
                                    style={{fontSize:"25px", fontFamily:"Rubik", padding:"10px", backgroundColor:"#2997ff"}}
                            >
                                Apply now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="join flex position-absolute bottom-0 start-50 translate-middle-x items-center justify-center gap-14"
                     style={{marginBottom:"200px"}}
                >
                    <div className="newsletter flex items-center justify-center">
                        <h1 className="newsletter-title text-white font-extrabold"
                            style={{fontFamily:"Karla", fontSize:"60px"}}
                        >
                            Join our&nbsp;<br/><span>newsletter</span>
                        </h1>
                    </div>
                    <div className="subscribe">
                        <p className="des text-white" style={{fontFamily:"Karla", fontSize:"20px", width:"140%"}}>keep up with the latest news, releases, and more: </p>
                        <div className="input flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="email mr-2 p-2 border border-gray-400 rounded"
                                style={{ width: "280px", fontFamily:"Karla" }}
                            />
                            <button className="sub-button bg-gray-500 text-white p-2 rounded"
                                    style={{ width: "155px", fontFamily:"Karla", letterSpacing:"1px" }}
                                    onClick={handleSubscribe}
                            >
                                SUBSCRIBE
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {isSubscribed && (
                <div
                    id="subscribe-popup"
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                    style={{ fontFamily: "Libre" }}
                >
                    <div className="bg-white p-4 rounded flex flex-column items-center justify-center">
                        <p className="text-center">You are subscribed!</p>
                        <button
                            className="bg-gray-500 text-white p-2 rounded mt-2"
                            onClick={closePopup}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default NewsLetter;


/*
<main>
    <div className="overlay relative bg-gray-500 opacity-90"
         style={{ position: "relative", width: "100%", height: "100vh" }}
    >
        <Image
            src={"/newsletter.jpg"}
            alt={"newsletter"}
            layout={"fill"}
            objectFit={"cover"}
        />
        <div className="relative flex items-center justify-center"
             style={{ padding: "0px" }}
        >
            <Image
                src="/handygamesicon.png"
                alt="handygameicon"
                width={250}
                height={250}
                className={"handygamesicon mt-20"}
            />
        </div>
        <div className="relative flex items-center justify-center mt-14">
            <h1 className="newsletter-title font-bold text-white"
                style={{ margin: "0 10px", fontFamily:"Rubik", letterSpacing:"2px"}}
            >
                NEWSLETTER SIGNUP
            </h1>
        </div>
        <div className="subscribe relative flex items-center justify-center subscribe mt-6">
            <input
                type="email"
                placeholder="Enter your email"
                className="email mr-2 p-2 border border-gray-400 rounded"
                style={{ width: "20%", fontFamily:"Karla" }}
            />
            <button className="sub-button bg-gray-500 text-white p-2 rounded"
                    style={{ width: "185px", fontFamily:"Karla", letterSpacing:"1px" }}
                    onClick={handleSubscribe}
            >
                SUBSCRIBE
            </button>
        </div>
    </div>

    {isSubscribed && (
        <div id="subscribe-popup"
             className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
             style={{fontFamily:"Libre"}}
        >
            <div className="bg-white p-4 rounded flex flex-column items-center justify-center">
                <p className="text-center">You are subscribed!</p>
                <button className="bg-gray-500 text-white p-2 rounded mt-2"
                        onClick={closePopup}
                >
                    Close
                </button>
            </div>
        </div>
    )}
</main>*/
