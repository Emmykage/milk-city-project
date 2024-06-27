import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';

const Footer = () => (
  <div className="text-gray-50 bg-gray-800 pt-10">

    <footer>
      <h2 className="text-center font-seri text-green-700 text-3xl">MilkCity</h2>
      <div className="border-b py-4 border-gray-700 ">
        <div className="text-center flex justify-center gap-4">
          <span>
            {' '}
            <BiLogoFacebook />
          </span>
          <span>
            {' '}
            <BsTwitter />
          </span>
          <span>
            {' '}
            <BsInstagram />
          </span>

        </div>
      </div>
      <p className="my-0 py-6 text-sm bg-gray-900">© MilkCity, LLC. 2022</p>
    </footer>
  </div>

);

export default Footer;
