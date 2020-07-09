import React from 'react'
import Typed from "react-typed"

export default function Type() {
    return (
        <div>
            <div className="Type">
                <Typed
                strings={["🤖Find your preffered gear.🦾", "🤖Find your desired tech.👾", "🤖Find your required tech.😎"]}
                typeSpeed={60}
                backSpeed={50}
                backDelay={1}
                loop
                smartBackspace
                />
                </div>
        </div>
    )
}
