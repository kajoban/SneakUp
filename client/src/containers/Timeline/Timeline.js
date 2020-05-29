import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import ShoeList from "../../components/ShoeList/ShoeList";

class Timeline extends React.Component {
  constructor(props) {
    super();
    this.state = {
      shoes: props.shoes,
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

const mapStateToProps = (state) => ({
  shoes: state.shoes,
});

export default connect(mapStateToProps)(Timeline);
