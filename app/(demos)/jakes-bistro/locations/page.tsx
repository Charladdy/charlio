import Image from 'next/image'

export default function Page(){
    return(
        <>
            <h1 className="page-header w-2xl h-fit m-auto">Locations</h1>
            <h1 className="title-header w-2xl h-fit text-xl m-auto pt-10">Jake's on Main</h1>
            <div className="w-2xl h-fit m-auto flex pt-5">
                <Image className="w-60 h-auto flex-1" src="/jakes-bistro/jakes-on-main.png" height={500} width={500} alt="Jake's on Main" />
                <div className="w-40 flex-1 ml-10 my-auto">
                    <p>120 Main Street</p>
                    <p>Yardsdale, RI</p>
                    <p className="font-bold pt-5">Hours:</p>
                    <p className="ml-5">Tuesday-Thursday: 12:30 PM - 10:30 PM</p>
                    <p className="ml-5">Friday-Saturday: 11:30 AM - 12:30 AM</p>
                    <p className="ml-5">Sunday: 10:00 AM - 8:00 PM</p>
                    <p className="ml-5">Closed Mondays</p>
                </div>
            </div>
            <h1 className="title-header w-2xl h-fit text-xl m-auto pt-5 mt-10 border-t text-right">Jake's Downtown</h1>
            <div className="w-2xl h-fit m-auto flex pt-5 pb-15">                
                <div className="w-40 flex-1 mr-10 my-auto">
                    <p>2540 Commerce Avenue</p>
                    <p>Prominence, RI</p>
                    <p className="font-bold pt-5">Hours:</p>
                    <p className="ml-5">Monday-Thursday: 12:30 PM - 10:30 PM</p>
                    <p className="ml-5">Friday-Saturday: 11:30 AM - 12:30 AM</p>
                    <p className="ml-5">Closed Sundays</p>
                </div>
                <Image className="w-60 h-auto flex-1" src="/jakes-bistro/jakes-downtown.png" height={500} width={500} alt="Jake's Downtown" />
            </div>            
        </>
    );
}