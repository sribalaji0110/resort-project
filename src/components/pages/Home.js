import React from 'react';
import '../../App.css'
import { Consumer } from '../Context';
import Loading from './Loading';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <React.Fragment>
            <Consumer>
                {(value) => {
                    if (!value.loading) {
                        const FeatureRooms = value.FeatureRooms
                        return (
                            <div className="container">
                                <h5>Featured Rooms </h5>
                                {FeatureRooms.map(room => {
                                    return (
                                        <article key={room.id} className="room">
                                            <div className="img-container">
                                                <img alt="feature_img" src={room.images[0]}></img>
                                                <div className="price-top">
                                                    <h6>${room.price}</h6>
                                                    <p>per night</p>
                                                    <Link to={`/rooms/${room.fields.slug}`} className="btn-primary room-link">
                                                        Features
                                                 </Link>
                                                    <p className="room-info">{room.fields.name}</p>
                                                </div>
                                            </div>

                                        </article>
                                    )
                                })}
                            </div>
                        )
                    } else {
                        return <Loading></Loading>
                    }
                }}
            </Consumer>
        </React.Fragment>
    )
}
