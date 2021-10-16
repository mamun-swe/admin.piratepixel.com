import React from 'react'

export const Image = (props) => {
    return (
        <div>
            <img
                src={props.src}
                className={"img-fluid rounded " + props.className}
                alt={props.alt}
                style={{
                    width: props.x ? props.x : "100%",
                    height: props.y ? props.y : "100%"
                }}
            />
        </div>
    )
}
