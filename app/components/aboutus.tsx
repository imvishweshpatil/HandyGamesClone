import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";

const AboutUs = () => {
    return (
        <main>
            <main>
                <div className="container" style={{marginTop:"100px"}}>
                    <div className="header-box flex justify-center items-center m-8 p-4 font-bold">
                        <h1 className="header text-center font-bold" style={{fontSize:"40px", fontFamily:"Rubik", letterSpacing:"1px"}}>All-new 48MP Main Camera. <br/> For breathtaking, smile. <br/> making picture taking.</h1>
                    </div>
                    <div className="iphone flex justify-center">
                        <Image src={"/iphone.png"} alt={"iphone"} width={800} height={800} style={{margin:"5px 0"}}/>
                    </div>

                    <div className="photo row mx-auto gap-20 w-50" style={{fontFamily:"Karla"}}>
                        <div className="details col flex xl:ml-16">
                            <p>
                                <span className="text-muted font-bold">Now the Main camera shoots in super-high resolution. So it’s easier than ever to</span>
                                <strong> take standout photos with amazing detail</strong>
                                <span className="text-muted font-bold">- from snapshots to stunning landscapes.</span>
                            </p>
                        </div>
                        <div className="camera col">
                            <p>
                                <span className="text-muted font-bold">Up to</span><br />
                                <span className="text-4xl lg:text-3xl md:text-2xl font-bold">4x resolution</span><br/>
                                <span className="text-muted font-bold">to capture incredible detail</span>
                            </p>
                            <p className="mt-6">
                                <strong className="text-4xl lg:text-3xl md:text-2xl">2x Telephoto</strong><br />
                                <span className="text-muted font-bold">is like having a third camera</span>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </main>
    );
};

export default AboutUs;