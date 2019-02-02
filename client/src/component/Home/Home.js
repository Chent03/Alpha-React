import React, { Component, Fragment } from 'react';
import { Button, Icon, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchMovie } from '../../store/actions';
import './Home.scss';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                search: ''
            },
            errors: {
                search: ''
            }
        }
    }

    handleInput = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.validate()) {
            this.props.fetchMovie(this.state.fields.search)
            this.setState({value: ''})
            this.props.history.push(`/movie/${this.state.value}`)
        }
        
    }

    validate = () => {
        let fields =  this.state.fields;
        let errors = {};
        let isValid = true;
        if(!fields.search) {
            isValid = false;
            errors['search'] = "Please enter a movie"
        }
        this.setState({errors})
        return isValid;
    }

    renderContent = () => {
        return (
            <form id="searchContainer" onSubmit={this.handleSubmit}>
                <div id="searchForm">
                <Input
                error={!!this.state.errors.search}
                type="text"
                name="search"
                placeholder="Please Enter a Move Title" 
                onChange={this.handleInput}
                value={this.state.fields.search}
                />
                <Button icon type="submit">
                    <Icon name="sistrix"/>
                </Button>
                </div>
               
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