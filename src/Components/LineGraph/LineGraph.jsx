import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS , Title,Tooltip,Legend,LineElement,LinearScale,Filler,CategoryScale, PointElement } from "chart.js";
import { useEffect } from "react";
import './LineGraph.css';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    Filler,
    CategoryScale,
    PointElement,
    LineElement,
    LinearScale
)
const options ={
  responsive:true,
  plugins:{
    legend:{
      position:'bottom'
    },
    title:{
      display:true,
      text:'Point Chart',
      size:'100px'
    }
  }
}

export default function LineGraph() {
    const [datas,setDatas] = useState({

        labels:["jan","feb","mar"],
        datasets:[
    {
        label:"line graph",
        data:[],
        backgroundColor:'yellow',
        borderColor:'red',
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'green',
        pointRadius:10,
        pointBackgroundColor:'black'
    }

]})

   

    useEffect(() =>{
     
      const fetchData = async () =>{
          
      const url ='https://megaproject-8529a-default-rtdb.firebaseio.com/Sensor.json'
        let arrSet1 = [];
        let arrSet2 = [];
        let arrSet3 = [];
        let arrSet4 = [];
        let arrSet5 = [];
        // const Ruby =[];
        // const York =[];
      
      await  fetch(url,{ method:'GET'})
      .then(data =>{
       console.log('fetchApi',data)
       const response = data.json();
       return response 
    })
    
    .then((response) =>{
       console.log(response)
       
       for(const [key , value] of Object.entries(response)){

         arrSet1.push(value.Humidity);
         arrSet2.push(value.Temperature);
         arrSet3.push(value.SmokeValue);
         arrSet4.push(value.moisture1);
         arrSet5.push(value.moisture2);
         const last3ArrSet1 = arrSet1.slice(-2);
         const last3ArrSet2 = arrSet2.slice(-2);
         const last3ArrSet3 = arrSet3.slice(-2);
         const last3ArrSet4 = arrSet4.slice(-2);
         const last3ArrSet5 = arrSet5.slice(-2);
        // Ruby = arrSet1.map(data => data.Humidity);
        setDatas({
           
          labels:[],
          datasets:[
      {
          label:["Humidity"],
          data:[last3ArrSet1 ],
          backgroundColor:'red',
          borderColor:'red',
          tension:0.4,
          fill:true,
          pointStyle:'rect',
          pointBorderColor:'green',
          pointRadius:10,
          pointBackgroundColor:'red'
        },{
          
            label:["Temperature"],
            data:[last3ArrSet2],
            backgroundColor:'green',
            borderColor:'green',
            tension:0.4,
            fill:true,
            pointStyle:'rect',
            pointBorderColor:'green',
            pointRadius:10,
            pointBackgroundColor:'green'
        },{
          
          label:["Smokevalue"],
          data:[last3ArrSet3],
          backgroundColor:'purple',
          borderColor:'purple',
          tension:0.4,
          fill:true,
          pointStyle:'rect',
          pointBorderColor:'purple',
          pointRadius:10,
          pointBackgroundColor:'purple'
      },{
          
        label:["Moisture1"],
        data:[last3ArrSet4],
        backgroundColor:'blue',
        borderColor:'blue',
        tension:0.4,
        fill:true,
        pointStyle:'rect',
        pointBorderColor:'blue',
        pointRadius:10,
        pointBackgroundColor:'blue'
    },{
          
      label:["Moisture2"],
      data:[last3ArrSet5],
      backgroundColor:'yellow',
      borderColor:'yellow',
      tension:0.4,
      fill:true,
      pointStyle:'rect',
      pointBorderColor:'yellow',
      pointRadius:10,
      pointBackgroundColor:'yellow'
  }
          ]
        },3000)

      }
 
     console.log("dataaa",arrSet1,arrSet2);
    //  console.log("v2",last3ArrSet1);
    //  console.log(info2);
    })
    .catch(e =>{console.log("error is here")})
   
       }
       let timerId = setInterval(() =>{
        fetchData();
       },2000);
   
       return () =>{
        clearInterval(timerId);
      };

      //  fetchData();

       
    },[])


  return (
    <div className="bolt">
      <Line data={datas} options={options} ></Line>
    </div>
  )
}
