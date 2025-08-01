import React, { useState } from 'react';
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import hero from "./resources/vangogh/hero.jpg"
import hero2 from "./resources/vangogh/hero2.jpg"
import van1 from "./resources/vangogh/van1.jpg"
import van2 from "./resources/vangogh/van2.jpg"
import van3 from "./resources/vangogh/van3.jpg"
import van4 from "./resources/vangogh/van4.jpg"
import van5 from "./resources/vangogh/van5.jpg"
import van6 from "./resources/vangogh/van6.jpg"
import van7 from "./resources/vangogh/van7.jpg"
import van8 from "./resources/vangogh/van8.jpg"
import van9 from "./resources/vangogh/van9.jpg"
import van10 from "./resources/vangogh/van10.jpg"

const photos = [
  van1,
  van2,
  van3,
  van4,
  van5,
  van6,
  van7,
  van8
];

const PurchaseVanGogh = () => {
  return (
    <div className="font-sans text-gray-800 bg-slate-50">

      {/* Navbar */}
      <div className="flex items-center justify-between w-full h-full px-8 py-4 bg-orange-200">
        <Link className="w-12 cursor-pointer md:w-16" to="/">
          <svg className="fill-slate-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.93 298.65">
            <g>
              <path d="M234.8,27.05c-12.47,11.18-22.88,24.3-31,39.09-14.37-9.7-33.96-16.32-54.47-16.32-54.95,0-99.51,44.56-99.51,99.51s44.56,99.57,99.51,99.57c11.45,0,22.44-1.92,32.67-5.5v51.66c-10.52,2.36-21.45,3.59-32.67,3.59C66.87,298.65,0,231.77,0,149.32S66.87,0,149.32,0c30.41,0,61.01,9.73,85.48,27.05Z" />
              <path d="M451.93,43.75l-35.2,35.2c-18.01-18.01-42.9-29.16-70.38-29.16-46.37,0-85.22,31.76-96.29,74.66h46.51v49.77h-49.77v124.43h-49.77V149.34C197.03,66.87,263.88,.02,346.35,.02c41.24,0,78.55,16.71,105.58,43.73Z" />
              <circle cx="324.48" cy="273.76" r="24.88" />
            </g>
          </svg>
        </Link>

        <div className="flex items-center justify-center h-full font-serif text-sm italic text-slate-700 md:text-base">
          <div className="p-2 cursor-pointer" onClick={() => document.getElementById("gallery")?.scrollIntoView({behavior: 'smooth'})}>Gallery</div>
          <div className="p-2 cursor-pointer" onClick={() => document.getElementById("specifications")?.scrollIntoView({behavior: 'smooth'})}>Specifications</div>
          <a href="mailto:purchase-van-gogh@chrisfregly.com"><div className="p-2">Inquire Now</div></a>
        </div>
      </div>

      {/* Hero */}
      <div className="flex items-center justify-center w-full h-full px-4 py-8 bg-orange-200 md:px-16">
        <div className="flex flex-col px-12">
          <h1 className="font-serif text-4xl italic text-slate-700">—Van Gogh</h1>
          <h2 className="font-serif text-2xl italic opacity-50">bring your home with you on every adventure</h2>
          <div className="pt-12">
            <a href="mailto:purchase-van-gogh@chrisfregly.com"><div className="p-4 font-serif italic text-center text-white bg-orange-600 w-36">Inquire Now</div></a>
          </div>
        </div>
        <div className="overflow-hidden w-0 md:w-[24em]">
          <img src={hero} alt="hero" />
        </div>
      </div>

      {/* Gallery */}
      <section id="gallery" className="px-4 py-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {photos.map((src, idx) => (
            <div key={idx} className="overflow-hidden transition duration-300 shadow aspect-w-1 aspect-h-1 hover:shadow-xl">
              <img
                src={src}
                alt={`van ${idx + 1}`}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Specifications */}
      <div id="specifications" className="flex justify-center w-full px-4 py-8 bg-orange-200 text-slate-700">
        <div className="lg:mt-12 lg:mr-16">
          <h1 className="w-[8em] md:w-full mb-4 font-serif text-4xl italic">—Fully Off-Grid and Built to Last</h1>
          <div>
            <h2 className="mb-4 font-serif text-2xl">Interior Specifications</h2>
            <ExpandableText title="High Speed Internet">
              <p>
                Starlink V2 dish and router ensure that no matter where you are you're able to watch your favorite shows and stay connected with loved ones.
              </p>
            </ExpandableText>
            <ExpandableText title="Fixed Full Size Bed">
              <p>
                No need to setup and teardown your bed with this fixed full sized bed. An eight inch thick memory mattress ensures you'll sleep better here than anywhere else.
              </p>
            </ExpandableText>
            <ExpandableText title="Swivel Seat">
              <p>
                The passenger seat is attached to a swivel mount allowing the seat to rotate 360 degrees. 
              </p>
            </ExpandableText>
            <ExpandableText title="Ample Storage">
              <p>
                Two cabinets and a fixed garage provide a plethora of storage. 
                One upper cabinet runs the length of the van. 
                Another lower cabinet makes up the whole of the kitchen area.
                The garage lies under the fixed bed and provides space for up to four 27 gallon bins, a couple of bikes, or any other adventure gear.
              </p>
            </ExpandableText>
            <ExpandableText title="Stainless Steal Fridge">
              <p>
                The van contains a stainless steal 47L Dometic CRX 50S Fridge. This fridge can easily hold 1-2 weeks worth of fresh goods.
              </p>
            </ExpandableText>
            <ExpandableText title="30G / 7G Water Tanks">
              <p>
                The garage houses a large 30 gallon fresh water tank and a smaller 7 gallon tank is located under the sink.  
              </p>
            </ExpandableText>
            <ExpandableText title="Stainless Steel Sink">
              <p>
                The kitchen includes a 15"x17"x9" stainless sink that makes washing up a breeze. 
              </p>
            </ExpandableText>
            <ExpandableText title="Portable Stove">
              <p>
                To save counter-space, a portable dual fuel butane/propane stove is included and allows for a simple cooking solution. 
              </p>
            </ExpandableText>
            <ExpandableText title="Maxxair Fan">
              <p>
                A Maxxair Deluxe Fan is mounted to the roof in the front of the vehicle. It offers multiple settings to cycles air and can be used rain or shine. 
              </p>
            </ExpandableText>
            <ExpandableText title="Composting Toilet">
              <p>
                Under the bench seat lies a brand new Cuddy Composting Toilet. Compact yet fully of features, this system separates liquids from solids, runs a silent fan, cuts odor with a carbon filter, and requires infrequent emptying. 
              </p>
            </ExpandableText>
            <ExpandableText last={true} title="Bedside Lights & Outlets">
              <p>
                Bedside reading lights and outlets allow you to wind down the day with a book while also keeping your portable electronics charged and ready for the next day. 
              </p>
            </ExpandableText>
          </div>
          <div className='my-4'>
            <h2 className="mb-4 font-serif text-2xl">Exterior Specifications</h2>
            <ExpandableText title="Chassis">
              <p>
                This camper was built on top of a high roof 2020 RAM ProMaster 1500 136" wheelbase van and 
                has been registered as a Class B camper in the state of California. 
                <br/><br/>
                The van has been driven 75k miles and had a transmission rebuilt at 63k miles. 
                All vehicle upkeep has been done at manufacturer recommended intervals.
              </p>
            </ExpandableText>
            <ExpandableText title="Roof Rack">
              <p>
                A low profile Unistrut roof rack has been attached to factory mounting points and provides space to attach
                solar panels and a Starlink mount.
              </p>
            </ExpandableText>
            <ExpandableText title="Side Windows">
              <p>
                Small sliding side windows lie just above the bed and provide ventilation to the interior of the van. The windows also contain a built in bug mess to keep critters out.
              </p>
            </ExpandableText>
            <ExpandableText last={true} title="Bug Netting">
              <p>
                A bug net has been installed across the main side sliding door to keep critters out. It can also be rolled up and stored when not in use. 
              </p>
            </ExpandableText>
          </div>
          <div className=''>
            <h2 className="mb-4 font-serif text-2xl">Electrical Specifications</h2>
            <ExpandableText title="300AH Battery">
              <p>
                A 300AH LiFePO4 battery keeps the lights on and internet running 24/7.
              </p>
            </ExpandableText>
            <ExpandableText title="600W Solar">
              <p>
                600W of rigid solar panels have been mounted to the roof rack and provide enough solar to remain fully off-grid indefinitely. 
              </p>
            </ExpandableText>
            <ExpandableText title="Alternator Charging">
              <p>
                While 600W of solar should keep you topped up, in the event some extra power is needed, turn on the DC-DC charge controller and charge your house batteries while driving.
              </p>
            </ExpandableText>
            <ExpandableText last={true} title="Full Victron Setup">
              <p>
                Victron is known for it's quality and ease of use. Monitor and update this system fully through the Victron app right on your phone. This setup includes the following Victron components: 100/50 MPPT Solar Charge Controller, 12/12 - 30A DC-DC Charger, 1200W Inverter + Smart Dongle, Lynx Distributor + Smart Shunt.
              </p>
            </ExpandableText>
          </div>
        </div>
        <div className="flex flex-col">
          <img className="w-0 lg:w-[24em]" src={van10} alt='van 10'/>
          <img className="w-0 lg:w-[24em]" src={van9} alt='van 9'/>
        </div>
      </div>

      {/* Call to Action */}
      <div className="flex items-center justify-center w-full h-full px-4 py-8 md:px-16">
        <div className="flex flex-col px-12">
          <h1 className="font-serif text-4xl italic text-slate-700">—Van Gogh</h1>
          <h2 className="font-serif text-2xl italic opacity-50">asking price of $53,000</h2>
          <div className="pt-12">
            <a href="mailto:purchase-van-gogh@chrisfregly.com"><div className="p-4 font-serif italic text-center text-white bg-orange-600 w-36">Inquire Now</div></a>
          </div>
        </div>
        <div className="overflow-hidden w-0 md:w-[36em]">
          <img src={hero2} alt='hero 2'/>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-between w-full px-16 py-8 text-sm text-center bg-orange-200 text-slate-700">
        <div>
          &copy; 2025 Chris Fregly
        </div>
        <div className="flex text-2xl">
          <a href="https://www.instagram.com/chris.fregly" target="_blank" rel="noreferrer"><FaInstagram className='mr-1'/></a>
          <a href="https://www.youtube.com/@chris.fregly" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>
      </footer>
    </div>
  );
};

export default PurchaseVanGogh;

function ExpandableText({ last = false, title = "Learn more", children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-[20em] md:w-[36em]">
      <button
        onClick={() => setExpanded(!expanded)}
        className={`w-full px-4 py-2 text-left border-t-[1px] ${ last ? "border-b-[1px]" : "" } border-slate-700`}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium">{title}</span>
          <span className="text-xl">{expanded ? '−' : '+'}</span>
        </div>
      </button>

      {expanded && (
        <div className="px-4 py-4 transition-all duration-300 ease-in-out">
          {children}
        </div>
      )}
    </div>
  );
}
