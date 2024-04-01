import Image from "next/image";
import "../globals.css";

const MultiPlatform = () => {
    return (
        <main>
            <div className="container">
                <div>
                    <h1 className="section flex font-extrabold text-white items-center justify-center"
                        style={{ fontSize: "37px", fontFamily: "Rubik", marginTop:"148px" }}
                    >
                            <span style={{ backgroundColor: "#ed1566", padding: "5px"}}>
                                MULTI-PLATFORM
                            </span>
                    </h1>
                    <div className="connecting flex flex-col items-center justify-center m-4">
                        <h1 className="user"
                            style={{ textAlign: "center", fontSize:"70px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                        >
                            Connecting with users
                        </h1>
                        <h1 className="user"
                            style={{ textAlign: "center", fontSize:"70px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                        >
                                <span
                                    style={{ display: "inline-block" }}
                                >
                                    across all devices
                                </span>
                        </h1>
                    </div>
                </div>

                <div className="device flex items-baseline mb-5 pt-4">
                    <Image
                        src={"/dropdodge.png"}
                        alt={"dropdodge"}
                        width={400}
                        height={100}
                        style={{marginRight:"-78px", marginLeft:"-150px"}}
                        className={"dropdodge"}
                    />
                    <Image
                        src={"/phantompets.png"}
                        alt={"phantompets"}
                        width={300}
                        height={110}
                        style={{zIndex:"1", marginLeft:"55px"}}
                        className={"phantompets"}
                    />
                    <Image
                        src={"/tapshap.png"}
                        alt={"tapshap"}
                        width={800}
                        height={800}
                        style={{marginLeft:"-29px"}}
                        className={"tapshap"}
                    />
                    <Image
                        src={"/mars1931.png"}
                        alt={"mars1931"}
                        width={600}
                        height={400}
                        style={{marginLeft:"-100px",  zIndex:"1"}}
                        className={"mars"}
                    />
                </div>

                <div className="distributing d-flex flex-column align-items-center justify-content-center mt-5 text-black"
                     style={{fontFamily:"Karla"}}
                >
                    <h3 className="seamless justify-content-center align-items-center p-1 font-extrabold">
                        Seamlessly distributing games & <span className="seamless-span">apps on various platforms:</span>
                    </h3>
                    <h3 className="mobile justify-content-center align-items-center font-extrabold">
                        mobile, web, desktop, and embedded devices.
                    </h3>
                </div>

            </div>
        </main>
    );
};

export default MultiPlatform;