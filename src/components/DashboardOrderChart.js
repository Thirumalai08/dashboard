import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class DashboardOrderChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
            series: [44, 55, 41],
            options: {
              chart: {
                id: 'chart-example',
              },
              fill:{
                colors: ['#FF6D4C', '#2BC155', '#3E4954']
              },
              dataLabels:{
                  enabled: false
              },
              legend: { show:false },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  /*legend: {
                    position: 'left',
                    offsetY: 0,
                    height: 230
                  }*/
                }
              }]
            }
          
          
          };
    }
    render() {
        return(
            <Chart 
            options={this.state.options} 
            series={this.state.series} 
            type="donut"
            //width={400}
            //height={220}
            />
        )
    }
}
export default DashboardOrderChart