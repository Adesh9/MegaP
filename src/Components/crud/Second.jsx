// import React, { useEffect, useState } from 'react';
// import StartFirebase from '../firebaseConfig/StartFirebase';
// import firebase from 'firebase/';
// import 'firebase/compat/database';


// const Second = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
   
//     const db = firebase.database();
//     const ref = db.ref('https://pappu-ba1fa-default-rtdb.firebaseio.com');
    


//     const listener = ref.on('value', (snapshot) => {
//       setData(snapshot.val());
//     });

//     return () => {
//       ref.off('value', listener);
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Firebase Test</h1>
//       {data ? (
//         <div>
//           <h2>Data:</h2>
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Second ;