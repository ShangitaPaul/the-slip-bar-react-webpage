import React, { Component } from "react";
import PropTypes from "prop-types";

class MenuItem extends Component {
  constructor() {
    super();
    this.state = {
      availability: true,
      message: "Sorry this dish is out of order!",
      display: "d-block"
    };

    this.changeAvailability = this.changeAvailability.bind(this);
  }

  changeAvailability(props) {
    this.setState({
      availability: false
    });
  }

  displayCategory() {
    if (this.props.data.category === this.props.menu.category) {
      this.setState({
        display: "d-block"
      });
    } else {
      this.setState({
        display: "d-none"
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.category !== prevProps.data.category) {
      this.displayCategory();
    }
  }

  render() {
    return (
      <div
        className={`${
          this.state.display === "d-none" ? "d-none" : null
        } col-6 col-md-4 col-lg-3 my-2`}
      >
        <div className={`${this.state.display} card`} id={this.props.menu.id}>
          <img
            src={this.props.menu.link}
            alt={this.props.menu.title}
            className='card-img-top'
          />

          <div className='card-body'>
            <h4 className='card-title'>{this.props.menu.title}</h4>
            <div className='card-text'>{this.props.menu.description}</div>
          </div>
          <div className='card-footer'>
            <button
              className='btn btn-primary'
              onClick={this.changeAvailability}
            >
              Order
            </button>
            {this.state.availability === false ? (
              <div className='pt-2 text-danger'>{this.state.message}</div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

MenuItem.propTypes = {
  menu: PropTypes.object.isRequired
};

export default MenuItem;
