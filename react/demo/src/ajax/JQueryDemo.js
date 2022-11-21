import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function JQueryDemo() {
    const [now, setNow] = useState('')

    useEffect(getDateTime, []);

    function getDateTime() {
        $.getJSON('http://worldtimeapi.org/api/timezone/Asia/Kolkata',
                  (data) => setNow(data.datetime) )
    }

    function getDateTimeUTC() {
        $.getJSON('http://worldtimeapi.org/api/timezone/Etc/UTC',
                      (data) => setNow(data.datetime) )
    }

    return (
        <>
            <h2>jQuery Demo</h2>
            <h1>{now}</h1>
            <button onClick={getDateTimeUTC}>Get UTC </button>
        </>
    )
}
