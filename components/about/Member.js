import React, { Component } from "react";

class Member extends Component {
  render() {
    return (
      <div>
        <div className='card col-12 flex-row flex-wrap bg-transparent pl-0 ml-0 border-0'>
          <div className='card-header col-4 col-md-2 bg-transparent pl-0 border-0 text-right'>
            <div className='af-width d-inline-block mr-3'>
              <img
                src={this.props.member.link}
                alt={this.props.member.name}
                className='card-img w-100 h-100 rounded-circle'
              />
            </div>
          </div>
          <div className='card-body px-0 pt-3 col-7'>
            <h4 className='card-title'>{this.props.member.name}</h4>
            <h6 className='font-italic'>{this.props.member.position}</h6>
            <p className='card-text af-grey'>{this.props.member.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Member;
