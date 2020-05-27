import React from "react";
import Header from "../../components/Header/Header";
import ShoeData from "../../data/ShoeData";

class Timeline extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log(ShoeData);
  }

  render() {
    return (
      <>
        <Header />
      </>
    );
  }
}

export default Timeline;
