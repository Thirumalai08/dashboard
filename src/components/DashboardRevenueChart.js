import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class DashboardRevenueChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            series:[{
                name: 'Income',
                data: [31, 40, 28, 51, 42, 109, 100]
            },{
                name: 'Expense',
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options:{
                chart:{ 
                    id: 'chart-example',
                    toolbar: { show:false } 
                },
                dataLabels: { enabled: false },
                stroke: { 
                    curve: 'smooth',
                    colors: ["#2F4CDD","#B519EC"] 
                },
                xaxis: {
                    type: 'month',
                    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Sep","Oct","Nov","Dec"]
                },
                yaxis: {
                    type: 'rupees',
                    categories:["200k","400k","600k","800k","1000k"]
                },
                fill:{
                    colors: ["#2F4CDD","#B519EC"]
                },
                legend:{
                    position:'top',
                    horizontalAlign:'left',
                    labels:{
                        colors: ["#2F4CDD","#B519EC"],
                        useSeriesColors: true
                    }
                }
            }
        };
    }
    render(){
        return(
            <div>
                <Chart 
                options={this.state.options} 
                series={this.state.series} 
                type="area" 
                height={425}
                />
            </div>
        )
    }
}
export default DashboardRevenueChart