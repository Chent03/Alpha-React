import React, { Component, Fragment } from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchMovie } from '../../store/actions';
import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            showPoster: false
        }
    }

    handleInput = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.fetchMovie(this.state.value)
        this.props.history.push(`/movie/${this.state.value}`)
        this.setState({value: ''})
    }

    renderContent = () => {
        return (
            <form id="searchForm" onSubmit={this.handleSubmit}>
                <Input
                    type="text"
                    name="search"
                    placeholder="Please Enter a Move Title" 
                    onChange={this.handleInput}
                    value={this.state.value}
                />
                <Button icon type="submit">
                    <Icon name="sistrix"/>
                </Button>
            </form>
        )
    }

    render() {
        return(
            <Fragment>
                {this.renderContent()}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { movie } = state.imdb
    return {
        movie
    }
}

export default connect(mapStateToProps, {fetchMovie})(Home);