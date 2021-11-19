import React, { Component } from "react";
import AddSong from "./AddSong";
import axios from "axios";
import MusicTable from "./MusicTable/MusicTable";

class App extends Component {
  constructor(props) {
    super(props);
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

  render() {
    console.log(this.state);
    return (
      <div>
        <MusicTable music={this.state.music} />
        <AddSong addNewSong={this.addNewSong} />
      </div>
    );
  }
}
//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         <h2>Music Library</h2>
//         <MusicTable music={this.state.music} />
//         <AddSong addNewSong={this.addNewSong} />
//       </div>
//     );
//   }
// }
export default App;
