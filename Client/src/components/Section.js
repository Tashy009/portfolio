import React from 'react'
import './Section.css'


const Section = ({id, isDark, isRed, childComponent}) => {
    return (
        <section className={`section ${isDark ? "dark" : ""} ${isRed ? "red" : ""}`} id={id}>
            {childComponent}
        </section>
    )
}

export default Section