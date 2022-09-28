import React from 'react';
import HighOrder from '../HOC/HighOrder';

function displayGuidelineHOC() {
    return (
        <div>
            <HighOrder url="http://localhost:8000/guidelines" type="Guidelines"/>
        </div>
    );
}

export default displayGuidelineHOC;