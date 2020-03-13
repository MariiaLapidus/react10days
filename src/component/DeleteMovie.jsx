import React, {Component} from 'react';

const DeleteMovie = props => {
    console.log(props)

        return (
            <div>
                <button
                    type="button"
                    className= "btn btn-secondary"
                    onClick={props.removeMovie.bind(null, props.movie)}


                >Delete movie</button>
            </div>
        );

}

export default DeleteMovie;