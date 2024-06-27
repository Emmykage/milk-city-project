import React from 'react';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { FaGlobe } from 'react-icons/fa';

const Contact = () => (
  <div>
    <section>
      <div className="flex flex-col md:flex-row">
        <a href="tel:+2348064412072" className="flex-1 flex justify-center items-center py-10 shadow hover:bg-gray-100">
          <div className="">
            <span className=" bg-black w-14 h-14 inline-flex justify-center items-center rounded-full">
              <BsFillTelephoneInboundFill className="text-white" />
            </span>

            <p className="text-sm font-medium text-gray-600 my-4">
              CALL US
            </p>
            <p>08064412072</p>
          </div>

        </a>
        <a href="mailto:info@meatandmilkcity.com" className="flex-1 flex justify-center items-center py-10 shadow hover:bg-gray-100">
          <div className="">
            <span className=" bg-black w-14 h-14 inline-flex justify-center items-center rounded-full">
              <FaGlobe className="text-white text-xl" />
            </span>

            <p className="text-sm font-medium text-gray-600 my-4">
              MAILING ADDRESS
            </p>
            <p>Plot 578 Idris Gidado Street Wuye Abuja</p>
          </div>

        </a>

      </div>
    </section>
  </div>
);

export default Contact;
