import React from 'react';

const Cell = ({item}) => {
    // console.log(item);
    function setColorToCell(contribution) {
        if(contribution === 0) return "#EDEDED"
        else if(contribution <= 9) return "#ACD5F2"
        else if(contribution <= 19) return "#7FA8C9"
        else if(contribution <= 29) return "#527BA0"
        else if(contribution >= 30) return "#254E77"
    }
    return (
        <div>
            {Object.entries(item[1]).map(item => (
                <div style={{width: "20px", height: "20px", border: "1px solid white", backgroundColor: setColorToCell(item[1]) }}>
            {item[1]}
        </div>
            ))}
        </div>
        
    );
};

export default Cell;