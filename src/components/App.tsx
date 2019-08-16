import * as React from "react";
import {useState} from "react";

export const App = () => {
    const [state, setState] = useState(0);

    return <div>
        <p>Click: {state} <button onClick={() => setState(state + 1)}>click</button></p>
    </div>;
};
