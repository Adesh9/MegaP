import { PolarArea } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import { Chart, Tooltip, Title, ArcElement, Legend, LineElement, Filler, CategoryScale, PointElement, LinearScale } from 'chart.js';

Chart.register(
  Tooltip, Title, ArcElement, Legend, LineElement,
  Filler,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale
);

function OtherC() {
  const [chartData, setChartData] = useState({
    datasets: [
      {
        data: [],
        backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple']
      },
    ],
    labels: ['HUM', 'TEM', 'SMOKE', 'MOIS1', 'MOIS2']
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://megaproject-8529a-default-rtdb.firebaseio.com/Sensor.json');
        const data = await response.json();

        let arrSet1 = [];
        let arrSet2 = [];
        let arrSet3 = [];
        let arrSet4 = [];
        let arrSet5 = [];

        for (const [key, value] of Object.entries(data)) {
          arrSet1.push(value.Humidity);
          arrSet2.push(value.Temperature);
          arrSet3.push(value.SmokeValue);
          arrSet4.push(value.moisture1);
          arrSet5.push(value.moisture2);
        }

        const pipe1 = arrSet1[arrSet1.length - 1];
        const pipe2 = arrSet2[arrSet2.length - 1];
        const pipe3 = arrSet3[arrSet3.length - 1];
        const pipe4 = arrSet4[arrSet4.length - 1];
        const pipe5 = arrSet5[arrSet5.length - 1];

        setChartData({
          datasets: [
            {
              data: [pipe1, pipe2, pipe3, pipe4, pipe5],
              backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple']
            },
          ],
          labels: ['HUM', 'TEM', 'SMOKE', 'MOIS1', 'MOIS2']
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <PolarArea data={chartData} />
    </div>
  );
}

export default OtherC;
