import React, { Component } from 'react'
import { Consumer } from '../Context'

class SingleRoom extends Component {
    state = {
        storeSlug: this.props.match.params.slug
    }
    render() {

        return <Consumer>
            {(value) => {
                const getRoom = value.getRoom;
                const got = getRoom(this.state.storeSlug);
                console.log(got)
                if (!got) {
                    return
                }
                return (
                    <div>
                        <h2>{got.fields.name}</h2>
                    </div>
                )

            }}
        </Consumer>
    }
}
export default SingleRoom