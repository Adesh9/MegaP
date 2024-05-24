
// export function Post(props){
//     return( 
//         <div>
                 
//                 <div>Time: {props.post.datetime}</div>
//                 <div>Humidity: {props.post.Humidity}</div>
//                 <div>SmokeValue: {props.post.SmokeValue}</div>
//                 <div>Temperature: {props.post.Temperature}</div>
//                 <div>Moisture1: {props.post.moisture1}</div>
//                 <div>Moisture2: {props.post.moisture2}</div><br/>


//         </div>
//     );
// }
// import React from 'react'

// const Post = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Post

import React from 'react'
import './Post.scss'
import smoke from './smoke.webp';
import temp from './Temp.jpg';
import mois from './mois.jpg';
import hum from './imt.jpg';



const Post = (props) => { 
  return (

    <div className='card-layout'>

       <div className="header">
           <div className="title">Data Reading</div> 
      </div>

     
       
             {/* CARD 1 */}
    <div className="card-1">

          <div className="i1">
            <img src={smoke} alt=''/>
          </div>

          <div className="h1">SMOKE VALUE</div>

            <div className="r1">{props.post.SmokeValue +"mg/"  + "\u33A5"} </div>

    </div>
                
                {/* CARD 2 */}
      <div className="card-2">

          <div className="i1">
            <img src={temp} alt=''/>
          </div>

          <div className="h2">TEMPERATURE VALUE</div>

            <div className="r2">{props.post.Temperature +"\u00B0" +"C"}</div>
            
      </div>

         {/* CARD 3 */}

      <div className="card-3">

            <div className="i1">
              <img src={mois} alt=''/>
            </div>

            <div className="h3">MOISTURE FIELD-1</div>

             <div className="r3">{props.post.moisture1 +"%" }</div>

      </div>

           {/* CARD 4 */}

          <div className="card-4">

              <div className="i1">
                 <img src={mois} alt=''/>
              </div>

              <div className="h4">MOISTURE FIELD-2</div>

              <div className="r4">{props.post.moisture2 + "%"}</div>

           </div>

            {/* CARD 5 */}

          <div className="card-5">

                <div className="i1">
                  <img src={hum} alt=''/>
                </div>

                <div className="h5">HUMIDITY VALUE</div>

                <div className="r5">{props.post.Humidity + "%"}</div>

          </div>

         
     
    </div>
  )
}

export default Post;
