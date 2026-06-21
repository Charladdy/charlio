import Image from 'next/image'
import ContactFormJakes from '@/components/ContactFormJakes';
import './page-styles.css'

export default function Page(){
    return(
        <div className="px-5 md:w-2xl m-auto">
            <h1 className="page-header h-fit m-auto">Events</h1>
            <h1 className="title-header h-fit text-xl m-auto pt-10">Let us make your special day exceptional</h1>
            <div className="h-fit m-auto sm:flex pt-5 pb-5 border-b">
                <div className="mx-auto sm:w-40 h-auto sm:flex-1"><Image src="/jakes-bistro/jakes-events.png" height={500} width={500} alt="Your event at Jake's" /></div>
                <div className="sm:w-60 md:flex-1 sm:ml-10 my-auto">
                    <p>Whether you're celebrating a wedding, birthday, retirement or any other of life's special moments, 
                        let Jake's make your day truly special. Let us know how many people you plan on hosting, your 
                        preferred date and time of day and one of our event coordinators will get in touch with you.
                    </p>
                </div>
            </div>
            <ContactFormJakes categories={["< 20","20 - 50","50 - 80","> 80"]}></ContactFormJakes>
        </div>
    );
}