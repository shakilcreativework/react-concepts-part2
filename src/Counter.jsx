import React, { useState } from 'react';

const counterStyle = {
    border: '2px solid yellow',
};

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log(count);

    return (
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    );
};

export default Counter;