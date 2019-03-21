import React from "react";
import "./Sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  // 	if (this.props.folders) {
  // 		this.props.fetchFolders(this.props.currentUser.id);
  // 	}
  // }
  //
  // componentWillReceiveProps(nextProps) {
  //
  // 	this.setState({modalOpen: false});
  // 	this.setState({folders: nextProps.folders});
  // }
  //
  // handleClick(e) {
  // 	e.preventDefault();
  // 	this.setState({modalOpen: true});
  // }
  //
  // onModalClose() {
  // 	this.setState({modalOpen: false});
  // }

  // renderUserFolders() {
  // 	return this.props.folders.map((folder,idx) => (
  // 		<li key={`folder-${idx}`}>
  // 			<div className="link" >
  // 				<Link to={`folders/${folder.id}`}>
  // 					<i className="fa fa-folder" aria-hidden="true"></i>
  // 					{folder.name}
  // 				</Link>
  // 			</div>
  // 		</li>
  // 	));
  // }

  render() {
    return null;
  }
}

export default Sidebar;
