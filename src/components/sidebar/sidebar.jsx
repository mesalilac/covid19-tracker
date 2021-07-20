import "./index.css"
import GlobalData from "./GlobalData/GlobalData"

export default function SideBar() {

  return (
    <div id="sidebar">
      <div id="searchbar">
        <input type="text" placeholder="search"/>
      </div>
      <GlobalData />
    </div>
  )
}
