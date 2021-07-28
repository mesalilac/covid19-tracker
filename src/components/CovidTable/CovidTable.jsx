import "./index.css"
import react from "react"
import millify from "millify"
import LoadingOverlay from "react-loading-overlay"
import TableScrollbar from 'react-table-scrollbar';

export default class CovidTable extends react.Component {
  state = {
    loading: true,
    CountriesData: [],
    CountriesNames: []
  }

  async componentDidMount() {
    const response = await fetch("https://covid19.mathdro.id/api/countries");
    const data = await response.json();
    let CountriesNames = []
    let CountriesData = []
    for (let i = 0; i < data.countries.length; i++)
      CountriesNames.push(data.countries[i].name)

    for (let i = 0; i < CountriesNames.length; i++) {
      const response = await fetch(`https://covid19.mathdro.id/api/countries/${CountriesNames[i]}`);
      const data = await response.json();
      
      let CountryName = CountriesNames[i]
      let confirmed = data.confirmed === undefined ? 0 : millify(data.confirmed.value)
      let recovered = data.recovered === undefined ? 0 : millify(data.recovered.value)
      let deaths = data.deaths === undefined ? 0 : millify(data.deaths.value) 

      CountriesData.push({
        index: i+1,
        name: CountryName,
        confirmed: confirmed,
        recovered: recovered,
        deaths: deaths 
      })

      if (i === 5) {
        break
      }
    }
    this.setState({
      loading: false,
      CountriesData: CountriesData,
      CountriesNames: CountriesNames
    })
  }

  render() {
    let data
    if (this.state.loading === true) {
      data = <tr>
          <td>1</td>
          <td>loading</td>
          <td>loading</td>
          <td>loading</td>
          <td>loading</td>
        </tr>
    } else {
      data = this.state.CountriesData.map((data) => {
        return <tr key={data.index}>
          <td>{data.index}</td>
          <td>{data.name}</td>
          <td>{data.confirmed}</td>
          <td>{data.recovered}</td>
          <td>{data.deaths}</td>
        </tr>
      })
    }

    return <LoadingOverlay active={this.state.loading} spinner text='Loading...'>
      <TableScrollbar height="100vh">
          <table id="data-table">
            <thead>
              <tr>
                <th>#</th>
                <th id="Country-th">Country</th>
                <th id="Cases-th">Total Cases</th>
                <th id="Recovered-th">Total Recovered</th>
                <th id="Deaths-th">Total Deaths</th>
              </tr>
            </thead>
            <tbody>
              {data}
            </tbody>
          </table>
        </TableScrollbar>
      </LoadingOverlay>
  }
}
