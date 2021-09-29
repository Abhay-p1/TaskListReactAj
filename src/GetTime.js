import React, { useState } from 'react';
const GetTime = () => {
    let time = new Date().toLocaleTimeString();
    const [curr, update] = useState(time);

    const Change = () => {
        let newtime = new Date().toLocaleTimeString();
        update(newtime);
    }
    return ( < > <
        h1 > { curr } < /h1> <
        button onClick = { Change } > Get Time < /button> < / >
    );

}
export default GetTime;