import React from "react";
import "../App.css";

class Pets extends React.Component {
  constructor(){
    super();

    this.state = {
      pets: [],
    }
  }

  fetchPets = () => {
    fetch("https://pursuit-veterinarian.herokuapp.com/api/pets")
      .then((res)=> res.json())
      .then((data)=>{
        this.setState({
          pets: data,
        })
      })
  }

  render() {
    return <div className="Pets">this is the Pets page!!</div>;
  }
}

export default Pets;
