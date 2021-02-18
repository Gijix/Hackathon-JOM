import React from "react";
import axios from "axios";

export default class AppelAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: [],
    };
  }

  // arrayFilter(){
  //
  // }

  componentDidMount() {
    axios
      .get("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => this.setState({ character: res.data }));
  }

  render() {
    return <div>Hello world</div>;
  }
}
