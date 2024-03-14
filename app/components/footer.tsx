import Image from "next/image";
import "../globals.css";

const Footer = () => {
    return (
        <main>
            <div className="footer flex items-center justify-center bg-white">
                <div className="company flex">
                    <Image src={"/logofooter.png"} alt={"logo"} width={100} height={100} className={"footerlogo m-4"}/>
                    <div className="about">
                        <button className="career text-black font-bold" style={{ fontSize:"18px", fontFamily:"Rubik", margin:"8px"}}>CAREERS</button>
                        <button className="contact text-black font-bold" style={{ fontSize:"18px", fontFamily:"Rubik", margin:"8px"}}>CONTACT US</button>
                        <p className="trademark text-black" style={{ fontSize: "12px", fontFamily:"Karla", margin:"8px" }}>© 2023 KIDA Studios. All Rights Reserved. KIDA Studios,<br /> kidastudios.com and the KIDA Studios logo are trademarks <br /> of KIDA Studios in India and/or other countries.</p>
                    </div>
                </div>
                <div className="registration flex">
                    <Image src={"/logofooter.png"} alt={"logo"} width={100} height={100} className={"footerlogo1 hidden"} style={{margin:"16px"}}/>
                    <div className="certification font-bold" style={{fontFamily:"Rubik", margin:"16px"}}>
                        <Image src={"/startupindia.png"} alt={"startupindia"} width={160} height={160} className={"startupindia"}/>
                        <p className="number text-black" style={{ fontSize: "14px", margin:"16px" }}>Certificate Number <br />DIPP12619</p>
                    </div>
                    <div className="duns" style={{margin:"16px"}}>
                        <Image src={"/duns.png"} alt={"duns"} width={100} height={100}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Footer;
