import React from "react";
import Rating from "./Rating";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };
  render() {
    return (
      <header>
        <div className="inputbutton">
          <input
            type="text"
            placeholder="Type movie name to search"
            onChange={this.handleChange}
          />
          <button onClick={() => this.props.giveNewtext(this.state.text)}>Search</button>
        </div>

        <div className="ratemin">
          <p>minimum rating </p>
          <Rating
            rate={this.props.rate}
            rateIt={rate => this.props.giveNewRate(rate)}
          />
        </div>
      </header>
    );
  }
}
export default Header;
