import React from 'react';
import '../Dashboard/Dashboard.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

var Highcharts = require('highcharts');


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table: {
                minWidth: 650,
            },
            table_cont: {
                boxShadow: `none`,
            },
            tableData: [],
            series: [],
            activeChart: "active",
            activeTable: ""
        }
        this.toggleTable = this.toggleTable.bind(this);
        this.toggleChart = this.toggleChart.bind(this);
    }
    toggleTable(a) {
        if (this.state.activeChart === 'active') {
            this.setState({ activeChart: "" });
            this.setState({ activeTable: "active" });
        }
    }
    toggleChart(e) {
        if (this.state.activeTable === 'active') {
            this.setState({ activeTable: "" });
            this.setState({ activeChart: "active" });
        }
    }
    render() {
        return (
            <div className="dashboard_cont">
                <h1>Welcome to Dashbaord!</h1>
                <div className="controls">
                    <FontAwesomeIcon icon={faTable} title="Chart View" onClick={this.toggleTable} />
                    <FontAwesomeIcon icon={faChartPie} title="Table View" onClick={this.toggleChart} />
                </div>
                <div id="demo" className={this.state.activeChart} style={this.state.showChart}></div>
                <TableContainer className={this.state.activeTable} component={Paper} style={this.state.table_cont}>
                    <Table style={this.state.table} className="table_cont" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>INS_ID</TableCell>
                                <TableCell align="right">Hour</TableCell>
                                <TableCell align="right">Sum Hourly</TableCell>
                                <TableCell align="right">Dom</TableCell>
                                <TableCell align="right">Dow</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.tableData.map((tableData, i) => (
                                <TableRow key={i}>
                                    <TableCell component="th" scope="row">
                                        {tableData.insid}
                                    </TableCell>
                                    <TableCell align="right">{tableData.hour}</TableCell>
                                    <TableCell align="right">{tableData.SumHourly}</TableCell>
                                    <TableCell align="right">{tableData.dom}</TableCell>
                                    <TableCell align="right">{tableData.dow}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
    componentDidMount() {
        let ele = document.getElementById('logout');
        ele.style = 'vivibility: visible';
        fetch('chartData.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ tableData: data });
            })
        fetch('chart.json')
            .then((res) => res.json())
            .then((data) => {
                this.setState({ series: data });
                this.highChartsRender();
            })
    }
    highChartsRender() {
        Highcharts.chart({
            chart: {
                type: 'pie',
                renderTo: 'demo'
            },
            title: {
                verticalAlign: 'middle',
                floating: true,
                text: 'DEMO Chart',
                style: {
                    fontSize: '16px',
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        format: '{point.name}: {point.percentage:.1f} %'
                    },
                    innerSize: '65%'
                }
            },
            series: this.state.series
        });
    }
}

export default Dashboard;