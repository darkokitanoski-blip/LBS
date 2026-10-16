
import React, { useState } from 'react'
import ButtonClassroom from './ButtonClassroom'

const OpenHouseInteractive = () => {
    const [roomSelected, setRoomSelected] = useState("Karta")
    const [roomHistory, setRoomHistory] = useState([])

    const roompick = {
        Karta: ["/Karta_vit.png", "SKOLANS KARTA"],
        C: ["/C_pink_copy.png", "C BYGGNADEN"],
        F: ["/Fakiren_map.png_double.png", "F BYGGNADEN"],
        D: ["/D1_och_D2.png", "D BYGGNADEN"],
        Studion: ["/Sudion_bla_textt.png", "STUDIO"],
        Aupp: ["/Lobbyyyyy_copy.png", "A BYGGNADEN(2)"],
        Aner: ["/IMG_8195.png", "A BYGGNADEN(1)"],
    }

    const buttons = [
        {
            id: "button-c",
            label: "C",
            imageKey: "C",
            x: 36,
            y: 45,
            visible: true,
        },
        {
            id: "button-f",
            label: "F",
            imageKey: "F",
            x: 74,
            y: 70,
            visible: true,
        },
        {
            id: "button-d",
            label: "D",
            imageKey: "D",
            x: 23,
            y: 73,
            visible: true,
        },
        {
            id: "button-studion",
            label: "Studion",
            imageKey: "Studion",
            x: 63,
            y: 35,
            visible: true,
        },
        {
            id: "button-aner",
            label: "Aner",
            imageKey: "Aner",
            x: 80,
            y: 40,
            visible: true,
        },
    ]

    const selectRoom = (room) => {
        if (room === roomSelected) return

        setRoomHistory(previous => [...previous, roomSelected])
        setRoomSelected(room)
    }

    const goBack = () => {
        if (roomHistory.length === 0) {
            setRoomSelected("Karta")
            return
        }

        const previousRoom = roomHistory[roomHistory.length - 1]

        setRoomHistory(previous => previous.slice(0, -1))
        setRoomSelected(previousRoom)
    }

    const isMainMap = roomSelected === "Karta"
    const showAnerNavigation = roomSelected === "Aner"

    return (
        <section
            className="intro section min-h-[90vh] flex flex-col items-center"
            id="openhouse"
        >
            <div className="intro-copy w-[90%] text-center p-10">
                <p className="mono-label dark">[ ÖPPET HUS ]</p>
                <h2 className="text-center w-full">SKOLANS KARTA</h2>
            </div>

            <div className="w-full px-4 sm:px-8 flex justify-center">
                <div className="w-full max-w-[900px]">

                    {/* Dynamic room title */}
                    <h3
                        key={`title-${roomSelected}`}
                        className="text-center text-xl md:text-2xl font-semibold mb-4 animate-map-in"
                    >
                        {roompick[roomSelected][1]}
                    </h3>

                    {/* Map and positioned buttons */}
                    <div className="relative w-full">

                        <img
                            key={roomSelected}
                            src={roompick[roomSelected][0]}
                            alt={roompick[roomSelected][1]}
                            className="block w-full h-auto animate-map-in"
                        />

                        {/* Return button */}
                        <button
                            type="button"
                            onClick={goBack}
                            aria-label="Tillbaka till föregående karta"
                            aria-hidden={isMainMap}
                            tabIndex={isMainMap ? -1 : 0}
                            className={`absolute top-3 left-3 z-20
                                flex items-center gap-2 rounded-full
                                bg-black/75 text-white px-4 py-2
                                backdrop-blur-sm
                                transition-all duration-300 ease-out
                                hover:bg-black
                                ${
                                    !isMainMap
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 -translate-y-2 pointer-events-none"
                                }`}
                        >
                            <span aria-hidden="true">←</span>
                            Tillbaka
                        </button>

                        {/* Classroom buttons: only on main map */}
                        {isMainMap &&
                            buttons
                                .filter(button => button.visible)
                                .map(button => (
                                    <ButtonClassroom
                                        key={button.id}
                                        id={button.id}
                                        style={{
                                            position: "absolute",
                                            left: `${button.x}%`,
                                            top: `${button.y}%`,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                        onClick={() => selectRoom(button.imageKey)}
                                    >
                                        {button.label}
                                    </ButtonClassroom>
                                ))}

                        {/* A(1) navigation */}
                        {showAnerNavigation && (
                            <>
                                <ButtonClassroom
                                    id="button-up-aupp"
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "15%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    onClick={() => selectRoom("Aupp")}
                                >
                                    ↑ Up
                                </ButtonClassroom>

                                <ButtonClassroom
                                    id="button-down-aner"
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "85%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    onClick={() => selectRoom("Aner")}
                                >
                                    ↓ Andra
                                </ButtonClassroom>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OpenHouseInteractive
