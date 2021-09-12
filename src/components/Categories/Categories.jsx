import React from 'react'

const Categories = ({items}) => {
    return (
        <div className="categories">
        <ul style={{display:'flex'}} className='list-group'>
          <li
            className='list-group-item'
          >
            Все
          </li>
          {items &&
            items.map((name, index) => (
              <li
                style={{cursor:'pointer'}}
                className='list-group-item'
                key={`${name}_${index}`}>
                {name}
              </li>
            ))}
        </ul>
      </div>
    );
}

export default Categories