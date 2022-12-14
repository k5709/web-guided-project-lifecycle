import React from 'react'

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }
    render() {
        return (
            <>
                <input placeholder="breed" value={this.state.inputValue} onChange={(e) => this.setState({ inputValue: e.target.value })} />
                <button onClick={() => this.props.seachDogs(this.state.inputValue)}></button>
            </>
        )
    }
}
export default SearchForm