import React, { Component } from "react";
import AddSong from "./components/AddSong/AddSong";
import axios from "axios";
import MusicTable from "./components/MusicTable/MusicTable";
// import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      music: [],
    };
  }

  componentDidMount() {
    this.getMusic();
  }

  getMusic = async () => {
    let response = await axios.get("http://localhost:8000/music/");
    console.log(response.data.music);
    this.setState({
      music: response.data,
    });
  };

  addNewSong = (newSong) => {
    axios
      .post(`http://localhost:8000/music/`, newSong)
      .then((response) => console.log("Post", response));
    this.getMusic();
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  deleteSong = (song) => {
    axios
      .post(`http://localhost:8000/music/<int:pk>/`, song)
      .then((response) => console.log("Delete", response));
    this.getMusic();
  };

  render() {
    console.log(this.state);
    return (
      <div className="options">
        <MusicTable music={this.state.music} />
        {/* <SearchBar search={this.data} /> */}
        <AddSong addNewSong={this.addNewSong} />
      </div>
    );
  }
}

export default App;
