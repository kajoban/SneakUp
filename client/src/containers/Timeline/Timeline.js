import React from "react";
import Header from "../../components/Header/Header";

class Timeline extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("mounted");
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
