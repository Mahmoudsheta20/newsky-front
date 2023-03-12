import React from "react";
import "./Contact.css";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
const Contact = () => {
  return (
    <div className="Contact">
      <div className="contact__container">
        <div className="contact__us">
          <div>
            <p>
              <span>
                <RiCustomerService2Line />
              </span>{" "}
              Always to help you{" "}
            </p>

            <p>Available to serve you 24/7 </p>
          </div>

          <div>
            <p>
              <span>
                <IoLogoWhatsapp />
              </span>
              Get support via WhatsApp
            </p>
            <p> 01050076550</p>
          </div>
          <div>
            <p>
              <span>
                <MdOutlineMail />
              </span>
              Contact us via e-mail
            </p>
            <p> Newsky@newsky.online </p>
          </div>
          <div>
            <p>
              <span>
                <HiOutlinePhone />
              </span>
              Contact us via hotline
            </p>
            <p>01050076550 </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
