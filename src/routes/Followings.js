import React, { Component } from 'react';
import FollowingPage from '../components/Followings/FollowingPage'
import axios from 'axios'
import Nav1 from '../components/Nav1'

class Followings extends Component {
    state = {}

    componentDidMount() {
        this._after()
    }

    _forFetching = () => {
        return axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.data)
    }

    _after = async () => {
        const data = await this._forFetching()
        this.setState ({
            data
        })
    }
    
    render() {
        return (
            <div>
            <Nav1 />
             <FollowingPage lists = {this.state.data ? this.state.data : 'Loading...'}/>
            </div>
        );
    }
}

export default Followings;
