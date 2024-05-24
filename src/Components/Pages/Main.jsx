import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth, useFirebase } from '../../Context/firebase';
import MainNav from '../Navbar/MainNav';
import Try from '../Try';
import Combined from '../Combined/Combined';


//css
import './Main.css';

const Main = () => {

    const firebase = useFirebase();
    const navigate = useNavigate();
    
   
    useEffect(() => {
        //Navigate to Home if logged in 
        if(firebase.isLoggedIn ){
            navigate("/Main")
        }

    }, [firebase, navigate])

   

    return(
        <>
            <MainNav/>
        </>
    )
}

export default Main;