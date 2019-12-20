import React, {Component} from 'react';
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory:[],
      editItem: {}
    }
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory=(body)=>{
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log(err))
  }

  editItem =(id, body)=>{
   axios.put(`/api/product/${id}`, body).then(res => {
     this.setState({
       inventory: res.data
     })
   })
  }

  render(){
    console.log(this.state.editItem)
  return (
    <div className="App">
     <Dashboard inventory={this.state.inventory} getInventory={this.getInventory} editItem={this.editItem}/>
     <Form getInventory={this.getInventory} editItem={this.state.editItem}/>
     <Header/>
    </div>
  );
}
}
export default App;
