import Image from "next/image";

const PawsTeam  = () => {
    return (
        <main>
            <div>
                <h1 className="section flex font-extrabold text-white items-center justify-center"
                    style={{ fontSize: "37px", fontFamily: "Rubik", marginTop:"148px" }}
                >
                    <span style={{ backgroundColor: "#ed1566", padding: "5px"}}>
                        OUR WAG-TASTIC TEAM
                    </span>
                </h1>
                <div className="flex flex-col items-center justify-center m-4">
                    <h1 className="paws"
                        style={{ textAlign: "center", fontSize:"70px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                    >
                        Paws & Professionals
                    </h1>
                    <h1 className="paws"
                        style={{ textAlign: "center", fontSize:"70px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                    >
                        <span
                            style={{ display: "inline-block" }}
                        >
                            Unite!
                        </span>
                    </h1>
                </div>
            </div>

            <div className="team flex items-center justify-center">
                <div className="mishti m-10">
                    <Image
                        src={"/mishti.jpeg"}
                        alt={"mishti"}
                        width={250}
                        height={250}
                        className={"mishti-img rounded-full"}
                    />
                    <h1 className="pets-title flex items-center justify-center mt-10"
                        style={{ fontSize:"26px", fontWeight:"bolder", fontFamily:"Rubik"}}
                    >
                        Mishti
                    </h1>
                    <h3 className="CSO flex items-center justify-center"
                        style={{ fontSize:"20px", fontWeight:"bolder", fontFamily:"Rubik"}}
                    >
                        Chief Sniffing Officer
                    </h3>
                    <div className="role ml-5" style={{ textAlign: "center" }}>
                        <p className="mishti-role flex items-center" style={{ fontSize: "15px", fontWeight: "500", fontFamily: "Rubik" }}>
                            Sniffing out great ideas and new <br style={{ display: "block" }} /> opportunities for the pack!
                        </p>
                    </div>
                </div>

                <div className="laadu m-10">
                    <Image
                        src={"/laadu.jpg"}
                        alt={"laadu"}
                        width={250}
                        height={250}
                        className={"laadu-img rounded-full"}
                    />
                    <h1 className="pets-title flex items-center justify-center mt-10"
                        style={{ fontSize:"26px", fontWeight:"bolder", fontFamily:"Rubik"}}
                    >
                        Laadu
                    </h1>
                    <h3 className="PPO flex items-center justify-center"
                        style={{ fontSize:"20px", fontWeight:"bolder", fontFamily:"Rubik"}}
                    >
                        Playtime Productivity Officer
                    </h3>
                    <div className="role ml-5" style={{ textAlign: "center" }}>
                        <p className="laadu-role flex items-center" style={{ fontSize: "15px", fontWeight: "500", fontFamily: "Rubik" }}>
                            Boosting morale and productivity <br style={{ display: "block" }} /> with every play break!
                        </p>
                    </div>

                </div>

                <div className="simba m-10">
                    <Image
                        src={"/simba.jpg"}
                        alt={"simba"}
                        width={250}
                        height={250}
                        className={"simba-img rounded-full"}
                    />
                    <h1 className="pets-title flex items-center justify-center mt-10"
                        style={{ fontSize:"26px", fontWeight:"bolder", fontFamily:"Rubik"}}
                    >
                        Simba
                    </h1>
                    <h3 className="TTS flex items-center justify-center"
                        style={{ fontSize:"20px", fontWeight:"bolder", fontFamily:"Rubik"}}
                    >
                        Tail-wagging Talent Scout
                    </h3>
                    <div className="role ml-5" style={{ textAlign: "center" }}>
                        <p className="simba-role flex items-center" style={{ fontSize: "15px", fontWeight: "500", fontFamily: "Rubik" }}>
                            Sniffing out the best talent, one<br style={{ display: "block" }} /> belly rub at a time!
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PawsTeam;