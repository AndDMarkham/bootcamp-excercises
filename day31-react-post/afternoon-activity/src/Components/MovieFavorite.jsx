import React from 'react';

export default class MovieFavorite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

           favorite: null

        };
    }

    componentDidMount = () => {
        fetch(`http://www.laravel.test:8080/api/movies/favorite?user_id=1&movie_id=${this.props.movie_id}`)
            .then(response => response.json())
            .then(json_data => {
                this.setState({
                    favorite: json_data.favorite
                })
            })

    }

    handleSubmit = (event) => { 
        event.preventDefault();

        fetch('http://www.laravel.test:8080/api/movies/favorite/toggle', {
           method: 'POST',
           headers: {
               'Content-type': 'application/json'
           },
           body: JSON.stringify({
            "movie_id": this.props.movie_id,
            "user_id": 1,
            }) 
        })
        .then(response => response.json())
            .then(json_data => {
                this.setState({
                    favorite: json_data.data.favorite
                })
            })
    }

    // handleTextChange = (event) => {
    //     this.setState({
    //         text: event.target.value
    //     })
    // }
    
    render() {
        
        let label = 'Favorite this movie';
        if (this.state.favorite) {
            label = 'Unfavorite this movie'
        }

        console.log(this.state.favorite)

        return (
            <>
                <p>
                    This is movie number {this.props.movie_id}
                </p>

                <form action="" onSubmit={this.handleSubmit}><button>{label}</button></form>
            </>    
        );
        
    }

}