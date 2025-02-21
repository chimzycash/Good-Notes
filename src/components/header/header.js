import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

  signOut = () => {
    localStorage.removeItem("user");
    this.props.history.push('/login')
  };

  getVal = (e) => {
    return this.props.findNotes(e.target.value);
  }

  render() {
    return (
      <div className="header">
        <i className="ion-ios-search-strong searchcon" />

        <input type="text" placeholder="Search" onChange={this.getVal} />

        <p className="user">
          Hello{" "}
          <Link to="/login"><b>Kenny</b></Link>
        </p>

        <i className="ion-android-notifications-none" />
        <div className="btnout" onClick={this.signOut}>Sign Out</div>

      </div>
    );
  }
}

export default Header;
