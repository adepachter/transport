import { react } from "react";


export default function Tijdslijn () {

        function huidigeTijd() {
            let nununu = (Date.now());
        
        
        let unix_timestamp = nununu
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();
        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        console.log(formattedTime);
        document.getElementById("tijdslijntje").innerHTML = formattedTime;
        verspring()
        }

        function verspring() {
            setTimeout(huidigeTijd, 1000)

        }

        verspring()
    return (
        <div id="tijdslijntje">
        
        </div>
    )
}