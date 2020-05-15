import React from "react";
import axios from "axios";
import EditBulletinItem from "./EditBulletinItem";
import ShowAllBulletinItems from "./ShowAllBulletinItems";
import CreateBulletinItem from "./CreateBulletinItem";

class BulletinBoard extends React.Component {
  state = { bulletins: [], showAll: true, editBulletin: undefined };

  componentDidMount() {
    this.fetchBulletins();
  }

  fetchBulletins = () => {
    axios
      .get("/api/events/")
      .then((res) =>
        this.setState({ bulletins: res.data.sort(this.compare), showAll: true })
      )
      .catch((res) => console.log(res));
  };

  compare(a, b) {
    if (a.itemNumber > b.itemNumber) return 1;
    if (a.itemNumber < b.itemNumber) return -1;
    return 0;
  }

  editButton = (info) => {
    this.setState({ editBulletin: info, showAll: false, create: false });
  };

  deleteButton = (note) => {
    axios.delete(`/api/events/${note.id}`);
    let bulletins = this.state.bulletins;
    const newArr = bulletins.filter((single) => single.id !== note.id);
    this.setState({ bulletins: newArr });
  };

  cancelButton = () => {
    this.setState({ showAll: true });
  };

  handleMoveUp = (e) => {
    if (e.itemNumber !== 1) {
      axios
        .post("/api/eventMoveUp/", e)
        .then((res) =>
          this.setState({ bulletins: res.data.sort(this.compare) })
        )
        .catch((res) => console.log(res));
    }
  };

  handleMoveDown = (e) => {
    if (e.itemNumber !== this.state.bulletins.length) {
      axios
        .post("/api/eventMoveDown/", e)
        .then((res) =>
          this.setState({ bulletins: res.data.sort(this.compare) })
        )
        .catch((res) => console.log(res));
    }
  };

  render() {
    if (this.state.showAll) {
      return (
        <ShowAllBulletinItems
          editButton={this.editButton}
          bulletins={this.state.bulletins}
          deleteButton={this.deleteButton}
          createButton={() => this.setState({ create: true, showAll: false })}
          handleMoveUp={this.handleMoveUp}
          handleMoveDown={this.handleMoveDown}
        />
      );
    } else if (this.state.create) {
      return (
        <CreateBulletinItem
          back={this.fetchBulletins}
          cancelButton={this.cancelButton}
          bulletins={this.state.bulletins}
        />
      );
    } else {
      return (
        <EditBulletinItem
          bulletin={this.state.editBulletin}
          back={this.fetchBulletins}
          cancelButton={this.cancelButton}
        />
      );
    }
  }
}

export default BulletinBoard;
