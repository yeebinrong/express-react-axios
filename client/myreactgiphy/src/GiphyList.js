import React from 'react';
import axios from 'axios';

export default class GiphyList extends React.Component {
    imageArray = [];
    imageURLs = [];
    q = '';
    state = {
    q: '',
    a: []
    }

    handleChange = event => {
    this.setState({ q: event.target.value });
    this.q = event.target.value;
    }

    handleSubmit = event => {
    event.preventDefault();

//
    axios.get(`https://myreactgiphy.herokuapp.com/api/${this.q}/`)
        .then(res => {
            this.imageArray = res.data;
            this.imageURLs = [];
            this.imageURLs = this.imageArray.map((image) => {
                return <img key={image.images.fixed_height.url} src={image.images.fixed_height.url} alt=""/>;
            })
            this.setState({a: this.imageURLs});
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