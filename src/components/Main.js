import React, { Component } from 'react'
import { Provider } from './Context';
import items from '../data'

class Main extends Component {
    state = {
        MenuToggle: true,
        Rooms: [],
        FeatureRooms: [],
        loading: false,
        sortedRooms: [],
        type: "all"
    }
    handleChange = (event) => {
        const name = event.target.name;
        const type = event.target.type;
        const value = event.target.value;
        this.setState({
            [name]: value
        }, () => {
            this.filterroom();
        })

    }
    filterroom = () => {
        let { Rooms, type } = this.state;
        let temproom = [...Rooms];
        if (type !== "all") {
            temproom = temproom.filter(room => room.fields.type === type)
        }
        this.setState({
            sortedRooms: temproom
        },()=>{
            console.log(this.state)
        })
    }
    componentDidMount = () => {
        const getdata = this.formatData(items);
        const feature = getdata.filter(fil => {
            return fil.fields.featured === true
        })
        this.setState({
            Rooms: getdata,
            FeatureRooms: feature,
            sortedRooms: getdata,
            loading: false
        })
    }
    formatData = (items) => {
        const store = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(img => {
                return img.fields.file.url
            })
            return { ...item, id, images }
        })
        return store
    }
    getRoom = (slug) => {
        const room = [...this.state.Rooms]
        const store = room.find(fil => fil.fields.slug === slug)
        return store
    }
    handleChangeMenu = () => {
        this.setState({
            MenuToggle: !this.state.MenuToggle
        })
    }
    render() {
        return (
            <React.Fragment>
                <Provider value={{
                    ...this.state,
                    handleChangeMenu: this.handleChangeMenu,
                    getRoom: this.getRoom,
                    handleChange: this.handleChange
                }}>
                    {this.props.children}
                </Provider>
            </React.Fragment>

        )
    }
}
export default Main