import { Component, useState } from "react";
import Post from './Post';
import axios from 'axios';
import React,{useEffect } from 'react';
import Navbar from "./Navbar/Navbar";

export default class Posts extends Component{
     
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount(){
        axios
            .get(
                'https://megaproject-8529a-default-rtdb.firebaseio.com/Sensor.json',
            )
            .then((response) => {
                const posts = [];
                for (let key in response.data){
                    posts.push({...response.data[key], id: key });
                }

                let length = posts.length;
                let lastelement = posts[length-1];
                console.log(lastelement);

                 // Update the state with the fetched posts
                this.setState({ posts: posts });
            });


    }


    render(){
        
        // comment
        // const posts = this.state.posts.map((post) => {
        //     return <Post key={post.id} post={post}/>;
        // });


        const lastPost = this.state.posts[this.state.posts.length - 1];
   
    


        return (
            <div>
                <div>
                    {/* {posts} */}
                    {lastPost && <Post key={lastPost.id} post={lastPost} />}
                </div>
            </div>
        )
    }
}






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Post } from './Post';

// function Posts() {
//   const [posts, setPosts] = useState([]);

  // const [firstName,setFisrtName] = useState('Initial Name');

  // async function fetchData(){
  //   let a = await fetch('https://megaproject-8529a-default-rtdb.firebaseio.com/Sensor.json');
  //   let b = await a.json();
  //   setFisrtName(b.first_name);
  // } 

  // useEffect(() =>{
  //   let timerId = setInterval(() =>{
  //   fetchData();
  //   },2000);

  //   return() =>{
  //     clearInterval(timerId);
  //   }
  // },[])

  // const Rope =  useEffect(() => {
  //   axios
  //     .get('https://megaproject-8529a-default-rtdb.firebaseio.com/Sensor.json')
  //     .then((response) => {
  //       const fetchedPosts = [];
  //       for (let key in response.data) {
  //         fetchedPosts.push({ ...response.data[key], id: key });
  //       }

  //       let length = fetchedPosts.length;
  //       let lastelement = fetchedPosts[length - 1];
  //       console.log(lastelement);

  //       // Update the state with the fetched posts
  //       setPosts(fetchedPosts);

        
  //     });
  // }, []);

 

  // useEffect(() =>{
  //   let timeId = setInterval(() =>{
  //   <Rope/>;
  //   },2000);

  //   return() =>{
  //     clearInterval(timeId);
  //   }

  // },[])


//   const lastPost = posts[posts.length - 1];

//   return (
//     <div>
//       <h1 className='font-bold text-x1 my-3'>Posts Data</h1>
//       <div>
//         {/* {posts} */}
//         {lastPost && <Post key={lastPost.id} post={lastPost} />}
//         {/* {Post} */}
//       </div>
//     </div>
//   );
//   }

// export default Posts;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Post } from './Post';

// function Posts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://megaproject-8529a-default-rtdb.firebaseio.com/Sensor.json')
//       .then((response) => {
//         const fetchedPosts = [];
//         for (let key in response.data) {
//           fetchedPosts.push({ ...response.data[key], id: key });
//         }

//         let length = fetchedPosts.length;
//         let lastelement = fetchedPosts[length - 1];
//         console.log(lastelement);

//         // Update the state with the fetched posts
//         setPosts(fetchedPosts);
//       });
//   }, []);

//   const lastPost = posts[posts.length - 1];

//   return (
//     <div>
//       <h1 className='font-bold text-x1 my-3'>Posts Data</h1>
//       <div>
//         {/* {posts} */}
//         {lastPost && <Post key={lastPost.id} post={lastPost} />}
//       </div>
//     </div>
//   );
// }

// export default Posts;

