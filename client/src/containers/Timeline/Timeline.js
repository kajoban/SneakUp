import React from "react";
import Header from "../../components/Header/Header";
import ShoeData from "../../data/ShoeData";
import ShoeList from "../../components/ShoeList/ShoeList";

class Timeline extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shoes: ShoeData.shoes,
    };
  }

  componentDidMount() {
    console.log(this.state.shoes);
  }

  render() {
    return (
      <>
        <Header />
        <ShoeList shoes={this.state.shoes} />
      </>
    );
  }
}

export default Timeline;
