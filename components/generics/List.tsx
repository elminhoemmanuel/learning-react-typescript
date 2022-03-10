import React from 'react'

interface ListProps<T>  {
    items:T[],
    onClick:(value:T) =>void
}

const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
        <h2>List of Items</h2>

        {
            items.map((item, i) =>{
                return (
                    <div key={i} onClick={()=>onClick(item)}>
                        {item}
                    </div>
                )
            })
        }
    </div>
  )
}

export default List