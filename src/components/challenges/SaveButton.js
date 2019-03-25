import React, { Component } from "react";
// import FileSaver from "file-saver";

export default class SaveButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      title: this.props.title,
      lang: this.props.lang
    };
  }

  // fileExtension(lang) {
  //   const fileExtensionDict = {
  //     javascript: "js"
  //   };
  //   return fileExtensionDict[lang];
  // }
  //
  // fileNameify(name) {
  //   return name.split(" ").join("_");
  // }

  componentWillReceiveProps(nextProps) {
    this.setState({
      text: nextProps.text,
      title: nextProps.title,
      lang: nextProps.lang
    });
  }
  // saveCode(e) {
  //   e.preventDefault();
  //   const code = this.state.text;
  //   const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
  //   FileSaver.saveAs(
  //     blob,
  //     `${this.fileNameify(this.state.title)}.${this.fileExtension(
  //       this.state.lang
  //     )}`
  //   );
  // }
  // onClick={this.saveCode.bind(this)
  render() {
    return <button className="save button">Save </button>;
  }
}
