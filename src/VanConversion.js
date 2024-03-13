import { Link } from "react-router-dom";
import vc1 from "./resources/van-conversion/1.jpg"
import vc2 from "./resources/van-conversion/2.jpg"
import vc3 from "./resources/van-conversion/3.jpg"
import vc4 from "./resources/van-conversion/4.jpg"
import vc5 from "./resources/van-conversion/5.jpg"
import vc6 from "./resources/van-conversion/6.jpg"


export default function VanConversion() {
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
        <div className="z-1 grid grid-cols-1 md:grid-cols-2">
          <img src={vc1} alt={"van conversion 1"} />
          <img src={vc2} alt={"van conversion 2"} />
          <img src={vc3} alt={"van conversion 3"} />
          <img src={vc4} alt={"van conversion 4"} />
          <img src={vc5} alt={"van conversion 5"} />
          <img src={vc6} alt={"van conversion 6"} />
        </div>
      </div>
    )
  }
