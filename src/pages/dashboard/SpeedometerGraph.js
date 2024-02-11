import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const Speedometer = ({ label, value, high, optimal, low }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy(); // Destroy the previous chart instance
    }

    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: [label],
        datasets: [{
          data: [value, high - value],
          backgroundColor: ["#FF6384", "#e3e3e3"],
        }],
      },
      options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI,
        cutoutPercentage: 90,
        legend: { display: false },
        tooltips: { enabled: false },
        elements: {
          arc: {
            borderWidth: 0,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy(); // Clean up the chart instance on unmount
      }
    };
  }, [label, value, high, optimal, low]);

  return <canvas ref={canvasRef} />;
};

export default Speedometer;
