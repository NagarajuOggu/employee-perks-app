import React from 'react';

function Instructions() { 
    return (
       <div className="instructions">
        <p className="text-blue-500 font-bold"> Important Notices:</p>
        <ol className='list-decimal ml-4'>
            <li>Orders must be submitted no later than <span className='text-red-500 underline font-bold'>FIRST FRIDAY</span> of each month</li>
            <li>Unused EPP Points do not transfer to following months - use or lose normally.</li>
            <li>30 Points is the maximum per month - You will not be able to <span className='text-red-500 underline font-bold'>SUBMIT</span> any order that exceed this amount </li>
        </ol>
       </div>
    )
}

export default Instructions;