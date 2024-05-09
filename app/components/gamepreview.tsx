"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAmazon, faSteam, faGooglePlay, faAppStoreIos, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';


const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
    "/image9.jpg",
    "/image10.jpg",
    "/image11.jpg",
    "/image12.jpg",
]
const GamePreview = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    /*const handleDotClick = (index) => {
        setCurrentIndex(index);
    };*/

    return (
        <main>
            <div className="games-preview relative"
                 style={{width:"100vw", height:"calc(100vh)"}}
            >
                <div className="game-info position-absolute top-0 start-0 ml-5"
                     style={{ zIndex: "2", marginTop: "120px", left: "0", top: "0" }}
                >
                    <h1 className="game-info-heading text-white"
                        style={{ fontSize: "88px", fontWeight: "bolder", textAlign: "left", fontFamily: "Eczar", letterSpacing:"4px" }}
                    >
                        Lets Start
                    </h1>

                    <h1 className="game-info-heading text-white"
                        style={{ fontSize: "82px", fontWeight: "bolder", marginTop: "20px", fontFamily: "Eczar", textAlign: "left", letterSpacing:"3px" }}
                    >
                        the game
                    </h1>

                    <p className="game-info-description text-white"
                       style={{ fontSize: "20px", marginTop: "10px", width: "35%", textAlign: "left", fontFamily:"Karla" }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet rhoncus arcu, id egestas lacus. Cras vel ullamcorper dolor.
                    </p>

                    <button className="buynow-btn text-white p-2 rounded mt-2 mr-6"
                            style={{fontSize:"18px", backgroundColor:"grey", width:"120px", fontFamily:"Karla"}}
                    >
                        Buy Now
                    </button>

                    <button className="play-btn text-white p-2 rounded mt-2 border border-light"
                            style={{ fontSize: "18px", width: "120px", fontFamily:"Karla" }}
                    >
                        Play
                    </button>

                    <h3 className="available text-white"
                        style={{fontSize:"30px", fontFamily:"Rubik", marginTop:"44px"}}
                    >
                        Available on:
                    </h3>
                    <div className="game-platform flex w-75 gap-6">
                        <FontAwesomeIcon
                            icon={faAmazon as IconProp}
                            size="3x"
                            className="platform p-4"
                            style={{ marginLeft: "-25px", color: "#ffffff" }}
                        />
                        <FontAwesomeIcon
                            icon={faSteam as IconProp}
                            size="3x"
                            className="platform p-4"
                            style={{ marginLeft: "-25px", color: "#ffffff" }}
                        />
                        <FontAwesomeIcon
                            icon={faGooglePlay as IconProp}
                            size="3x"
                            className="platform p-4"
                            style={{ marginLeft: "-25px", color: "#ffffff" }}
                        />
                        <FontAwesomeIcon
                            icon={faAppStoreIos as IconProp}
                            size="3x"
                            className="platform p-4"
                            style={{ marginLeft: "-25px", color: "#ffffff" }}
                        />
                        <FontAwesomeIcon
                            icon={faMicrosoft as IconProp}
                            size="3x"
                            className="platform p-4"
                            style={{ marginLeft: "-25px", color: "#ffffff" }}
                        />
                    </div>
                </div>

                <div className="game-images" style={{zIndex:"1"}}>
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            src={image}
                            alt={`image${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            style={{opacity: index === currentIndex ? 1 : 0, transition: "opacity 1s ease-in-out" }}
                        />
                    ))}
                </div>
            </div>
            {/*<div style={{ textAlign: "center", position: "relative", bottom: "10px", left: "50%", transform: "translateX(-50%)", zIndex: 2}}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                        style={{ backgroundColor: index === currentIndex ? "#717171" : "#bbb" }}
                    ></span>
                ))}
            </div>*/}
        </main>
    );
};

export default GamePreview;