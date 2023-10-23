import React from 'react'

const List = () => {
    const data = [
{
    name:"first"
},
{
    name:"sec"
},
{
    name:"third"
},
    ];
    const itemList = data.map(( item,i)=> <h3>{item.name}</h3>);
    
  return (
    <div>
      {itemList}

      {data.map((item,i) => <h2>{item.name}</h2>)}
    </div>
  )
};

export default List