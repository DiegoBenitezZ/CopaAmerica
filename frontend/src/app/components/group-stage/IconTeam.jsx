import React from 'react'
import '../../../assets/css/common/icon-team.css'
import { useDraggable } from '@dnd-kit/core'

function IconTeam({countryId, countryFileName = '../utils/circle.svg', countryName = ''}) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id: `draggable-${countryName.toLowerCase()}`,
    data: {
      type: 'icon-flag',
      countryId: countryId,
    }
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <img id={`draggable-${countryName.toLowerCase()}`} ref={setNodeRef} style={style} {...listeners} {...attributes} className='icon-team' src={`/img/countries/${countryFileName}`} alt={`${countryName} Flag`} />
  )
}

export default IconTeam