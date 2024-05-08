import Image from "next/image";

const Platform = () => {
    return (
        <main >
            <div className="mt-20" style={{backgroundColor:"#ffd100"}}>
                <div className="py-10">
                    <div className="platform-container flex items-center justify-center">

                        {/*for large devices*/}
                        <div className="windows-primary flex items-center justify-center m-3  bg-white p-8 rounded-5" style={{width:"175px", height:"175px"}}>
                            <Image src={"/windows.png"} alt={"windows"} width={200} height={100} style={{width:"70px",height:"70px",margin:"20px"}}/>
                        </div>

                        {/*for large devices*/}
                        <div className="platform-primary m-3">
                            <div className="ios flex items-center justify-center bg-white p-4 rounded-5" style={{width:"175px", height:"175px"}}>
                                <Image src={"/ios.png"} alt={"ios"} width={80} height={80} style={{margin:"20px"}}/>
                            </div>
                            <div className="firetv flex items-center justify-center mt-5 bg-white p-2 rounded-5" style={{width:"175px", height:"170px"}}>
                                <Image src={"/firetv.png"} alt={"firetv"} width={80} height={80} style={{margin:"20px"}}/>
                            </div>
                        </div>

                        {/*for small devices*/}
                        <div className="platform-secondary hidden m-3 items center justify-center">
                            <Image src={"/ios.png"} className={"ios-secondary"} alt={"ios"} width={80} height={80} style={{margin:"20px", backgroundColor:"white", padding:"29px"}}/>
                            <Image src={"/windows.png"} className={"windows-secondary"} alt={"windows"} width={80} height={80} style={{margin:"20px", backgroundColor:"white", padding:"20px"}}/>
                            <Image src={"/firetv.png"} className={"firetv-secondary"} alt={"firetv"} width={80} height={80} style={{margin:"20px", backgroundColor:"white", padding:"20px"}}/>
                        </div>

                        {/*<div className="appletv flex items-center justify-center m-3 bg-white rounded-5" style={{width:"280px", height:"280px"}}>
                            <Image src={"/appletv.png"} alt={"appletv"} width={150} height={150} style={{width:"200px", height:"100px", margin:"20px"}}/>
                        </div>*/}

                        <div className="appletv flex items-center justify-center m-3 bg-white rounded-5">
                            <Image src={"/appletv.png"} alt={"appletv"} width={250} height={250}/>
                        </div>

                        {/*for large devices*/}
                        <div className="platform-primary m-3">
                            <div className="visionOS flex items-center justify-center p-2 bg-white rounded-5" style={{width:"175px", height:"175px"}}>
                                <Image src={"/visionOS.png"} alt={"ios"} width={120} height={120} style={{margin:"20px"}}/>
                            </div>
                            <div className="android flex items-center justify-center mt-5 bg-white p-4 rounded-5" style={{width:"175px", height:"175px"}}>
                                <Image src={"/android.png"} alt={"android "} width={100} height={100} style={{margin:"20px"}}/>
                            </div>
                        </div>

                        {/*for large devices*/}
                        <div className="nintendoswitch-primary flex items-center justify-center m-3  bg-white p-3 rounded-5" style={{width:"175px", height:"175px"}}>
                            <Image src={"/nintendoswitch.png"} alt={"nintendo"} width={120} height={120} style={{margin:"20px"}}/>
                        </div>

                        {/*for small devices*/}
                        <div className="platform-secondary hidden m-3 items center justify-center">
                            <div className="visionOS-secondary flex items-center content-center bg-white">
                                <Image src={"/visionOS.png"} className={""} alt={"visionOS"} width={80} height={80}
                                       style={{ padding:"25px", margin:"20px"}}/>
                            </div>
                            <Image src={"/nintendoswitch.png"} className={"nintendoswitch-secondary"} alt={"ios"} width={80} height={80} style={{backgroundColor:"white", padding:"20px",margin:"20px"}}/>
                            <Image src={"/android.png"} className={"android-secondary"} alt={"ios"} width={80} height={80} style={{backgroundColor:"white", padding:"20px", margin:"20px"}}/>
                        </div>
                    </div>

                        <div className="engaging flex flex-col items-center justify-center m-4">
                            <h1 className="engaging"
                                style={{ textAlign: "center", fontSize:"60px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                            >
                                Engaging content for
                            </h1>
                            <h1 className="engaging"
                                style={{ textAlign: "center", fontSize:"60px", fontFamily:"Rubik", fontWeight:"Bolder"}}
                            >
                                    <span
                                        style={{ display: "inline-block" }}
                                    >
                                        every device
                                    </span>
                            </h1>
                            <h3 className="PlatformAvailability text-center m-3 font-medium" style={{fontSize:"18px"}}>
                                Our applications are available to download across <br/>
                                <span> 10+ leading platforms</span>
                            </h3>
                        </div>
                </div>
            </div>
        </main>
    );
};

export default Platform;
