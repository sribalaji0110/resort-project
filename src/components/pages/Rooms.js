import React from 'react'
import '../../App.css'
import RoomContainer from './rooms/RoomContainer'
export const Rooms = (props) => {
 
    return (
        <div className="container">
            <h1>ROOMS</h1>
            <RoomContainer></RoomContainer>
        </div>
    )
}
