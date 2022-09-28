import React from 'react';
import HighOrder from '../HOC/HighOrder';

function displayPreviewHOC() {
    return (
        <div>
            <HighOrder url="http://localhost:8000/widget" type="Preview"/>
        </div>
    );
}

export default displayPreviewHOC;