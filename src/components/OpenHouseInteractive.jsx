
import React, { useState } from 'react'
import ButtonClassroom from './ButtonClassroom'

const OpenHouseInteractive = () => {
    const [roomSelected, setRoomSelected] = useState("Karta")
    const [roomHistory, setRoomHistory] = useState([])

    const roompick = {
        Karta: ["/Karta_vit.png", "SKOLANS KARTA"],
        C: ["/C_pink_copy.png", "C BYGGNADEN"],
        F: ["/Fakiren_map.png_double.png", "F BYGGNADEN"],
        D: ["/D1_och_D2_nr2.png", "D BYGGNADEN(första våning)"],
        Dupp: ["/Map_D3_Recovered_GD.png", "D BYGGNADEN (andra våning)"],
        Studion: ["/Sudion_bla_textt.png", "STUDIO"],
        Aupp: ["/Lobbyyyyy_copy.png", "A BYGGNADEN(tredje våning)"],
        Aner: ["/IMG_8195.png", "A BYGGNADEN(andra våning)"],
    }

    const buttons = [
        {
            id: "button-c",
            label: "C BYGGNADEN",
            imageKey: "C",
            x: 26,
            y: 45,
            visible: true,
        },
        {
            id: "button-f",
            label: "F BYGGNADEN",
            imageKey: "F",
            x: 80,
            y: 70,
            visible: true,
        },
        {
            id: "button-d",
            label: "D BYGGNADEN",
            imageKey: "D",
            x: 23,
            y: 73,
            visible: true,
        },
        {
            id: "button-studion",
            label: "Studion",
            imageKey: "Studion",
            x: 66,
            y: 40,
            visible: true,
        },
        {
            id: "button-aner",
            label: "A BYGGNADEN(1)",
            imageKey: "Aner",
            x: 30,
            y: 16,
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
    const showDNavigation = roomSelected === "D"

    return (
        <section className="section openhouse-map-section" id="openhouse">
            <div className="openhouse-map-heading text-center">
                <p className="mono-label dark">[ ÖPPET HUS ]</p>
            </div>

            <div className="openhouse-map-content">
                <div className={`openhouse-map-toolbar${!isMainMap ? " has-back" : ""}`}>
                    {!isMainMap && (
                        <ButtonClassroom
                            id="button-back"
                            onClick={goBack}
                        >
                            <span aria-hidden="true">←</span>
                            <span>Tillbaka</span>
                        </ButtonClassroom>
                    )}

                    <h3
                        key={`title-${roomSelected}`}
                        className="openhouse-map-title text-center animate-map-in"
                    >
                        {roompick[roomSelected][1]}
                    </h3>
                </div>

                {/* Map and positioned buttons */}
                <div className="openhouse-map-stage">
                    <div className="openhouse-map-image-wrap">
                        <img
                            key={roomSelected}
                            src={roompick[roomSelected][0]}
                            alt={roompick[roomSelected][1]}
                            className="animate-map-in"
                        />

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
                                    ↑ Tredje våningen
                                </ButtonClassroom>
                            </>
                        )}

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
                                    ↑ Tredje våningen
                                </ButtonClassroom>
                            </>
                        )}

                        {showDNavigation && (
                            <>
                                <ButtonClassroom
                                    id="button-up-aupp"
                                    style={{
                                        position: "absolute",
                                        left: "50%",
                                        top: "15%",
                                        transform: "translate(-50%, -50%)",
                                    }}
                                    onClick={() => selectRoom("Dupp")}
                                >
                                    ↑ Andra våningen
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
