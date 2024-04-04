import React from 'react'
import './Dropdown.css'
const Dropdown = ({ data, setDifficultyChange }) => {
    return (
        <div className='dropdown'>
            <select name="" id="" onChange={(e) => setDifficultyChange ? setDifficultyChange(e.target.value) : setDifficultyChange("easy")}>
                {data.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>

        </div>
    )
}

export default Dropdown
