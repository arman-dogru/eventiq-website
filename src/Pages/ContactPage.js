import {React,useEffect} from "react";
import ContactForm from "../components/ContactForm";
import ContactBanner from "../components/ContactBanner";
import ContactOptions from "../components/ContactOptions";


const ContactPage = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <ContactBanner/>
      <ContactForm/>
      <ContactOptions/>
      
    </div>
  );
};

export default ContactPage;
