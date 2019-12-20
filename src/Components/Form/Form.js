import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            price: 0,
            imgUrl: ''
        }
    }

handleImage =(val) => {
    this.setState({
    imgUrl: val
    })
}
productName = (val)=> {
    this.setState({
    name: val
    })
}
handlePrice = (val) => {
    this.setState({
    price: val
    })
}
cancelUpdate = (e) => {
    this.setState({
        name: '',
        price: 0,
        imgUrl: ''
    })
}
addInventory = (body) => {
    axios.post('/api/product', body).then(res =>{
        this.props.getInventory()
        this.cancelUpdate()
    })
}
render(){
    const {name, price, imgUrl}=this.state
    return(
        <div>
            <input onChange={(e)=> this.handleImage(e.target.value)} placeholder='image' value={imgUrl} type="text"/>
            <input onChange={(e)=> this.productName(e.target.value)} placeholder='name' value={name} type="text"/>
            <input onChange={(e)=> this.handlePrice(e.target.value)} value={price} type="text"/>
            <button onClick={() => this.cancelUpdate()}>Cancel</button>
            <button onClick={() => this.addInventory({name, price, imgUrl})}>Add to Inventory</button>
            <div>Form</div>
        </div>
    )
    }  
}
export default Form;