import React from 'react'
import { countries } from '../../../assets/data/countries' 
import { useDroppable } from '@dnd-kit/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function GroupPositionItem({groupId, countrySelectedId, positionNumber, removeElement}) {
    let country = (countrySelectedId != undefined) && countries.find((country) => country.id == countrySelectedId);
    let img = (country) ? `/img/countries/${country.filename}` : `/img/utils/circle.svg`;
    const {isOver, setNodeRef} = useDroppable({
        id: `droppable-${groupId}-${positionNumber}`,
        data: {
            accepts: ['icon-flag'],
            positionId: positionNumber-1,
            countrySelectedId: countrySelectedId,
            groupId: groupId,
        }
    });
    const style = {
        backgroundColor: isOver ? '#E6E6E6' : undefined,
    };

    return (
        <li id={`droppable-${groupId}-${positionNumber}`} ref={setNodeRef} style={style} className='group-card-item'>
            <span>{positionNumber}</span>
            <img className='icon-team' src={img} alt="" />
            <span>{country.name}</span>
            <button onClick={(e) => removeElement(e, groupId, positionNumber-1)} className='close-btn'><FontAwesomeIcon icon="fa-solid fa-xmark"/></button>
        </li>
    )
}

export default GroupPositionItem