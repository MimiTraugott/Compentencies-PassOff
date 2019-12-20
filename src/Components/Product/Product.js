import React, { Component } from 'react'

class Product extends Component {
    state = {
        editing: false,
        name: this.props.name,
        price: this.props.price,
        imgUrl: this.props.img
    }

    handleChange=(e)=>{
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    toggleEdit=()=> {
        this.setState({
            editing: !this.state.editing
        })
    }

    render(){
        return(
            <div>



            {!this.state.editing ? <div className='product'>
                <div>
                    <img src={this.props.img} alt=''/>
                </div>    
                <div>
                    <h2>{this.props.name}</h2>
                    </div>    
                <div>
                    <p>${this.props.price}</p>
                    <button onClick={() => this.props.delete()}>Delete</button>
                    <button onClick={() => this.toggleEdit()} >Edit</button>
                </div>
            </div> : 
            <div>
            <input onChange={e=>this.handleChange(e)} placeholder='name' value={this.state.name} name='name' type="text"/>
            <input onChange={e=>this.handleChange(e)} placeholder='price' value={this.state.price} name="price"type="text"/> 
            <input onChange={e=>this.handleChange(e)} placeholder='image' value={this.state.imgUrl} name="imgUrl" type="text"/>
            <button onClick={this.toggleEdit}>Cancel</button>
            <button onClick={()=> {
                this.props.editItem(this.props.id, {name:this.state.name, price:this.state.price, imgUrl:this.state.imgUrl})
                this.toggleEdit()}
            }>Sumbit Changes</button>
            </div>
            }



            </div>
        )
    }
}

export default Product