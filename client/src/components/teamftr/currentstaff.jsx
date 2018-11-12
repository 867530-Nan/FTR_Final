import React, { Component } from "react";
import {} from "react-router-dom";
import { Card } from "semantic-ui-react";
import Ian from "../../assets/images/staffIan.jpg";
import Georgia from "../../assets/images/staffGeorgia.jpg";
import Tessa from "../../assets/images/staffTessa.jpg";
import Frank from "../../assets/images/staffFrankFamily.jpg";
import Lacey from "../../assets/images/staffLacey.jpg";
import Courtney from "../../assets/images/staffCourtney.png";
import Moore from "../../assets/images/staffMoore2.JPG";
import Lane from "../../assets/images/staffLane.png";
import Jami from "../../assets/images/staffJami.jpg";
import Carla from "../../assets/images/staffCarla.jpg";
import Kelsie from "../../assets/images/staffKelsie.jpg";
import Marina from "../../assets/images/staffMarina.jpeg";
import Martin from "../../assets/images/staffMattMartin.jpg";
import Crystal from "../../assets/images/staffCrystal.png";
import "../../styles/currentstaff.css";
import axios from "axios";
import { TopPadding } from "../ftr_home";

class CurrentStaff extends Component {
  state = { staff: [] };

  componentDidMount() {
    this.fetchStaff();
  }

  fetchStaff = () => {
    axios
      .get("/api/employees/")
      .then(res => this.setState({ staff: res.data, showAll: true }))
      .catch(res => console.log(res));
  };

  compare = (a, b) => {
    if (a.index < b.index) return -1;
    if (a.index > b.index) return 1;
    return 0;
  };

  displayStaff = () => {
    const colors = [
      "red",
      "orange",
      "yellow",
      "olive",
      "green",
      "teal",
      "blue",
      "violet",
      "purple",
      "pink",
      "brown",
      "grey"
    ];
    const newArr = this.state.staff.sort(this.compare);
    return newArr.map(single => {
      return (
        <Card
          className="staffBoardCard"
          color={colors[Math.floor(Math.random() * colors.length)]}
          image={single.image}
          header={single.name}
          meta={single.title}
        />
      );
    });
  };

  render() {
    return (
      <div style={styles.boardBackground}>
        <TopPadding />
        <div className="currentStaffTop">Fit to Recover Staff</div>
        <Card.Group className="boardCardGroup" stye={styles.boardCardGroup}>
          {this.state.staff.length && this.displayStaff()}
        </Card.Group>
      </div>
    );
  }
}

const styles = {
  boardBackground: {
    paddingTop: "65px"
  },
  boardCardGroup: {
    width: "100%",
    margin: "0 auto"
  }
};

export default CurrentStaff;
