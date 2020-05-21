import React from "react";
import axios from "axios";
import EditGalleryItem from "./EditGalleryItem";
import ShowAllGalleryItems from "./ShowAllGalleryItems";
import CreateGalleryItem from "./CreateGalleryItem";

class GalleryBoard extends React.Component {
  state = { gallery: [], showAll: true, editGallery: undefined };

  componentDidMount() {
    this.fetchGallerys();
  }

  fetchGallerys = () => {
    axios
      .get("/api/media/")
      .then((res) =>
        this.setState({ gallery: res.data.sort(this.compare), showAll: true })
      )
      .catch((res) => console.log(res));
  };

  compare(a, b) {
    if (a.itemNumber > b.itemNumber) return 1;
    if (a.itemNumber < b.itemNumber) return -1;
    return 0;
  }

  editButton = (info) => {
    this.setState({ editGallery: info, showAll: false, create: false });
  };

  deleteButton = (note) => {
    axios.delete(`/api/media/${note.id}`);
    let gallery = this.state.gallery;
    const newArr = gallery.filter((single) => single.id !== note.id);
    this.setState({ gallery: newArr });
  };

  cancelButton = () => {
    this.setState({ showAll: true });
  };

  handleMoveUp = (e) => {
    if (e.itemNumber !== 1) {
      axios
        .post("/api/galleryMoveUp/", e)
        .then((res) => this.setState({ gallery: res.data.sort(this.compare) }))
        .catch((res) => console.log(res));
    }
  };

  handleMoveDown = (e) => {
    if (e.itemNumber !== this.state.gallery.length) {
      axios
        .post("/api/galleryMoveDown/", e)
        .then((res) => this.setState({ gallery: res.data.sort(this.compare) }))
        .catch((res) => console.log(res));
    }
  };

  handleCreate = (media) => {
    axios
      .post("/api/media/", { media })
      .then(() => this.fetchGallerys())
      .catch((err) => console.log(err));
  };

  handleEdit = (media) => {
    axios
      .put(`/api/media/${this.state.editGallery.id}`, { media })
      .then(() => this.fetchGallerys())
      .catch((err) => console.log(err));
  };

  render() {
    if (this.state.showAll) {
      return (
        <ShowAllGalleryItems
          editButton={this.editButton}
          gallery={this.state.gallery}
          deleteButton={this.deleteButton}
          createButton={() => this.setState({ create: true, showAll: false })}
          handleMoveUp={this.handleMoveUp}
          handleMoveDown={this.handleMoveDown}
        />
      );
    } else if (this.state.create) {
      return (
        <CreateGalleryItem
          handleCreate={this.handleCreate}
          back={this.fetchGallerys}
          cancelButton={this.cancelButton}
          gallery={this.state.gallery}
        />
      );
    } else {
      return (
        <EditGalleryItem
          handleEdit={this.handleEdit}
          gallery={this.state.editGallery}
          back={this.fetchGallerys}
          cancelButton={this.cancelButton}
        />
      );
    }
  }
}

export default GalleryBoard;
