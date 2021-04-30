import React, { Component } from "react";
import auth from "../../services/authService";
import pic from "../images/pic.jpg";
import { getMovies } from "./../../services/movieService";

class User extends Component {
  state = {
    movies: [],
  };
  handleClick = () => {
    this.props.history.push("/movies");
  };

  async componentDidMount() {
    const { data: movies } = await getMovies();
    this.setState({ movies: movies });
  }

  render() {
    const user = auth.getCurrentUser();
    const image =
      "https://www.cashadvance6online.com/data/archive/img/1125620197.jpeg";
    // console.log(this.state.movies);
    // const allMovies = { ...this.state.movies };
    // const likedMovies = this.state.movies.filter((movie) => movie.liked);
    // console.log(likedMovies);
    return (
      <React.Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">{user.email}</p>
          </div>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ marginTop: "10px" }}
          onClick={this.handleClick}
        >
          Back
        </button>
        {/* <ul className="list-group">
          {this.state.movies.map((item) => (
            <li key={item._id} className="list-group-item">
              {item.title}
            </li>
          ))}
        </ul> */}
      </React.Fragment>
    );
  }
}

export default User;
