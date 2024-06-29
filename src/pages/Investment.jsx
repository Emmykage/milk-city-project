import React from 'react';
import { NavLink } from 'react-router-dom';
import areaview from '../assets/images/pictures/5e7148a3b866678e23e414ce_FarmFundr1.png';
import areaview2 from '../assets/images/pictures/5f88a8b2dc0a24adead6ccf4_Jackpot Pistachio Farm _ 2D.png';
import areaview3 from '../assets/images/pictures/61804fcfcdcc6d188413010c_6139093c99ec545814197d8c_Denver Walnuts _ Aerial _ With River.png';

const Investment = () => (
  <div>
    <section className="py-8">
      <div className="w-full md:px-20 auto grid md:grid-cols-5 gap-3 overflow-x-auto px-4 text-left">
        <div className="">
          <img src={areaview} alt="" className="w-full h-40" />
          <div className="pt-6">
            <h4 className="text-lg font-semibold">Dairy Farming  </h4>
            <ul className="list-inside list-disc">
              <li className="text-base font-medium text-gray-600">Investment required: $X million</li>
              <li className="text-base font-medium text-gray-600">Projected ROI: X%</li>
              <li>
                Key activities: Breeding high-yield dairy cows, improving milking technology,
                expanding processing facilities
                </li>
            </ul>
            <h4 className="font-semibold">
              Benefits
            </h4>
            <ul className="list-inside list-disc">
              <li>
                Steady cash flow from milk sales
                </li>
              <li>
                Expansion opportunities in dairy products (cheese, yogurt)
                </li>
            </ul>

          </div>
        </div>
        <div className="">
          <img src={areaview2} alt="" className="w-full h-40" />

          <div className="pt-6">
            <h4 className="text-lg font-semibold">Beef Cattle Farming  </h4>
            <ul className="list-inside list-disc">
              <li className="text-base font-medium text-gray-600">Investment required: $X million</li>
              <li className="text-base font-medium text-gray-600">Projected ROI: X%</li>
              <li>
                Key activities: Establishing breeding programs, improving farm infrastructure,
                expanding beef market
                </li>
            </ul>
            <h4 className="font-semibold">
              Benefits
            </h4>
            <ul className="list-inside list-disc">
              <li>
                Steady cash flow from milk sales
                </li>
              <li>
                Expansion opportunities in dairy products (cheese, yogurt)
                </li>
            </ul>

          </div>

        </div>
        <div className="">
          <img src={areaview3} alt="" className="w-full h-40" />

          <div className="pt-6">
            <h4 className="text-lg font-semibold">Goat Farming    </h4>
            <ul className="list-inside list-disc">
              <li className="text-base font-medium text-gray-600">Investment required: $X million</li>
              <li className="text-base font-medium text-gray-600">Projected ROI: X%</li>
              <li>
                Key activities: Establishing breeding programs, improving farm infrastructure,
                expanding market reach
                </li>
            </ul>
            <h4 className="font-semibold">
              Benefits
            </h4>
            <ul className="list-inside list-disc">
              <li>
                Growing market for goat milk and meat
                </li>

              <li>Lower environmental impact compared to other livestock</li>
            </ul>

          </div>

        </div>
        <div className="">
          <img src={areaview3} alt="" className="w-full h-40" />
          <div className="pt-6">
            <h4 className="text-lg font-semibold">Sheep Farming    </h4>
            <ul className="list-inside list-disc">
              <li className="text-base font-medium text-gray-600">Investment required: $X million</li>
              <li className="text-base font-medium text-gray-600">Projected ROI: X%</li>
              <li>
                Key activities: Enhancing breeding techniques, expanding flock, diversifying product
                offerings (meat, wool)
                </li>
            </ul>
            <h4 className="font-semibold">
              Benefits
            </h4>
            <ul className="list-inside list-disc">
              <li>
                Dual revenue streams from meat and wool
                </li>
              <li>
                Niche market opportunities
                </li>

            </ul>

          </div>

        </div>
        <div className="">
          <img src={areaview3} alt="" className="w-full h-40" />
          <div className="pt-6">
            <h4 className="text-lg font-semibold">Pig Farming    </h4>
            <ul className="list-inside list-disc">
              <li className="text-base font-medium text-gray-600">Investment required: $X million</li>
              <li className="text-base font-medium text-gray-600">Projected ROI: X%</li>
              <li>
                Key activities: Implementing advanced breeding practices, improving biosecurity
                measures, expanding processing capabilities
                </li>
            </ul>
            <h4 className="font-semibold">
              Benefits
            </h4>
            <ul className="list-inside list-disc">
              <li>
                {' '}
                High demand for pork products
                </li>
              <li>
                {' '}
                Opportunities for value-added products (sausages, bacon)
                </li>

            </ul>

          </div>

        </div>
      </div>
      <div className="my-10">
        <h3 className="text-xl font-semibold my-3">Interested in exploring farmland investment opportunities?</h3>
        <p className="text-sm max-w-6xl m-auto">
          Follow the button below to create a Free FarmFundr account.
          You will also be updated as new opportunities become available. At FarmFundr, we pride ourselves on offering only the highest quality investments that we'd invest in ourselves. Be sure to join to be the first to know when these carefully sourced opportunities become available.
        </p>
        <NavLink to="/auth/login" className="bg-gray-700 text-white text-sm py-2 px-3 block max-w-max m-auto my-6">LOGIN OR SIGN UP FOR FULL INVESTMENT DETAILS</NavLink>
      </div>
    </section>

  </div>
);

export default Investment;
