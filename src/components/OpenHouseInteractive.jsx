
import React, { useEffect, useRef, useState } from 'react'
import ButtonClassroom from './ButtonClassroom'


// openhouse interactive är komponent där alla sidor behöver kartan tillgänligt, har funktioner genom att klicka samt kort info om var man ligger
const roompick = {
    Karta: {
        image: "/Karta_vit.png",
        title: "SKOLANS KARTA",
        description: "Översikt över skolans byggnader. Välj en byggnad för att se dess planritning.",
    },
    C: {
        image: "/C_pink_copy.png",
        title: "C-BYGGNADEN",
        description: "Planritning över C-byggnaden, film & film ligger här.",
    },
    F: {
        image: "/Fakiren_map.png_double.png",
        title: "F-BYGGNADEN",
        description: "Planritning över F-byggnaden. Musik produktion ligger här också",
    },
    D: {
        image: "/D1_och_D2_nr2.png",
        title: "D-BYGGNADEN · FÖRSTA VÅNINGEN",
        description: "Första våningens planritning, ai & web utvekling och spelgrafik ligger här. Välj andra våningen för att fortsätta upp i byggnaden.",
    },
    Dupp: {
        image: "/Map_D3_Recovered_GD.png",
        title: "D-BYGGNADEN · ANDRA VÅNINGEN",
        description: "Planritning över D-byggnadens andra våning. Grafisk Desing våning",
    },
    Studion: {
        image: "/Sudion_bla_textt.png",
        title: "STUDION",
        description: "Planritning över studion och dess lokaler för musik produktion samt foto & film.",
    },
    Aupp: {
        image: "/Lobbyyyyy_copy.png",
        title: "A-BYGGNADEN · TREDJE VÅNINGEN",
        description: "Planritning över A-byggnadens tredje våning. Lobby och skolkurator ligger här. ",
    },
    Aner: {
        image: "/IMG_8195.png",
        title: "A-BYGGNADEN · ANDRA VÅNINGEN",
        description: "Planritning över A-byggnadens andra våning, spelutvekling ligger här. Välj tredje våningen för att fortsätta.",
    },
}

const OpenHouseInteractive = ({ initialRoom = "Karta", allowedRooms }) => {
    const [roomSelected, setRoomSelected] = useState(initialRoom)
    const [roomHistory, setRoomHistory] = useState([])
    const preloadedImages = useRef([])

    useEffect(() => {
        preloadedImages.current = Object.values(roompick).map(({ image }) => {
            const preloadedImage = new Image()
            preloadedImage.onerror = () => {
                console.error(`Could not preload classroom map: ${image}`)
            }
            preloadedImage.src = image
            return preloadedImage
        })

        return () => {
            preloadedImages.current = []
        }
    }, [])

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
            label: "A BYGGNADEN",
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
    const canNavigateTo = (room) => !allowedRooms || allowedRooms.includes(room)
    const backRoom = roomHistory[roomHistory.length - 1]
    const canGoBack = !isMainMap && (
        backRoom ? canNavigateTo(backRoom) : !allowedRooms
    )
    const showAnerNavigation = roomSelected === "Aner" && canNavigateTo("Aupp")
    const showDNavigation = roomSelected === "D" && canNavigateTo("Dupp")
    const selectedMap = roompick[roomSelected]

    return (
        <section className="section openhouse-map-section" id="openhouse">
            <div className="openhouse-map-heading text-center">
                <p className="mono-label dark">[ ÖPPET HUS ]</p>
            </div>

            <div className="openhouse-map-content">
                <div className={`openhouse-map-toolbar${canGoBack ? " has-back" : ""}`}>
                    {canGoBack && (
                        <ButtonClassroom
                            id="button-back"
                            onClick={goBack}
                        >
                            <span aria-hidden="true">←</span>
                            <span>Tillbaka</span>
                        </ButtonClassroom>
                    )}

                    <div className="openhouse-map-copy" key={`copy-${roomSelected}`}>
                        <h3 className="openhouse-map-title animate-map-in">
                            {selectedMap.title}
                        </h3>
                        <p
                            id="openhouse-map-description"
                            className="openhouse-map-description animate-map-in"
                        >
                            {selectedMap.description}
                        </p>
                    </div>
                </div>
                <div className="openhouse-map-stage">
                    <div className="openhouse-map-image-wrap">
                        <img
                            key={roomSelected}
                            src={selectedMap.image}
                            alt={selectedMap.title}
                            aria-describedby="openhouse-map-description"
                            className="animate-map-in"
                        />

                        {isMainMap &&
                            buttons
                                .filter(button => button.visible && canNavigateTo(button.imageKey))
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
                                        ↓ {button.label} ↓
                                    </ButtonClassroom>
                                ))}

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
                                    id="button-up-dupp"
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
