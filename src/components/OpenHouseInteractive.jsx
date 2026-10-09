import React from 'react'
import ImagePlaceholder from './ImagePlaceholder'
import ArrowIcon from './ArrowIcon'
import SectionTransition from './SectionTransition'
import ButtonClassroom from './ButtonClassroom'

const OpenHouseInteractive = () => {
    return (
        <>
            <section className="intro section relative h-[90vh] flex justify-center" id="openhouse">
               
                <div className="intro-copy w-[90%] text-center absolute p-10 top-0 left-[50%] translate-x-[-50%]">
                    <p className="mono-label dark text-center">[ ÖPPET HUS ]</p>
                    <h2 className='text-center w-full'>SKOLANS KARTA</h2>
                </div>
                
                 <img src="/map_skiss.png" className='w-[100px]' alt="" />
                 <ButtonClassroom />
            </section>
        </>
    )
}

export default OpenHouseInteractive