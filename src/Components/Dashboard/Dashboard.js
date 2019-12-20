import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    deleteInventory(id){
        axios.delete('/api/product/:id',id).then(res => {
            this.props.getInventory() 
        })
    }
    render(){
    return(
        <div className='Dashboard'>
            {this.props.inventory.map((product, index) => {
                return(
                    <div>
                        <Product
                    id={product.id}
                    key={index}   
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    delete={this.deleteInventory}
                    editItem={this.props.editItem}
                     />
                    </div>
                )
            })}
            
        <div>Dashboard</div>
        </div>
    )
}
}
export default Dashboard

