import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chartjs-adapter-luxon'; // Import the Luxon adapter

Chart.register(ChartDataLabels);

const SensorLineChart = ({ sensorData }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);
  const [liveUpdate, setLiveUpdate] = useState(false);

  useEffect(() => {
    if (sensorData && sensorData.length > 0) {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }

      const dates = sensorData.map(entry => entry.date);
      const temperatureData = sensorData.map(entry => entry.temperature);
      const humidityData = sensorData.map(entry => entry.humidity);
      const co2Data = sensorData.map(entry => entry.co2);
      const uvData = sensorData.map(entry => entry.uv);

      chartInstance.current = new Chart(chartContainer.current, {
        type: 'line',
        data: {
          labels: dates,
          datasets: [
            {
              label: 'Temperature',
              data: temperatureData,
              borderColor: 'red',
              fill: false,
            },
            {
              label: 'Humidity',
              data: humidityData,
              borderColor: 'blue',
              fill: false,
            },
            {
              label: 'CO2',
              data: co2Data,
              borderColor: 'green',
              fill: false,
            },
            {
              label: 'UV',
              data: uvData,
              borderColor: 'orange',
              fill: false,
            },
          ],
        },
        options: {
          // Chart options
          responsive: false, // Disable responsiveness
          maintainAspectRatio: false, // Disable aspect ratio
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day', // Set the time unit for the x-axis (date)
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current !== null) {
        chartInstance.current.destroy();
      }
    };
  }, [sensorData]);

  useEffect(() => {
    let intervalId;

    if (liveUpdate) {
      intervalId = setInterval(() => {
        // Fetch new sensor data here (simulate with random data for demonstration)
        const newSensorData = generateRandomSensorData();

        // Update the chart with the new data
        updateChart(newSensorData);
      }, 5000); // Update every 5 seconds (adjust interval as needed)
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [liveUpdate]);

  const updateChart = newData => {
    if (chartInstance.current) { // Check if chartInstance.current is not null or undefined
      const dates = newData.map(entry => entry.date);
      const temperatureData = newData.map(entry => entry.temperature);
      const humidityData = newData.map(entry => entry.humidity);
      const co2Data = newData.map(entry => entry.co2);
      const uvData = newData.map(entry => entry.uv);
  
      chartInstance.current.data.labels = dates;
      chartInstance.current.data.datasets[0].data = temperatureData;
      chartInstance.current.data.datasets[1].data = humidityData;
      chartInstance.current.data.datasets[2].data = co2Data;
      chartInstance.current.data.datasets[3].data = uvData;
  
      chartInstance.current.update();
    }
  };
  

  const toggleLiveUpdate = () => {
    setLiveUpdate(!liveUpdate);
  };

  const generateRandomSensorData = () => {
    // Generate random data for demonstration purposes
    const newData = [];
    const now = new Date();

    for (let i = 0; i < 7; i++) {
      newData.push({
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + i),
        temperature: Math.random() * 100,
        humidity: Math.random() * 100,
        co2: Math.random() * 100,
        uv: Math.random() * 100,
      });
    }

    return newData;
  };

  return (
    <Card style={{ width: '1000px', margin:"50px" }}>
     
      <CardContent>
      <button  variant="contained" onClick={toggleLiveUpdate} style={{ top: 0, right: 1, margin: '10px' }}>
          {liveUpdate ? 'Stop Live Update' : 'Start Live Update'}
        </button>
        <canvas ref={chartContainer} width="1040" height="400" />
      
      </CardContent>
      
    </Card>
  );
};

export default SensorLineChart;
