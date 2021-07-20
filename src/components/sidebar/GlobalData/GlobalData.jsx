import "./index.css"
import millify from "millify"
import react from "react";

import global from "../../../assets/global.png";
import cases from "../../../assets/cases.png";
import recovered from "../../../assets/recovered.png"
import deaths from "../../../assets/deaths.png"

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
    return <div id="GlobalData">
      <div id="global-span">
        <img src={global} className="icon" alt="global" />
        <span className="global">Global</span>
      </div>

      <div id="cases">
        <img src={cases} className="icon" alt="cases" />
        <span className="text-span">Cases</span>
        <span className="text-span-2">{this.state.confirmed}</span>
      </div>

      <div id="recovered">
        <img src={recovered} style={{height: "35.25px"}} className="icon" alt="recovered" />
        <span className="recovered-text-span">recovered</span>
        <span className="recovered-text-span-2">{this.state.recovered}</span>
      </div>

      <div id="deaths">
        <img src={deaths} className="icon" alt="deaths" />
        <span className="text-span">deaths</span>
        <span className="text-span-2">{this.state.deaths}</span>
      </div>
    </div>
  }
}
