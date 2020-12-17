import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class AnalyticsOrderChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            series:[{ data: [31, 40, 28, 51, 42, 109, 100,31, 40, 28, 51, 42] }],
            options:{
                chart:{
                    id: 'chart-example',
                    toolbar: {show:false}
                },
                dataLabels: {enabled: false},
                stroke: {
                    curve: 'smooth',
                    colors: ['#2f4cdd']
                },
                xaxis:{
                    type: 'month',
                    categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Sep","Oct","Nov","Dec"]
                },
                fill:{
                    colors: ['#2f4cdd']
                },
                legend:{ show: false }
            }
        }
    }
    render(){
        return(
            <Chart 
            options={this.state.options}
            series={this.state.series}
            type="area"
            height="250"
            />
        )
    }
}
export default AnalyticsOrderChart