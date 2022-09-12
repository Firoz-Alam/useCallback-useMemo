import React from 'react';

function Button({handleClick,children}){

    console.log(`button ${children} rendering...`)

    return(
        <div>
            <button type="button" onClick={handleClick}>{children}</button>
        </div>

    );
}

export default React.memo(Button);