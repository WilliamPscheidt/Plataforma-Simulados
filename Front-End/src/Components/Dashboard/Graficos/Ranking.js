import React from "react";
import Chart from "react-apexcharts";
import '../../../Style/Master-Dash/Master-Dash.css'

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [props.mediaA, props.mediaB, props.mediaC],
      options: {
        chart: {
          width: 380,
          type: 'polarArea'
        },
        labels: ["Fácil", "Moderado", "Difícil"],
        fill: {
          opacity: 1,
          colors: ['#00D8B6', '#4AF7DD', '#00F5D0']
        },
        stroke: {
          width: 4,
          colors: ['#fff']
        },
        yaxis: {
          show: false
        },
        legend: {
          position: 'left'
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            },
          }
        },
        theme: {
          monochrome: {
            enabled: true,
            color: "#00D8B6",
            shadeTo: 'light',
            shadeIntensity: 0.6
          }
        }
      },
    };
  }

  render() {
    return (
      <Chart className="div-grafico d-flex align-items-center justify-content-center"
        options={this.state.options} series={this.state.series} type="polarArea" height={220}
      />
    );
  }
}