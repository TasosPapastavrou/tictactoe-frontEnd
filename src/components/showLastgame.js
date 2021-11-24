import React from "react";
import react from "react";
import axios from 'axios';
// import '../App.css'; 
import {Link} from "react-router-dom";


//emfanizei to apotelesma tou teleutaiou game
export default class Showgame extends React.Component{

    constructor() {
        super();
        //metablites opou tha apothikeuw tis times. moves:oles tis kinisis tou game,user12 ta onnomata tous lai telos poios einai o nikitis
        this.state = {
            moves:[], 
            user1:"",
            user2:"",
            winner:""
        };        

      }

      //kanw thn klisi sthn basi dedomenwn gia na parw ta dedomena opou anefera poio panw
      async componentDidMount(){    
        const {id}=this.props;  
      
              await  axios.get(`http://127.0.0.1:8000/showlastgame`)
              .then(response => {
                                this.setState({moves:response.data.moves}) 
                                this.setState({user1:response.data.user1})
                                this.setState({user2:response.data.user2})
                                this.setState({winner:response.data.winner})
                                console.log(response.data )
                              });
      }

      render(){
              const winner = this.state.winner;
              const user1 = this.state.user1;
              const user2 = this.state.user2;
              const moves = this.state.moves;
              console.log()
        return(
        <>

       
    {user1=="empty"? <h1>empty list <Link to="/">go back</Link> </h1> :""} 
    {/* ean uparxoun dedomena ta efnanizei allios empty */}
    <h1>winner is {winner} </h1>
    <hr></hr>
    <h4>{user1} vs {user2}<Link to="/"> go back</Link></h4>
         
    <table>
    <tr>
        <th>move</th>
        <th>vs</th>
        <th>position</th>
        </tr> 
        {
        moves.map( moves => 

        <tr key={moves.id}>
        <td>{moves.move} </td>
        <td></td>
        <td>{moves.position} </td>
        </tr> 

        )

        }
 </table>


        </>
        
        );
      }

}