import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow items-center mx-8 my-16 md:m-36">
      <div className="w-full max-w-sm md:max-w-xl h-full flex flex-col justify-center">
        <Link className="w-16 md:w-20 mb-16 md:mb-20 cursor-pointer" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.93 298.65">
            <defs>
              <linearGradient id="gradient" x1="100%" y1="0%" x2="50%" y2="50%" >
                <stop offset="0%" stopColor="#1033FF">
                  <animate attributeName="stop-color" values="#1033FF; #FF4B33; #1033FF" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#FF4B33">
                  <animate attributeName="stop-color" values="#FF4B33; #1033FF; #FF4B33" dur="6s" repeatCount="indefinite" />
                </stop>
                <animate attributeName="x1" values="0;0;1;1;0" keyTimes="0;.25;.5;.75;1" dur="32s" repeatCount="indefinite" />
                <animate attributeName="y1" values="0;1;1;0;0" keyTimes="0;.25;.5;.75;1" dur="32s" repeatCount="indefinite" />
                <animate attributeName="x2" values="1;1;0;0;1" keyTimes="0;.25;.5;.75;1" dur="32s" repeatCount="indefinite" />
                <animate attributeName="y2" values="1;0;0;1;1" keyTimes="0;.25;.5;.75;1" dur="32s" repeatCount="indefinite" />
              </linearGradient>
            </defs>
            <g>
              <path fill="url(#gradient)" d="M234.8,27.05c-12.47,11.18-22.88,24.3-31,39.09-14.37-9.7-33.96-16.32-54.47-16.32-54.95,0-99.51,44.56-99.51,99.51s44.56,99.57,99.51,99.57c11.45,0,22.44-1.92,32.67-5.5v51.66c-10.52,2.36-21.45,3.59-32.67,3.59C66.87,298.65,0,231.77,0,149.32S66.87,0,149.32,0c30.41,0,61.01,9.73,85.48,27.05Z" />
              <path fill="url(#gradient)" d="M451.93,43.75l-35.2,35.2c-18.01-18.01-42.9-29.16-70.38-29.16-46.37,0-85.22,31.76-96.29,74.66h46.51v49.77h-49.77v124.43h-49.77V149.34C197.03,66.87,263.88,.02,346.35,.02c41.24,0,78.55,16.71,105.58,43.73Z" />
              <circle fill="url(#gradient)" cx="324.48" cy="273.76" r="24.88" />
            </g>
          </svg>
        </Link>
        <p className="text-xl md:text-3xl font-light mb-16 md:mb-20"><span className="font-bold"><span className="wave">👋</span> I'm Chris,</span> a software engineer who dabbles in design. I'm currently working <a className="link font-bold" href="https://weather.com" target="_blank" rel="noreferrer">@TheWeatherCompany</a> and based in San Francisco, CA.</p>
        <div className="flex justify-between text-lg">
          <div className="w-1/2 font-light flex flex-col">
            <h1 className="font-bold mb-2">Socials</h1>
            <span><a href="mailto:hello@chrisfregly.com"><span className="link">email</span></a></span>
            <span><a href="https://linkedin.com/in/chrisfregly" target="_blank" rel="noreferrer"><span className="link">linkedin</span></a></span>
            <span><a href="https://github.com/chrisfregly" target="_blank" rel="noreferrer"><span className="link">github</span></a></span>
            <span><a href="https://dribbble.com/chrisfregly" target="_blank" rel="noreferrer"><span className="link">dribbble</span></a></span>
            <span><a href="https://instagram.com/chris.fregly" target="_blank" rel="noreferrer"><span className="link">instagram</span></a></span>
          </div>
          <div className="w-1/2 font-light flex flex-col">
            <h1 className="font-bold mb-2">Projects</h1>
            <span><Link to="van-conversion"><span className="link">van conversion</span></Link></span>
            <span><Link to="the-road"><span className="link">photos from the road</span></Link></span>
            <span><a href="https://quibbble.com" target="_blank" rel="noreferrer"><span className="link">quibbble</span></a></span>
            <span><a href="https://ultralitepack.com" target="_blank" rel="noreferrer"><span className="link">ultralitepack</span></a></span>
          </div>
        </div>
      </div>
    </div>
  )
}
