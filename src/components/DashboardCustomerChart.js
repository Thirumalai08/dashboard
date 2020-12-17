import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class DashboardCustomerChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            series:[{
                data: [
                    400, 430, 448, 470, 540, 580, 690, 1100, 1200, 
                    1380,400, 430, 448, 470, 540, 580, 690, 1100,
                    448, 470, 540, 580, 690, 1100,1380,400, 430
                    ] // 27
            }],
            options:{
                chart:{
                    id:'chart-example',
                    toolbar: {show:false}
                },
                dataLabels:{enabled:false},
                xaxis:{
                    type: 'number',
                    categories: [4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
                },
                fill:{
                    colors: ["#2F4CDD"]
                },
                plotOptions: {
                    //columnWidth: '10%',
                    barHeight: '20%'
                }
            }
        }
    }
    render(){
        return(
            <div>
                <Chart 
                options={this.state.options}
                series={this.state.series}
                type="bar"
                height={180}
                />
            </div>
        )
    }
}
export default DashboardCustomerChart