import React from "react";
import Game from "./homepage"; 
import '../App.css'; 
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import {Link} from "react-router-dom"; 
export default function TableTik(){
  const { id } = useParams();
  
    return <Tictactoe id={id}/>;
}
 

class Tictactoe extends React.Component 
{

  //metablites opou thelw na parw apo to backend opws einai id tou game,
  //to table me tis kinisis pou exoun gini mexri stigmis
  //onomata twn pextwn h enalagi twn gurwn telos to minima mou mas leei ean proxorisouume to game h elije me kapoion 
  //nikiti h xameno 
  constructor(){    
    super()  
    this.state = { 
      id:-1,
      Table:[],
      user1:'',
      user2:'',
      turn:true,
      message:[]
    } 
  }

    

//kanw mia klisi sto bend gia na arxisi to game
 async componentDidMount(){    
  const {id}=this.props;  

        await  axios.get(`http://127.0.0.1:8000/startgame/${id}`)
        .then(response => {
                          this.setState({user1:response.data.user1})
                          this.setState({user2:response.data.user2}) 
                          this.setState({Table:response.data.table}) 
                          this.setState({id:response.data.id}) 
                          this.setState({message:response.data.message})  
                           
                        });
}
 
//me to pou epileji o xristis pou thelei na kanei kinisi apo edw pernaei sto backend thn thesi pou epeleje epipleon 
// poios apo tous dio ekane thn kunisi epipleon to id game 
  async onSub(value){
    const uturn = (this.state.turn==true?"x":"o")
    const changrturn = !this.state.turn;
    this.setState({turn:changrturn});
     
    const data ={
          'mov':uturn,
          'pos':value
    };
    const id = this.state.id;
    
    await axios.post(`http://127.0.0.1:8000/addmove/${id}`,data)
    .then(response => { 
      this.setState({Table:response.data.table})  
      this.setState({message:response.data.message})  
      console.log(response.data);
    }); 
  } 
render(){  

  const table = this.state.Table;  
  const mes = this.state.message.winner;

   
  
    return(
      <>
        {/* emfanizw ton pinaka tis trilizas me tis nikisis tou kathe pekti kathis me ton katalilo elegxo*/}
        {mes=="Draw"?<h1>game is Draw <Link to="/">go back</Link> </h1>:mes!="empty"? <h1>winner is {mes} <Link to="/">go back</Link> </h1> :(
        <table>
        <tr>
        <th>us1</th>
        <th></th>
        <th>us2</th>
        </tr>
        <tr>
        <td>{table[0]==0?<button onClick={()=>this.onSub(0)}>onClick</button>:table[0]=='x'?"x":table[0]=="o"?"o":"error"}</td>
        <td>{(table[1]==0?<button onClick={()=>this.onSub(1)}>onClick</button>:table[1]=="x"?"x":table[1]=="o"?"o":"error")}</td>
        <td>{(table[2]==0?<button onClick={()=>this.onSub(2)}>onClick</button>:table[2]=="x"?"x":table[2]=="o"?"o":"error")}</td>
        </tr>
        <tr>
        <td>{(table[3]==0?<button onClick={()=>this.onSub(3)}>onClick</button>:table[3]=="x"?"x":table[3]=="o"?"o":"error")}</td>
        <td>{(table[4]==0?<button onClick={()=>this.onSub(4)}>onClick</button>:table[4]=="x"?"x":table[4]=="o"?"o":"error")}</td>
        <td>{(table[5]==0?<button onClick={()=>this.onSub(5)}>onClick</button>:table[5]=="x"?"x":table[5]=="o"?"o":"error")}</td>
        </tr>
        <tr>
        <td>{(table[6]==0?<button onClick={()=>this.onSub(6)}>onClick</button>:table[6]=="x"?"x":table[6]=="o"?"o":"error")}</td>
        <td>{(table[7]==0?<button onClick={()=>this.onSub(7)}>onClick</button>:table[7]=="x"?"x":table[7]=="o"?"o":"error")}</td>
        <td>{(table[8]==0?<button onClick={()=>this.onSub(8)}>onClick</button>:table[8]=="x"?"x":table[8]=="o"?"o":"error")}</td>
        </tr>
      </table>)
      
      }
        </>
      );
  }

    }

 