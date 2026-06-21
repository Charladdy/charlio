import ContactForm from "@/components/ContactForm";
import './page-styles.css'

export default function page(){
    return(
        <div className="page-content">
            <div>Contact us at the information below to get your estimate today.</div>
            <ContactForm categories={["Plumbing Estimate","Plumbing Inquiry"]}/>
        </div>
    );
}