import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function DoughnutChart({ chartData, percentage }) {

  const plugins = [{
    beforeDraw: function(chart) {
     var width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         var fontSize = (width / 160).toFixed(2)*2;
         ctx.font = fontSize + "em Arial";
         ctx.textBaseline = "top";
         var text = percentage + "%",
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2 - 5;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }]
  return <Doughnut data={chartData} plugins={plugins}  />;
}

export default DoughnutChart;
