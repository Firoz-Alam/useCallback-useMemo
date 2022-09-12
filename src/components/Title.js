import React from "react";

 function Title() {
    console.log('Title rendering....')
    return(
        <div>
            <h1>use Callback Hook Tutorial</h1>
        </div>
    );
}

export default React.memo(Title);