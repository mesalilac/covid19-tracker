import "./index.css"
import useFetch from "react-fetch-hook"
import millify from "millify"

function SideBar() {
  const {data} = useFetch("https://covid19.mathdro.id/api");
  
  const globalData = {
    "confirmed": millify(data?.confirmed.value, {lowercase: true}),
    "recovered": millify(data?.recovered.value, {lowercase: true}),
    "deaths": millify(data?.deaths.value, {lowercase: true})
  }
  
  return (
    <div id="sidebar">
      <div id="searchbar">
        <input type="text" placeholder="search"/>
      </div>
    </div>
  )
}

export default SideBar