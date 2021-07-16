import "./index.css"

function MainList() {
    return (
        <div>
            <table id="data-table">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Total Cases</th>
                        <th>Total Recovered</th>
                        <th>Total Deaths</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Country</td>
                        <td>900</td>
                        <td>200</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>900</td>
                        <td>200</td>
                        <td>80</td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <td>900</td>
                        <td>200</td>
                        <td>80</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MainList