import React from 'react';

const Skill = props =>(
    
    <div className="skillCard">
        <div className="icon">
            <img src={props.image}/>
        </div>
        <div className="skillCaption">
            <h5>{props.title}</h5>
            <p>{props.description}</p>
        </div>
    </div>
    
    )
    
    export default Skill