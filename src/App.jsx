import './App.css';
import CovidTable from "./components/CovidTable/CovidTable"
import SideBar from './components/sidebar/sidebar';

function App() {
  return (
    <div>
      <SideBar />
      <CovidTable />
    </div>
  );
}

export default App;
