import React from 'react'
import ImagePlaceholder from './ImagePlaceholder'
import ArrowIcon from './ArrowIcon'
import SectionTransition from './SectionTransition'

const OpenHouseInteractive = () => {
    return (
        <>
            <section className="intro section relative h-[90vh]" id="openhouse">
               
                <div className="intro-copy w-[90%] text-center absolute p-10 top-0 left-[50%] translate-x-[-50%]">
                    <p className="mono-label dark text-center">[ ÖPPET HUS ]</p>
                    <h2 className='text-center w-full'>SKOLANS KARTA</h2>
                </div>
                 <div className="intro-visual pixel-frame"><ImagePlaceholder label="[ LBS / CREATIVE ]" className="intro-image" /></div>
            </section>
        </>
    )
}

export default OpenHouseInteractive