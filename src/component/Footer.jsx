import React from "react";

let current_year = new Date().getFullYear();

function Copyright(){
    return (
        <footer>
            <p>@copyright with Code Zero {current_year}</p>
        </footer>
    );
}

export default Copyright;
