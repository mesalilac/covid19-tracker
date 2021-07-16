import './App.css';
import MainList from "./components/mainList/MainList"
import SideBar from './components/sidebar/sidebar';

function App() {
  return (
    <div id="app">
      <SideBar />
      <MainList />
    </div>
  );
}

export default App;
