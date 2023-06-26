import React, { useState, useEffect, useRef } from 'react';


export default function Photo({className, image, title, location, links}) {

    // click outside alerter
    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsShown(false)
            }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const [isShown, setIsShown] = useState(false);

    const linksBaseStyles = "my-4 px-4 py-2 rounded-full bg-slate-100 text-slate-900 font-bold text-sm md:text-base "

    return (
        <div className={ className + " relative" }
            ref={wrapperRef} // onClickOutside component
            onClick={ () => { setIsShown(true) } } 
            onMouseEnter={ () => { setIsShown(true) } } 
            onMouseLeave={ () => { setIsShown(false) } }>

            { 
                !isShown ? <></> :
                    <div className="fade-in absolute w-full h-full bg-gradient-radial from-transparent to-slate-900">
                        <div className="flex flex-col w-full h-full">
                            { title === "" ? <></> : <p className='mt-4 mx-4 font-bold text-sm md:text-base'>{ title }</p> }
                            { location === "" ? <></> : <p className='mx-4 italic font-thin text-sm md:text-base'>{ location }</p> }
                            <div className="flex justify-end items-end h-full">
                            {
                                Object.entries(links).map(([name, url], idx) => {
                                    return <a key={url} className={ idx+1 === Object.keys(links).length ? linksBaseStyles + "mr-4" : linksBaseStyles + "mr-2" } href={ url } download={ name === "⬇" ? title.toLowerCase().replace(/\s/g, '_') + "_low_res" : false } target="_blank" rel="noreferrer">{ name }</a>
                                })
                            }
                            </div>
                        </div>
                    </div>
            }

            { image }

        </div>
    )
}
