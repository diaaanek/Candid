import React, { Component } from "react";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";

class Questionanswerpanel extends Component {
  render() {
    return (
      <div className="question-panel">
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={"^"}>
            <Typography className="expansion-heading">
              {this.props.title}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>{this.props.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Questionanswerpanel;
