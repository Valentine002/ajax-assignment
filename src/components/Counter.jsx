import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <section className="card">
            <h2>Counter · useState + onClick</h2>
            <p className="count">{count}</p>
            <div className="row">
                <button onClick={() => setCount(count - 1)}>−</button>
                <button onClick={() => setCount(0)}>Reset</button>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </section>
    );
}

export default Counter;