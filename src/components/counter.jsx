import { useState } from 'react'

export default function Increment() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h3>Simple Counter Example</h3>
            <p class='result'>{counter}</p>
            <button className='add' onClick={() => {
                setCounter(counter + 1)
            }}>Increment</button>

            <button className='subtract' onClick={() => {
                if (counter !== 0) {
                    setCounter(counter - 1)
                }
            }}>Decrement</button>
        </div>
    );
}