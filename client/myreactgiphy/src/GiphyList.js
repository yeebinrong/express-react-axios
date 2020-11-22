import React from 'react';
import axios from 'axios';

export default class GiphyList extends React.Component {
    imageArray = [];
    imageURLs = [];
    state = {
    q: '',
    a: []
    }

    handleChange = event => {
    this.setState({ q: event.target.value });
    }

    handleSubmit = event => {
    event.preventDefault();

    const q = {
        q: this.state.q
    };

    axios.get(`https://myreactgiphy.herokuapp.com/api/q`, { q })
        .then(res => {
            this.imageArray = res.data;
            console.log(this.imageArray);
            this.imageURLs = this.imageArray.map((image) => {
                return <img src={image.images.fixed_height.url} alt=""/>;
            })
            this.setState({a: this.imageURLs});
            console.log("images url is " + this.imageURLs);
        })

    }

    render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Search Query:
                <input type="text" name="q" onChange={this.handleChange} />
                </label>
                <button type="submit">Add</button>
            </form>
            <div>
                {this.imageURLs}
            </div>
        </div>
    )}
}