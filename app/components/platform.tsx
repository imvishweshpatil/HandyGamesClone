import Image from "next/image";

const Platform = () => {
    return (
        <main >
            <div className="flex items-center justify-center mt-20" style={{backgroundColor:"#ffd100"}}>
                <div className="platform flex m-3  bg-white p-5 rounded-5">
                    <Image src={"/windows.png"} alt={"windows"} width={100} height={100}/>
                </div>
                <div className="platform m-3">
                    <div className="bg-white p-4 rounded-5"><Image src={"/ios.png"} alt={"ios"} width={100} height={100} style={{margin:"20px"}}/></div>
                    <div className="flex items-center justify-center mt-5 bg-white p-2 rounded-5" style={{width:"auto", height:"200px"}}>
                        <Image src={"/firetv.png"} alt={"ios"} width={130} height={130} style={{margin:"20px"}}/>
                    </div>
                </div>
                <div className="platform flex m-3 bg-white rounded-5" style={{padding:"80px", width:"300px", height:"260px"}}>
                    <Image src={"/appletv.png"} alt={"windows"} width={150} height={60}/>
                </div>
                <div className="platform m-3">
                    <div className="bg-white p-4 rounded-5"><Image src={"/steamlogo.png"} alt={"ios"} width={100} height={100} style={{margin:"20px"}}/></div>
                    <div className="mt-5 bg-white p-4 rounded-5"><Image src={"/android.png"} alt={"android "} width={100} height={100} style={{margin:"20px"}}/></div>
                </div>
                <div className="platform flex m-3 bg-white p-5 rounded-5">
                    <Image src={"/nintendoswitch.png"} alt={"windows"} width={100} height={50}/>
                </div>
            </div>
            <h1>hello</h1>
        </main>
    );
};

export default Platform;
