import React, { Component } from "react";
import Menu from "./Menu";

class MenuSort extends Component {
  render() {
    return (
      <div className='button-wrapper w-100 text-center my-4'>
        <button
          className='btn btn-secondary mx-2 af-btn-width'
          onClick={() => this.props.data.selectCategory("Drinks")}
        >
          Drinks
        </button>
        <button
          className='btn btn-secondary mx-2 af-btn-width'
          onClick={() => this.props.data.selectCategory("Main")}
        >
          Main
        </button>
        <button
          className='btn btn-secondary mx-2 af-btn-width'
          onClick={() => this.props.data.selectCategory("Appetizers")}
        >
          Appetizers
        </button>
        <button
          className='btn btn-secondary mx-2 af-btn-width'
          onClick={() => this.props.data.selectCategory("Dessert")}
        >
          Desserts
        </button>
      </div>
    );
  }
}

export default MenuSort;
