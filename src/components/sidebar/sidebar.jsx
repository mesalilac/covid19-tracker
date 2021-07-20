import "./index.css"
import useFetch from "react-fetch-hook"

function SideBar() {
  const {data} = useFetch("https://covid19.mathdro.id/api");
  
  return (
    <div id="sidebar">
      <div id="searchbar">
        <input type="text" placeholder="search"/>
      </div>
    </div>
  )
}

export default SideBar