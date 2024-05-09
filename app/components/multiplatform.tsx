"use client"
import Image from "next/image";
import "../globals.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useState} from "react";


const MultiPlatform = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <main>
            <div className="multiplatform-container mt-5">
                <div>
                    {/*<h1 className="section flex font-extrabold text-white items-center justify-center"
                        style={{ fontSize: "37px", fontFamily: "Rubik", marginTop:"148px" }}
                    >
                            <span style={{ backgroundColor: "#ed1566", padding: "5px"}}>
                                MULTI-PLATFORM
                            </span>
                    </h1>*/}
                </div>

                {/*for large devices*/}
                <div className="device-gallery-primary flex items-baseline content-center mb-5 pt-4">
                    <Image
                        src={"/dropdodge.png"}
                        alt={"dropdodge"}
                        width={350}
                        height={100}
                        style={{marginRight:"-78px", marginLeft:"-130px"}}
                        className={"dropdodge animate-left"}
                    />
                    <Image
                        src={"/phantompets.png"}
                        alt={"phantompets"}
                        width={300}
                        height={110}
                        style={{zIndex:"1", marginLeft:"55px"}}
                        className={"phantompets animate-left"}
                    />
                    <Image
                        src={"/tapshap.png"}
                        alt={"tapshap"}
                        width={800}
                        height={800}
                        style={{marginLeft:"-29px"}}
                        className={"tapshap animate-back"}
                    />
                    <Image
                        src={"/mars1931.png"}
                        alt={"mars1931"}
                        width={600}
                        height={400}
                        style={{marginLeft:"-100px",  zIndex:"1"}}
                        className={"mars animate-right"}
                    />
                </div>

                {/*for small devices*/}
                <div className="device-gallery-secondary hidden items-baseline content-center mb-5 pt-4">
                    <Image
                        src={"/tapshap.png"}
                        alt={"tapshap"}
                        width={800}
                        height={800}
                        className={"tapshap1 animate-flip"}
                        style={{zIndex:"1"}}
                    />
                </div>

                <div className="device-gallery-secondary hidden items-baseline content-center mb-5 pt-4">
                    <Image
                        src={"/dropdodge.png"}
                        alt={"dropdodge"}
                        width={350}
                        height={100}
                        style={{zIndex:1}}
                        className={"dropdodge1 animate-left"}
                    />
                    <Image
                        src={"/mars1931.png"}
                        alt={"mars1931"}
                        width={600}
                        height={400}
                        className={"mars1 animate-back"}
                        data-oas="fade-right" data-aos-once="false"
                    />
                    <Image
                        src={"/phantompets.png"}
                        alt={"phantompets"}
                        width={300}
                        height={110}
                        className={"phantompets1 animate-right"}
                    />
                </div>

                <div className="title-primary flex flex-col items-center justify-center mx-4 mt-4">
                    <h1 className="user-title"
                        style={{ textAlign: "center", fontSize:"70px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                    >
                        Connecting with users
                    </h1>
                    <h1 className="user-title"
                        style={{ textAlign: "center", fontSize:"70px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                    >
                        <span
                            style={{ display: "inline-block" }}
                        >
                            across all devices
                        </span>
                    </h1>
                </div>

                <div className="platform-reach d-flex flex-column align-items-center justify-content-center mt-2 text-black"
                     style={{fontFamily:"Karla"}}
                >
                    <h3 className="seamless-heading-primary justify-content-center align-items-center p-1 font-extrabold">
                        Seamlessly distributing games & apps on
                        <span className="seamless-heading-primary-span justify-content-center align-items-center">
                            various platforms:
                        </span>
                    </h3>
                    <h3 className="seamless-heading-secondary justify-content-center align-items-center font-extrabold">
                        mobile, web, desktop, and embedded devices.
                    </h3>
                </div>
            </div>
        </main>
    );
};

export default MultiPlatform;
