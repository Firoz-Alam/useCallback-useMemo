import React from 'react';

 function ShowComponent({count,title}) {
    console.log(`show ${title} rendering...`)
    return(
        <div>
            <p>{title} is {count}</p>
        </div>
    );
}

export default React.memo(ShowComponent);