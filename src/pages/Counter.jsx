import React, { useState, useEffect } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `counter ${count} time`
    })

    return (
        <div className="container my-3">
            <h2>Count State: {count} time</h2>
            <h2>Count Effect: {count} time</h2>
            <button className="btn btn-primary"
                onClick={() => setCount(count + 1)} >
                increase
            </button>
            <button className="btn btn-danger"
                onClick={() => setCount(count - 1)} >
                decrease
            </button>
        </div>
    )
}
