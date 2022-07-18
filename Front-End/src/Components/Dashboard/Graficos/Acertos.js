import React from "react";
import Chart from "react-apexcharts";
import '../../../Style/Master-Dash/Master-Dash.css'

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [props.acertosA, props.acertosB, props.acertosC],
      options: {
        fill: {
          colors: ['#00D8B6', '#4AF7DD', '#00F5D0']
        },
        chart: {
          width: 380,
          type: 'donut',
        },
        labels: ['Fácil', 'Moderado', 'Difícil'],
        colors: ['#00D8B6', '#4AF7DD', '#00F5D0'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },


    };
  }


  render() {
    return (
      <Chart className="div-grafico d-flex align-items-center justify-content-center"
        options={this.state.options}
        series={this.state.series}
        type="donut"
        width="100%"
        height="210px"
      />
    );
  }
}