import "./index.css"
import TableScrollbar from 'react-table-scrollbar';

function CovidTable() {
  return (
    <TableScrollbar height="100vh">
      <table id="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Total Cases</th>
            <th>Total Recovered</th>
            <th>Total Deaths</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Country</td>
            <td>900</td>
            <td>200</td>
            <td>80</td>
          </tr>
        </tbody>
      </table>
    </TableScrollbar>
  )
}

export default CovidTable