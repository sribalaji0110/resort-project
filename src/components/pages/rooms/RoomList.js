import React from 'react'

export default function RoomList({rooms}) {
    if(rooms.length === 0){
        return <p>no match rooms found</p>
    }
    return (
        <div className="overall_lisg">
           {rooms.map(list=>{
               return (
                   <div key={list.id} className="room-list">
                    <img src={list.images[0]} alt="list"></img>
                    <h2>{list.fields.name}</h2>
                       </div>
               )
           })}
        </div>
    )
}
