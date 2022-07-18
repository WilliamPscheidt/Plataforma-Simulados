import React from "react";
import Chart from "react-apexcharts";
import '../../../Style/Master-Dash/Master-Dash.css'

export default class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [{
            name: "Pontos",
            data: [props.pontuacao0, props.pontuacao1, props.pontuacao2, props.pontuacao3, props.pontuacao4, props.pontuacao5, props.pontuacao6, props.pontuacao7],
          }],
          options: {
            fill: {
              colors: ['#00D8B6']
            },
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 0,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: [props.ranking0, props.ranking1, props.ranking2, props.ranking3, props.ranking4, props.ranking5, props.ranking6, props.ranking7],
            }
          },
        
        
        };
      }

  render() {
    return (
            <Chart className="div-grafico d-flex align-items-center justify-content-center"
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height="220px"
            />
    );
  }
}