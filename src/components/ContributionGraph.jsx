import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cell from './Cell';
import { generateChart } from '../helpers/functions';

const ContributionGraph = () => {

   const [contributions, setContributions] = useState({})

    async function getContributions() {
        const result = await axios.get("https://dpg.gg/test/calendar.json")
        setContributions(result.data)
    }

    useEffect(()=> {
        getContributions()
    }, [])
    
   const dataForChart = generateChart(contributions);
    return (
        <div style={{display: 'flex'}}>
            {Object.entries(dataForChart).map((item) => (<Cell key={item} item={item}/>))}
        </div>
    );
};

export default ContributionGraph;