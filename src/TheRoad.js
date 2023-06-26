import { Link } from "react-router-dom";
import Photo from "./Photo";
import guadalupe_np_1 from "./resources/the-road/guadalupe_np_1.jpg"
import guadalupe_np_2 from "./resources/the-road/guadalupe_np_2.jpg"
import carlsbad_np_1 from "./resources/the-road/carlsbad_np_1.jpg"
import carlsbad_np_2 from "./resources/the-road/carlsbad_np_2.jpg"
import carlsbad_np_3 from "./resources/the-road/carlsbad_np_3.jpg"
import lincoln_nf_1 from "./resources/the-road/lincoln_nf_1.jpg"
import white_sands_np_1 from "./resources/the-road/white_sands_np_1.jpg"
import angels_peak_1 from "./resources/the-road/angels_peak_1.jpg"
import mesa_verde_np_1 from "./resources/the-road/mesa_verde_np_1.jpg"
import black_canyon_np_1 from "./resources/the-road/black_canyon_np_1.jpg"

export default function TheRoad() {
    return (
      <div className="flex flex-col items-start">
        <div className="z-40 fixed ml-8 mt-8 md:ml-16 md:mt-16 flex items-center">
          <Link className="w-12 md:w-16 cursor-pointer" to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.93 298.65">
              <g>
                <path fill="white" d="M234.8,27.05c-12.47,11.18-22.88,24.3-31,39.09-14.37-9.7-33.96-16.32-54.47-16.32-54.95,0-99.51,44.56-99.51,99.51s44.56,99.57,99.51,99.57c11.45,0,22.44-1.92,32.67-5.5v51.66c-10.52,2.36-21.45,3.59-32.67,3.59C66.87,298.65,0,231.77,0,149.32S66.87,0,149.32,0c30.41,0,61.01,9.73,85.48,27.05Z" />
                <path fill="white" d="M451.93,43.75l-35.2,35.2c-18.01-18.01-42.9-29.16-70.38-29.16-46.37,0-85.22,31.76-96.29,74.66h46.51v49.77h-49.77v124.43h-49.77V149.34C197.03,66.87,263.88,.02,346.35,.02c41.24,0,78.55,16.71,105.58,43.73Z" />
                <circle fill="white" cx="324.48" cy="273.76" r="24.88" />
              </g>
            </svg>
          </Link>
        </div>
        <div className="z-1 flex flex-wrap md:mb-2">
          <div className="md:flex-[33.333%] md:max-w-[33.333%]">
            <Photo image={<img src={guadalupe_np_1} alt={"guadalupe np"} />} title={"Guadalupe Peak"} location={"Guadalupe Mountains Natl Park, TX"} links={ {"⬇": "/the-road/guadalupe_np_1.jpg", prints: "https://society6.com/product/guadalupe-peak8395438_print"} } />
            <Photo className="md:mt-2" image={<img src={lincoln_nf_1} alt={"lincoln nf"} />} title={"Bluff Springs"} location={"Lincoln Natl Forest, NM"} links={ {"⬇": "/the-road/lincoln_nf_1.jpg", prints: "https://society6.com/product/bluff-springs_print"} } />
            <Photo className="md:mt-2" image={<img src={carlsbad_np_1} alt={"carlsbad np"} />} title={"Natural Entrance Trail"} location={"Carlsbad Caverns Natl Park, NM"} links={ {"⬇": "/the-road/carlsbad_np_1.jpg", prints: "https://society6.com/product/natural-entrance-trail_print"} } />
          </div>
          <div className="md:flex-[33.333%] md:max-w-[33.333%] md:px-2">
            <Photo image={<img src={angels_peak_1} alt={"angel's peak"} />} title={"Angel's Camp"} location={"Angel's Peak, NM"} links={ {"⬇": "/the-road/angels_peak_1.jpg",  prints: "https://society6.com/product/angels-camp8396831_print"} } />
            <Photo className="md:mt-2" image={<img src={carlsbad_np_2} alt={"Carlsbad Natl Park"} />} title={"Chandelier"} location={"Carlsbad Caverns Natl Park, NM"} links={ {"⬇": "/the-road/carlsbad_np_2.jpg", prints: "https://society6.com/product/chandelier8396705_print"} } />
            <Photo className="md:mt-2" image={<img src={white_sands_np_1} alt={"Lincoln Natl Forest"} />} title={"Sunset Dunes"} location={"White Sands Natl Park, NM"} links={ {"⬇": "/the-road/white_sands_np_1.jpg", prints: "https://society6.com/product/sunset-dunes8396743_print"} } />
            <Photo className="md:mt-2" image={<img src={black_canyon_np_1} alt={"Black Canyon of the Gunnison Natl Park"} />} title={"The Gunnison River"} location={"Black Canyon of the Gunnison Natl Park, CO"} links={ {"⬇": "/the-road/black_canyon_np_1.jpg", prints: "https://society6.com/product/the-gunnison-river_print"} } />
          </div>
          <div className="md:flex-[33.333%] md:max-w-[33.333%]">
            <Photo image={<img src={mesa_verde_np_1} alt={"mesa verde np"} />} title={"Mesa Verde Skyline"} location={"Mesa Verde Natl Park, CO"} links={ {"⬇": "/the-road/mesa_verde_np_1.jpg", prints: "https://society6.com/product/mesa-verde-skyline_print"} } />
            <Photo className="md:mt-2" image={<img src={guadalupe_np_2} alt={"guadalupe np"} />} title={"Guadalupe Peak Trail"}location={"Guadalupe Mountains Natl Park, TX"} links={ {"⬇": "/the-road/guadalupe_np_2.jpg", prints: "https://society6.com/product/guadalupe-peak-trail_print"} } />
            <Photo className="md:mt-2" image={<img src={carlsbad_np_3} alt={"carlsbad np"} />} title={"Another World"} location={"Carlsbad Caverns Natl Park, NM"} links={ {"⬇": "/the-road/carlsbad_np_3.jpg", prints: "https://society6.com/product/another-world8396718_print"} } />
          </div>
        </div>
      </div>
    )
  }
