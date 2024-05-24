
import React from 'react';
import { useState , useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Sampul = () => {

       let expsal =[];
       let expage =[];

           const [chartData, setChartData] = useState({});
           const [EmpSalary, setEmpSalary] = useState([]);
           const [EmpAge, setEmpAge] = useState([]);


           const pipe = () =>{
                 axios.get('https://megaproject-8529a-default-rtdb.firebaseio.com/Sensor.json')
                 .then(res =>{
                    console.log(res)
                    for( const dataObj of res.data.data){
                       expsal.push(parseInt(dataObj.Humidity));
                       expage.push(parseInt(dataObj.SmokeValue));
                    }
                 }).catch(err =>{
                    console.log(err)
                 })
                console.log(expsal,expage);

               setChartData({
                labels:['mond','tue','wed','thur','fri','sat'],
                datasets:[
                    {
                        label:"level",
                        data:[32,45,43,12,62],
                        backgroundColor:["rgba(75,192,192,0.6)"],
                        borderWidth:4
                    }
                ]
               })

           }

 useEffect(() =>{
    pipe();
 },[]);


  return (
    <div>
      {/* <Bar data={chartData} options={} */}
    </div>
  )
}

export default Sampul
