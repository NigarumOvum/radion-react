import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import Radio from '../radio/Radio';

function GenderCollapsible() {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  return (
    <div> 
      <button
        style={{background: 'linear-gradient(#00DFD8, #007CF0)', color: 'white', border: "1px dashed purple",
        padding: '10px', marginBottom: '15px', opacity: '0.8', borderRadius: "50%"}}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Cerrar' : 'Expandir'}
      </button>
      <section {...getCollapseProps()}>
        <Radio/>
        </section>
    </div>
  )
}


export default GenderCollapsible;