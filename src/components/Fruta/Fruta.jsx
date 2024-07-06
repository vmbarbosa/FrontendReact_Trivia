import React from "react"

class Fruta extends React.Component {

  constructor(props){
    super()

    console.log(props);
  }

  state = {
    amount: 0
  }

  add = () => {
    this.setState({
      amount: this.state.amount + 1 
    })
  }

  remove = () => {
    this.setState({
      amount: this.state.amount - 1 
    })
  }

  render() {
    return (
    
      <div>
          <h2>{this.props.name}</h2>
          <p> Precio: {this.props.price}</p>
          <button onClick={this.add}>+</button>
          <button onClick={this.remove}>-</button>
          <h4>Cantidad: {this.state.amount}</h4>
          <h4>Total: {this.state.amount * this.props.price}</h4>
          <hr />
      </div>
      )
  }
}

export default Fruta