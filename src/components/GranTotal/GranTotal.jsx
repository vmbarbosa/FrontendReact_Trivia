import React from "react";

class GranTotal extends React.Component {

    state = {
        total: 0
    }

    render(){
        return (
            <h1>Gran Total: {this.props.total}</h1>
        )
    }
}

export default GranTotal