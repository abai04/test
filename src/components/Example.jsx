import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Example = () => {
    const colors = [{"#EDEDED": "No contribution"}, {"#ACD5F2": "1-9 contribution"}, {"#7FA8C9": "10-19 contribution"}, {"#527BA0": "20-29 contributions"}, {"#254E77": "30+ contributions"}]
    return (
        <div style={{color: "#959494", fontSize: "8px"}} className='d-flex mt-5'>
            <p>Меньше</p>
            {colors.map(item => 
            <OverlayTrigger key={Object.keys(item)} trigger={"click"}  
          placement={"top"}
          overlay={
            <Tooltip id={`tooltip-top`}>
                {Object.values(item)}
            </Tooltip>
          }>
                <div className='cell' style={{width: "15px", height: "15px", backgroundColor: Object.keys(item) }}>
                </div>

          </OverlayTrigger>
            )} 
            <p>Больше</p>
        </div>
    );
};

export default Example;