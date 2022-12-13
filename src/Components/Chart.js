/* eslint-disable react-hooks/exhaustive-deps */
// import axios from 'axios';
// import React,{useState,useEffect} from 'react'
import { Bar, Line } from 'react-chartjs-2';
import styles from './Chart.module.css';
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,PointElement,LineElement,TimeScale,Title,Tooltip,Legend} from 'chart.js'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
);

const Chart = ({dailyData,country}) => {

  const barChart = (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [dailyData.stats.totalConfirmedCases,dailyData.stats.totalRecoveredCases ,dailyData.stats.totalDeaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
  );

      const lineChart = (
        dailyData.stats.length!=0?(
        <Line
            data={{
              labels: dailyData.stats.history.map((date) => new Date(date.date).toLocaleDateString()),
              datasets: [{
                data: dailyData.stats.history.map((data) => data.confirmed),
                label: 'Infected',
                tension: 0.1,
                borderColor: '#3333ff',
                fill: true,
            }, {
                data: dailyData.stats.history.map((data) => data.deaths),
                label: 'Deaths',
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                tension: 0.1,
                fill: true,
            },{
              data: dailyData.stats.history.map((data) => data.recovered),
              label: 'Recovered',
              borderColor: 'green',
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
              fill: true,
            },
              ],
            }}
            />):null
            );
      return (
        <div className={styles.container}>
          {lineChart}
          {barChart}
        </div>
      );
    };

export default Chart