import React from 'react';

class Photo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {modal: false}

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modal: true})
  }

  closeModal() {
    this.setState({modal: false})
  }

  render() {
    const modal = (
      <div onClick={this.closeModal} className="modal-background">
        <img className="modal-image" src={this.props.source}></img>
      </div>
    )

    const photo = (
      <img onClick={this.openModal} className={this.props.classes} src={this.props.source} alt=""></img>
    )

    const image = this.state.modal ? modal : photo
    return(image)
  }
}

export default Photo;
