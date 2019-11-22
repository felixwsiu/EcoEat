import React from 'react';

function Busy() {
    return (
        //Credit: https://dribbble.com/shots/5092176-Newton-Loader
        <div className="gooey">
            <span class="dot"></span>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

    );
}

export default Busy;
