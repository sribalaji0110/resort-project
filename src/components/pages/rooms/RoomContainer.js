import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { Consumer } from '../../Context'

const RoomContainer = () => {
    return (
        <Consumer>
            {(value) => {
                const {Rooms,sortedRooms}=value;
                return (
                    <React.Fragment>
                        <RoomFilter rooms={Rooms}></RoomFilter>
                        <RoomList rooms={sortedRooms}></RoomList>
                    </React.Fragment>
                )
            }}

        </Consumer>
    )
}


export default RoomContainer