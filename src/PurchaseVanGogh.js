import React from "react";
import hero from "./resources/vangogh/hero.jpg"

const PurchaseVanGogh = () => {
  return (
    <div className="font-sans text-gray-800 bg-slate-50">
      {/* Hero Image */}
      <div className="relative w-full h-64 overflow-hidden md:h-96">
        <img
          src={hero}
          alt="Van Hero"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white">
            <h1 className="text-3xl font-bold md:text-5xl">2020 RAM ProMaster 1500 Camper Van</h1>
            <p className="mt-2 text-lg">High Roof · 136&quot; Wheelbase · 75k Miles · Asking $52k OBO</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl px-4 py-10 mx-auto space-y-10">
      <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500">
          <p>
            View all photos of the van at: <a
              href="https://chrisfregly.com/van-gogh" target="_blank"
              className="font-semibold underline"
            >https://chrisfregly.com/van-gogh-walkthrough</a>
          </p>
        </div>
        <div className="p-4 bg-blue-100 border-l-4 border-blue-500">
          <p>
            To inquire, email: <a
              href="mailto:purchase-van-gogh@chrisfregly.com"
              className="font-semibold underline"
            >purchase-van-gogh@chrisfregly.com</a>
          </p>
        </div>

        <p>
        Hey everyone, I'm putting my little home on wheels up for sale. 
        This has been a great vehicle and has many years of life left in it. 
        I converted this van into a camper back in 2023 and then, up until recently, traveled 
        all around the US, Canada, and Mexico. It's been a great home 
        and remote office while on road and has allowed me to experience so 
        much of North America while also maintaining a full-time remote job. 
        I have been extremely careful to maintain this camper van 
        and have put a lot of love into this project.
        </p>

        <Section title="Why Am I Selling?" items={[
          "I've moved back into an apartment and dealing with a van in the city is not sustainable. It doesn't fit into traditional garages and parking/driving it in the city is difficult.",
          "I'm planning on building out a rig (popup truck camper) that is much smaller and better suited for short trips as opposed to full-time living.",
          "I'd like for this van to go to a good home. Ideally to someone looking to full-time or to use it for significant portions of the year."
        ]} />

        <Section title="🚐 Van Specs" items={[
          "75k miles",
          "136” Wheelbase (not extended)",
          "High Roof",
          "Falken Wildpeak A/T3W Tires @ 55k miles",
          "Transmission rebuilt @ 63k miles",
          "Clean Carfax (available on request)",
          "Registered Class B Camper Van in the state of California"
        ]} />

        <Section title="🏕️ Camper Features">
          <p className="mb-2 font-semibold">Minor quirks:</p>
          <ul className="mb-4 list-disc list-inside">
            <li>A couple scuffs on cabinets and floors</li>
            <li>Bench seat rattles on bumpy roads</li>
            <li>Bench seat cushion needs replacing</li>
          </ul>
        </Section>

        <Section title="🔋 Electrical" items={[
          "600W Solar (3× 200W Newpowa Panels)",
          "LiTime 12V 300AH LiFePO4 Battery",
          "Victron 100/50 MPPT Charge Controller",
          "Victron 12/12 - 30A DC-DC Charger",
          "Victron 1200W Inverter",
          "Victron Lynx Distributor + Smart Shunt + Smart Dongle"
        ]} />

        <Section title="🚿 Plumbing" items={[
          "30 Gallon Fresh Water Tank",
          "7 Gallon Gray Water Tank",
          "Shurflo 12V Pump + Accumulator",
          "Hot and cold water lines (currently no hot water heater)"
        ]} />

        <Section title="🍳 Kitchen" items={[
          "Custom oak countertop",
          "15\"x17\"x9\" stainless sink",
          "47L Dometic CRX 50S Fridge",
          "Single burner propane/butane stove",
          "Small rice cooker",
          "Maxxair Deluxe Fan",
          "Sliding door bug net"
        ]} />

        <Section title="🛏️ Bed" items={[
          "~Full-size 8” memory foam mattress (slightly trimmed)",
          "White/red reading lights w/ USB outlets",
          "Sliding RV side windows w/ insulated window covers",
          "Insulated window covers for all front windows"
        ]} />

        <Section title="💻 Work Setup" items={[
          "Swiveling passenger seat",
          "2x 120V wall outlets",
          "Starlink V2 dish + router"
        ]} />

        <Section title="🚽 Bathroom/Shower" items={[
          "Cuddy Composting Toilet (never used)",
          "5 Gallon solar shower bag"
        ]} />

        <Section title="📦 Storage" items={[
          "2 drawer + 3-door lower cabinet",
          "5-door upper cabinet",
          "Garage space for 4x27-gal bins, bikes, SUPs, etc"
        ]} />

        <p>
          Thanks for reading! I'd love to pass this van on to someone who will
          make good use of it. I've already priced the van below what I put into it but 
          might be willing to be a bit flexible on price if it will go to a good home.
        </p>

        <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500">
          <p>
            View all photos of the van at: <a
              href="https://chrisfregly.com/van-gogh" target="_blank"
              className="font-semibold underline"
            >https://chrisfregly.com/van-gogh-walkthrough</a>
          </p>
        </div>
        <div className="p-4 bg-blue-100 border-l-4 border-blue-500">
          <p>
            To inquire, email: <a
              href="mailto:purchase-van-gogh@chrisfregly.com"
              className="font-semibold underline"
            >purchase-van-gogh@chrisfregly.com</a>
          </p>
        </div>
      </main>

      <footer className="py-6 text-sm text-center text-gray-500">
        &copy; 2025 Chris Fregly
      </footer>
    </div>
  );
};

const Section = ({ title, items = [], children }) => (
  <section>
    <h2 className="mb-2 text-xl font-bold">{title}</h2>
    {items.length > 0 ? (
      <ul className="space-y-1 list-disc list-inside">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    ) : (
      children
    )}
  </section>
);

export default PurchaseVanGogh;
