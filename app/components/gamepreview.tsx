"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "../globals.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAmazon, faSteam, faGooglePlay, faAppStoreIos, faMicrosoft } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const images = [
    {
        src: "/image1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque dui nisl, sit amet cursus elit consectetur quis. Fusce bibendum et felis ut posuere."
    },
    {
        src: "/image2.jpg",
        description: "Donec in lacinia dui, eu ornare odio. Quisque vel pulvinar lacus. Phasellus pretium dapibus libero, non iaculis massa auctor sit amet."
    },
    {
        src: "/image3.jpg",
        description: "Morbi et interdum ex. Nulla maximus aliquet risus non tempor. Suspendisse rhoncus enim vel quam egestas sodales."
    },
    {
        src: "/image4.jpg",
        description: "Vivamus finibus lectus eget orci congue, eu viverra arcu placerat. Quisque cursus arcu at nibh cursus tristique. Donec efficitur mauris non nisi placerat dignissim."
    },
    {
        src: "/image5.jpg",
        description: "Praesent tempus purus dolor, vel pharetra nisi elementum ornare. Pellentesque imperdiet, turpis non suscipit ornare, lorem nibh iaculis massa, in fermentum risus lectus nec dolor."
    },
    {
        src: "/image6.jpg",
        description: "Nam maximus id magna quis tempor. Curabitur consectetur egestas urna, nec volutpat odio porta ut. Suspendisse eu eleifend urna."
    },
    {
        src: "/image7.jpg",
        description: "Vivamus placerat euismod lectus ut imperdiet. Phasellus eleifend, risus eget sollicitudin commodo, turpis magna consectetur nulla, quis porttitor massa nisl at ex."
    },
    {
        src: "/image8.jpg",
        description: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla quis rhoncus ipsum. Duis congue odio at diam pulvinar, nec rutrum velit bibendum."
    },
    {
        src: "/image9.jpg",
        description: "Sed eu felis augue. Cras eleifend ullamcorper nisl. Phasellus dignissim luctus elementum. In ullamcorper dapibus sapien sed dictum. "
    },
    {
        src: "/image10.jpg",
        description: "Mauris vitae leo ut velit pulvinar elementum mattis ut nulla. Praesent sit amet imperdiet mauris. Integer convallis lorem arcu, vitae tempor enim consequat ut."
    },
    {
        src: "/image11.jpg",
        description: "Fusce mollis semper euismod. Morbi dapibus tortor eget luctus malesuada. Duis semper, quam nec tincidunt aliquet, mi mauris mattis magna, a convallis quam sapien eget orci."
    },
    {
        src: "/image12.jpg",
        description: "Etiam et dui quam. Nullam malesuada neque quis nunc mollis sodales. Praesent eget odio lacus. Praesent sagittis elit purus"
    }
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
                       style={{ fontSize: "20px", marginTop: "10px", width: "30%", textAlign: "left", fontFamily:"Karla" }}
                    >
                        {images[currentIndex].description}
                    </p>

                    <div className="gamepreview-btn">
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
                    </div>
                    <h3 className="available text-white"
                        style={{fontSize:"30px", fontFamily:"Rubik", marginTop:"24px"}}
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
                            src={image.src}
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