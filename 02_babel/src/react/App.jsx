import React, { memo, useState } from "react";

const App = memo(() => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={(e) => setCount(count + 1)}>+1</button>
        </div>
    );
});

export default App;
