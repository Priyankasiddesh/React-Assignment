import React, { Component } from "react";
import "./SearchField.scss";
class SearchField extends Component {
  render() {
    return (
      <div>
        <form>
          <select name="select transporter" className="Search">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
          </select>
          <select name="select plant/depot" className="Search">
            <option value="Bangalore">Bangalore</option>
            <option value="Mysore">Mysore</option>
            <option value="Mandya">Mandya</option>
          </select>
          <select name="select Item" className="Search">
            <option value="parcel">Parcel</option>
            <option value="post">Post</option>
            <option value="courier">Courier</option>
          </select>
        </form>
      </div>
    );
  }
}
export default SearchField;
