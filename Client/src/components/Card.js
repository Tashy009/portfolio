import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'
import * as techIcons from './Icons'


const Card = ({headingText, descriptionText, codeBaseHref, liveVersionHref, techStack}) => {
    return(
        <div className="card-wrapper" >
            <div className="card card-pad">
                <div className="card-container">
                    <header className="card-heading">{headingText}</header>
                    <p className="card-description">{descriptionText}</p>
                    <div className="card-links-container">
                        <Link className="card-link" target="_blank" to={codeBaseHref}>
                            Code Base
                        </Link>
                        <Link className="card-link" target="_blank" to={liveVersionHref}>
                            Live Version
                        </Link>
                    </div>
                    <div className="card-techstack">
                        {techStack.map(icon => techIcons[icon].apply())}
                    </div>
                </div>            
            </div>                 
        </div>
    )
}

export default Card