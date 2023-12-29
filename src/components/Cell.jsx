import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import "./Cell.css"
import { dateFormatter } from '../helpers/functions';

const Cell = ({item}) => {
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
                <OverlayTrigger key={item} trigger={"click"}  
          placement={"top"}
          overlay={
            <Tooltip id={`tooltip-top`}>
                <p style={{fontSize: "12px"}}>{item[1] === 0 ? ("No") : (item[1])} contributions</p>
                <p style={{fontSize: "10px", color: "#7C7C7C"}}>{dateFormatter(item[0])}</p>
                {console.log(item)}
            </Tooltip>
          }>
                <div className='cell' style={{width: "15px", height: "15px", backgroundColor: setColorToCell(item[1]) }}>
            </div>
            
                </OverlayTrigger>
            ))}
        </div>
        
    );
};

export default Cell;