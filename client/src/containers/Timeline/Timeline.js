import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import ShoeList from "../../components/ShoeList/ShoeList";
import toggleBookmark from "../../actions/index";

class Timeline extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(typeof this.props.shoes);
  }

  render() {
    return (
      <>
        <Header />
        <ShoeList
          shoes={this.props.shoes}
          toggleBookmark={this.props.toggleBookmark}
        />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleBookmark: (id) => dispatch(toggleBookmark(id)),
});

const mapStateToProps = (state) => ({
  shoes: state.shoes,
});

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
