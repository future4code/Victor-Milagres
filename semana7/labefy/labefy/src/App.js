import React from "react";
import style from 'styled-components'
import { RegisterPlaylist } from "./components/RegisterPlaylist";
import { PlaylistPage } from "./components/PlaylistPage";

const Header = style.header `
height: 80px;
`

export default class App extends React.Component {
  state = {
    page: true
  };
  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render(){
  return (
    <div className="App">
 
    </div>
    );
  }
}

