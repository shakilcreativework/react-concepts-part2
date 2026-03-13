import React, { useState } from 'react';

const Batsman = () => {
    const [runs, setRuns] = useState(0);
    console.log(runs);

    return (

        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={() => setRuns(runs + 1)}>Singles</button>
            <button onClick={() => setRuns(runs + 4)}>Four</button>
            <button onClick={() => setRuns(runs + 6)}>Six</button>
        </div>
    );
};

export default Batsman;