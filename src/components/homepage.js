import React from 'react';
import '../App.css';
import TableTik from './TikTak';
import axios from 'axios'; 
import history from './history';
import {Link} from "react-router-dom"; 


//perirxei tis metablites me ta onomata to pextwn kai to id
export default class Game extends React.Component{
        constructor(props) {
        super(props);
        this.state = {
            user1:'',
            user2:'',
            setU1:false,
            setU2:false,  
            Id:-1                    
        };

        this.setUser1=this.setUser1.bind(this);
        this.setUser2=this.setUser2.bind(this); 
        this.submit=this.submit.bind(this); 

      }

      //setari taa onomata stis metablites

      setUser1(value){
          this.setState({user1:value.target.value});
          if(this.state.user1!=""){
          this.setState({setU1:true});
          }
          else{
          this.setState({setU1:false});
          }
          console.log(value.target.value)
      }

      setUser2(value){
          this.setState({user2:value.target.value});
          if(this.state.user2!=""){
          this.setState({setU2:true});
          }
          else{
          this.setState({setU2:false});
          }
          console.log(value.target.value)
        } 


//stelnei sthn basi dedomenwn ta onoma twn xriston kai epistrefi to id tou game
    async submit(){    
      
      const a1 = this.state.user1;
      const a2 = this.state.user2;
      const i=0;
      const data={
                  'u1':a1,
                  'u2':a2  
                  }; 
    
      await axios.post('http://127.0.0.1:8000/creategame',data).then(response => this.setState({Id:response.data}) );
     
      const a = this.state.Id;
      history.push(`/startgame/${a}`); 
      window.location.reload();
    }
     

    

      render(){ 

        let userv1 = this.state.setU1;
        let userv2 = this.state.setU2;


        const play=(userv1==true && userv2 == true?true:false);
        
          //oi pektes bazoun ta onomata tous kai jekinoun to game h blepoun too istoriko tou proigoumenou game
          return (
            <>
                    <Link to="/showlastgame">see your last game</Link>
                    <p>hello</p>
                    <div class="setname1">
                        <label>User1</label>
                        <input type="text" onChange={this.setUser1}/>
                        </div>
                        
                        <div class="setname2">
                        <label>User2</label>
                        <input type="text" onChange={this.setUser2}/>
                        </div>

                        {play?<button onClick={this.submit}>lets play</button>:"set the names"}

            </>
          );
      
        }

}