import React, { Component } from "react";
import SearchInput, { createFilter } from "react-search-input";

const KEYS_TO_FILTERS = ["title", "artist", "album"];

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  render() {
    const filteredMusic = this.state.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS)
    );

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        {filteredMusic.map((song) => {
          return (
            <div className="mail" key={song.id}>
              <div className="from">{song.title}</div>
              <div className="subject">{song.artist}</div>
            </div>
          );
        })}
      </div>
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term });
  }
}
SearchBar;
