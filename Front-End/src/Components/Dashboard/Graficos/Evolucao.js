import React from "react";
import Chart from "react-apexcharts";
import '../../../Style/Master-Dash/Master-Dash.css'

export default class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    const evolucao0 = props.evolucao0;
    const evolucao1 = props.evolucao1;
    const evolucao2 = props.evolucao2;
    const evolucao3 = props.evolucao3;
    const evolucao4 = props.evolucao4;
    const evolucao5 = props.evolucao5;
    const evolucao6 = props.evolucao6;
    const evolucao7 = props.evolucao7;
    const evolucao8 = props.evolucao8;
    const evolucao9 = props.evolucao9;

    this.state = {
      options: {
        fill: {
          colors: ['#00D8B6', '#008FFB', '#FEB019']
        },
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10"
          ]
        },
      },
      series: [
        {
          name: "Acertos",
          data: [evolucao0, evolucao1, evolucao2, evolucao3, evolucao4, evolucao5, evolucao6, evolucao7, evolucao8, evolucao9]
        }
      ]
    }
  }

  render() {
    return (
      <>
        <Chart className="div-grafico d-flex align-items-center justify-content-center"
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="100%"
          height="210px"
        />
      </>
    );
  }
}