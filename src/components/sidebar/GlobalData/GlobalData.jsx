import "./index.css"
import millify from "millify"
import react from "react";

export default class SideBar extends react.Component {
  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0
  }

  async componentDidMount() {
    const url = "https://covid19.mathdro.id/api"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      confirmed: millify(data.confirmed.value),
      recovered: millify(data.recovered.value),
      deaths: millify(data.deaths.value)
    })
  }

  render() {
    return <>
    <p>{this.state.confirmed}</p>
    <p>{this.state.recovered}</p>
    <p>{this.state.deaths}</p>
    </>
  }
}
