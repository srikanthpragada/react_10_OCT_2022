import React from 'react'

export default function UncontrolledDemo() {
    let txtTitle = React.createRef()
    let cbUppercase = React.createRef()

    function show() {
        let title = txtTitle.current.value // get value from textbox 
        if (cbUppercase.current.checked)
            title = title.toUpperCase()
        alert(title)
    }

    return (
        <>
            <h1>Uncontrolled Demo</h1>
            Title : <input type="text" defaultValue="Srikanth"
                 ref={txtTitle} />
            <p></p>
            <input type="checkbox" ref={cbUppercase}  /> Uppercase
            <p></p>
            <button onClick={show}>Show</button>
        </>
    )
}
