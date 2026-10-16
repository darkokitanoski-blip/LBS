const ButtonClassroom = ({ id, style, onClick, children }) => {
    return (
        <button
            id={id}
            type="button"
            style={style}
            onClick={onClick}
            className="classroom-map-button"
        >
            {children} 
        </button>
    )
}

export default ButtonClassroom