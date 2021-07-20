import "./index.css"
import API from "../../api"

const api = new API()

function SideBar() {
  return (
    <div id="sidebar">
      <div id="searchbar">
        <input type="text" placeholder="search"/>
      </div>
    </div>
  )
}

export default SideBar