import React from 'react';
import axios from 'axios';

const fetchDogs = (breed) => {
    return axios.get(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res => res)
        .catch(err => console.error('error'))
}

class App extends React.Component {
    constructor() {
        console.log("constructor ran");
        super();
        this.state = {
            doggos: [],
            breed: 'husky'
        }
        this.fetchDogs('husky')
    }

    componentDidMount() {
        fetchDogs(this.state.breed).then(res => {
            this.setState({ doggos: res.data.message });
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update');
    }

    searchDogs = dogName => {
        console.log('Search Dogs')
        fetchDogs(dogName).then(res => {
            this.setState({ doggos: res.data.message, breed: dogName });
        })
    }

    render() {
        return (
            <>
                <h1>My App</h1>
                <SearchForm searchDogs={this.searchDogs} />
                {this.state.doggos.map((dog, index) => (
                    <img width='200' src={dog} alt={dog}></img>))}
            </>
        )
    }
}
export default App