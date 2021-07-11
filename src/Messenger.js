import React,{ useState, useEffect} from 'react';
import { FormControl ,Input} from '@material-ui/core';
import Messeg from './Messeg'; 
import db from './firebase'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import Messeng from './images/messenger.png';

const Messenger = () => {
    
  const [input,setInput] = useState('')
  const [value,setValue] = useState([])
  const [username,setUsername] = useState('')


      useEffect(() =>{
        db.collection('messeges')
        .orderBy('timestamps','desc')
        .onSnapshot(snapshot => {
          setValue(snapshot.docs.map(doc => ({id: doc.id, messege: doc.data()})))
        }) 
      },[])

      useEffect(() => {
       setUsername(prompt('please enter your user name'))
      },[])

       const hendleSubmit = (e) =>{  
        db.collection('messeges').add({
          messege: input,
          username: username,
          timestamps: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
        e.preventDefault()
      }
    return (
        <div> 
          <img style={{height:'5rem'}} src={Messeng} alt="" /> 
           
       <h3>Facebook Messenger App</h3>  
      <h4>Welcome to {username}</h4>

      <form className="app_form">
       <FormControl className="app_formControl">  
        <Input type="text" className="app_input" placeholder="Enter a message" value={input}  onChange={(e) => setInput(e.target.value)}  /> 

        <IconButton className="app_icon" onClick={hendleSubmit} disabled={!input}  type="submit" className="mt-2"
         variant="contained" color="primary" >
          <SendIcon></SendIcon>
        </IconButton> 
      </FormControl>  
      </form> 

        <FlipMove>
              {
                value.map(({messege,id}) =>  
                <Messeg key={id} username={username} messege={messege} /> 
                )
              }
        </FlipMove>
        </div>
    );
};

export default Messenger;