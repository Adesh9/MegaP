import React from 'react';
import './Visualize.css';
import { useEffect,useState } from 'react';
import axios from 'axios';

import {
    Chart as Chartjs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Bar} from 'react-chartjs-2';

Chartjs.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);


//start

const options ={
    indexAxis:'x',
    element:{
        bar:{
            borderWidth:17,
        },
    },
    responsive:true,
    plugins:{
        legend:{
            position:'bottom',
        },
        title: {
            display: true,
            text:'Chart.Js Bar Chart',
            size:'170px',
        },
    },
};


const Visualize = () => {
   const [data,setData] = useState({
     labels :  [],
    datasets :[
        {
            label:'Dataset 1',
            data:[],
            borderColor:'rgb(255,99,132)',
            backgroundColor:'rgba(255,99,132,0.5)',
        },
        {
            label:'Dataset 2',
            data:[],
            borderColor:'rgb(55,160,235)',
            backgroundColor:'rgba(55,160,235,0.5)',
        },
        {
          label:'Dataset 3',
          data:[],
          borderColor:'rgb(15,130,225)',
          backgroundColor:'rgba(215,330,235,0.5)',
      },
      {
        label:'Dataset 4',
        data:[],
        borderColor:'rgb(25,110,135)',
        backgroundColor:'rgb(25,110,135)',
      },
      {
      label:'Dataset 5',
      data:[1,2,3,4,5],
      borderColor:'rgb(55,160,235)',
      backgroundColor:'rgba(55,160,235,0.5)',
      },

        
    ],
   });
  
  
  
   useEffect(() =>{
    
    const fetchData = async () =>{
    const url = 'https://megaproject-8529a-default-rtdb.firebaseio.com/Sensor.json'
    // const url ='https://dummyjson.com/products'
    
    let dataSet1 =[];
    let dataSet2 =[];
    let dataSet3 =[];
    let dataSet4 =[];
    let dataSet5 =[];

    await fetch(url ,{
        // method:'GET'
    }).then(data =>{
       console.log('api data',data)
       const res =  data.json();
       return res
    }).then((res) =>{
      
      // console.log("ressss",res)
      for (const [key, value] of Object.entries(res)) {
        
        var data1 = {
          Humidity:value.Humidity,
        }
        var data2 ={
          Temperature:value.Temperature,
        }
        var data3 ={
          SmokeValue:value.SmokeValue,
        }
        var data4 ={
          moisture1: value.moisture1,
        }
        var data5 ={
          moisture2: value.moisture2,
        }
      
        dataSet1.push(data1);
        dataSet2.push(data2);
        dataSet3.push(data3);
        dataSet4.push(data4);
        dataSet5.push(data5);
      }

   setData({
    labels :  [],
    datasets :[
        {
            label:'Humidity',
            data:dataSet1[dataSet1.length-1],
            borderColor:'indigo',
            backgroundColor:'indigo',
        },
        {
            label:'Temperatue',
            data:dataSet2[dataSet2.length-1],
            borderColor:'orange',
            backgroundColor:'orange',
        },
        {
        label:'SmokeValue',
        data:dataSet3[dataSet3.length-1],
        borderColor:'cyan',
        backgroundColor:'cyan',
        },
        {
          label:'Mosture1',
          data:dataSet4[dataSet4.length-1],
          borderColor:'maroon',
          backgroundColor:'maroon',
        },
        {
        label:'Mosture2',
        data:dataSet5[dataSet5.length-1],
        borderColor:'purple',
        backgroundColor:'purple',
      },
        
    ],
   },3000)
   

      console.log("arrdata" , dataSet1,dataSet2,dataSet3,dataSet4,dataSet5)
      
    })
    .catch(e => {
      console.log("error",e)
    })
    
    }
    let timerId = setInterval(() =>{
      fetchData();
     },2000);
 
     return () =>{
      clearInterval(timerId);
    };

    // fetchData();
  },[])

  return (
   
     <div className='volt1'>
      
      <Bar  data={data} options={options} ></Bar>
      {/* <Pie data={data} options={options} ></Pie> */}
     </div>
    
  )
  }

export default Visualize;
