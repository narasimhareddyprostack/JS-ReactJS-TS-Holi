import React from "react";
class Movie extends React.Component{
    movie_Name="Durandhar2";
    actor_Name="Ranveer Singh"
    render(){
        return <div>
                <h4>Movie component</h4>
                <h2>Movie Name:{this.movie_Name}</h2>
                <h2>ACtor Name:{this.actor_Name}</h2>
                </div>
    }
}
export default Movie;