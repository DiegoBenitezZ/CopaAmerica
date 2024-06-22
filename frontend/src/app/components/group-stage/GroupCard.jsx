import React from 'react'
import IconTeam from './IconTeam'
import { countries } from '../../../assets/data/countries' 
import '../../../assets/css/group-stage/group-card.css'
import GroupPositionItem from './GroupPositionItem'
import {DndContext} from '@dnd-kit/core';

function GroupCard({group, tracker, changePositions}) {
    let currentDragged = undefined;

    const handleDragStart = (event) => {
        const {active} = event;
        currentDragged = active;
    }

    const handleDragEnd = (event) => {
        const {over} = event;

        if(over !== null && currentDragged !== null) {
            let containerDropped = document.getElementById(over.id);
            let elementDragged = document.getElementById(currentDragged.id);
            let {accepts} = over.data.current;
            let {type} = currentDragged.data.current;

            if(accepts != undefined && accepts.includes(type)){
                let {countryId} = currentDragged.data.current;
                let {countrySelectedId} = over.data.current;
                let {groupId} = over.data.current;
                let {positionId} = over.data.current;

                if(countrySelectedId === undefined){
                    containerDropped.setAttribute('el-target', currentDragged.id);
                    containerDropped.querySelector('.close-btn').style.display = "block";
                    elementDragged.style.display = "none";
                    changePositions(countryId, groupId, positionId);
                }
            }
        }
    }

    const handleRemovePosition = (event, groupId, positionId) => {
        let element = event.target;
        let positionContainer = element.closest('.group-card-item');
        let iconElement = document.getElementById(positionContainer.getAttribute('el-target'));

        iconElement.style.display = "block"
        changePositions(undefined, groupId, positionId);
        positionContainer.querySelector('.close-btn').style.display = "none";
    };
    
    return (
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} autoScroll={false}>
            <div className='group-card-container'>
                <div className="group-card-header bg-blue-gradient">
                    <span className='text-white'>{group.name}</span>
                    <span className='icon-tracker'>
                        {
                            group.members.map((countryId) =>{
                                let country = countries.find((country) => country.id == countryId);
                                return (
                                    <IconTeam key={country.id} countryId={country.id} countryFileName={country && country.filename} countryName={country && country.name}/>
                                )
                            })
                        }
                    </span>
                </div>
                <div className="group-card-body">
                    <ul className='group-card-list'>
                        <GroupPositionItem groupId={group.id} positionNumber={1} countrySelectedId={tracker[0]} removeElement={handleRemovePosition}/><hr/>
                        <GroupPositionItem groupId={group.id} positionNumber={2} countrySelectedId={tracker[1]} removeElement={handleRemovePosition}/><hr/>
                        <GroupPositionItem groupId={group.id} positionNumber={3} countrySelectedId={tracker[2]} removeElement={handleRemovePosition}/><hr/>
                        <GroupPositionItem groupId={group.id} positionNumber={4} countrySelectedId={tracker[3]} removeElement={handleRemovePosition}/>
                    </ul>
                </div>
            </div>
        </DndContext>
    )
}

export default GroupCard