import React from "react";

const DisplayTime = ({ time }) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return <div> {hours}:{minutes}:{seconds}</div>;
}

export default DisplayTime;