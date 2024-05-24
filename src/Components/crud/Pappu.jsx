import React from 'react';
import StartFirebase from '../firebaseConfig/StartFirebase';
import { ref, set, get, update, remove, child } from "firebase/database";

export class Pappu extends React.Component{

    constructor(props){
        super(props);
            this.state ={
                db:'',
                username:'',
                fullname:'',
                phonenumber:'',
                dob:''
            }
            this.interface = this.interface.bind(this);
        }


        componentDidMount(){
            this.setState({
                db: StartFirebase()
            });
        }

        render(){
            return(
                <>
                 <label>Enter Username</label>
                 <input  type='text' id="userbox" value={this.state.username}
                 onChange={e =>{this.setState({username: e.target.value})}} />
                 <br></br>

                 <label>Enter Fullname</label>
                 <input  type='text' id="namebox" value={this.state.fullname}
                 onChange={e =>{this.setState({fullname: e.target.value})}} />
                 <br></br>

                 <label>Enter Phone Number</label>
                 <input  type='number' id="Phonebox" value={this.state.phonenumber}
                 onChange={e =>{this.setState({phonenumber: e.target.value})}} />
                 <br></br>

                <label>Date of Birth</label>
                <input  type='date' id="datebox" value={this.state.dob}
                onChange={e =>{this.setState({dob: e.target.value})}} />
                <br></br>

                <button id="addbtn" onClick={this.interface}>Add Data</button>
                <button id="updatebtn" onClick={this.interface}>update Data</button>
                <button id="deletebtn" onClick={this.interface}>delete Data</button>
                <button id="selectbtn" onClick={this.interface}>get Data from db</button>
                </>
            )
        }

        interface(event){
            const id = event.target.id;

            if(id =='addbtn'){
                this.insertData();
            }
            else if(id =="updatebtn"){
                this.updateData();
            }
            else if(id =="deletebtn"){
                this.deleteData();
            }
            else if(id =="selectbtn"){
                this.selectData();
            }
       
        }

        getAllInputs(){
            return{
                username: this.state.username,
                name:this.state.fullname,
                phone:Number (this.state.phonenumber),
                dob:this.state.dob
            }
        }

        insertData(){
          const db = this.state.db;
          const data = this.getAllInputs();

          set(ref(db,'customer/'+ data.username),
          {
            Fullname : data.name,
            Phonenumber:data.phone,
            dateofbirth:data.dob
          })
          .then(() =>{alert('data added succesfully')})
          .catch((error) =>{alert("there is aandd error"+error)});
        }

        updateData(){
            const db = this.state.db;
            const data = this.getAllInputs();
  
            update(ref(db,'customer/'+ data.username),
            {
              Fullname : data.name,
              Phonenumber:data.phone,
              dateofbirth:data.dob
            })
            .then(() =>{alert('data updated succesfully')})
            .catch((error) =>{alert("there is an error"+error)});
          }
    

    deleteData(){
        const db = this.state.db;
        const username = this.getAllInputs().username;

        remove(ref(db,'customer/'+ username))
      
        .then(() =>{alert('data updated succesfully')})
        .catch((error) =>{alert("there is an error"+error)});
      }

      selectData(){
        const dbref = ref(this.state.db);
        const username = this.getAllInputs().username;

        get(child(dbref,'customer/' + username)).then((snapshot) =>{
            if(snapshot.exists()){
                this.setState({
                    fullname: snapshot.val().Fullname,
                    phonenumber: snapshot.val().Phonenumber,
                    dob: snapshot.val().dateofbirth
                })
            }
            else{
                alert("no data found?")
            }
        })
        .catch((error) =>{alert("there is an error,details"+error)})
      }
    }
