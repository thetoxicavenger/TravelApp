import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import moment from "moment";

class TripMemory extends Component {
  render() {
    const memory = this.props.memories.filter(
      mem => mem.id === +this.props.match.params.memory_id
    );
    return (
      <div>
        <div className="center">
          <h1>{memory[0].name}</h1>

          <div className="row">
            <div className="col s12">
              <div className="card teal darken-2">
                <div className="card-content white-text">
                  <div>
                    <div className="left card-title">
                      Began{" "}
                      {moment(memory[0].start_date).format("MMMM Do YYYY")}
                    </div>
                    <div className="right card-title">
                      Ended {moment(memory[0].end_date).format("MMMM Do YYYY")}
                    </div>
                  </div>
                  <br />
                  <hr />
                  <h6>{memory[0].description}</h6>
                  <br />
                  <div className="right">
                    <span>
                      Entered on{" "}
                      {moment(memory[0].created_at).format(
                        "MMMM Do YYYY, h:mma"
                      )}
                    </span>
                  </div>
                </div>
                <div className="card-action">
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => this.props.history.goBack()}
                    className="small material-icons left"
                  >
                    arrow_back
                  </i>
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      console.log("DELETE");
                    }}
                    className="small material-icons right white-text"
                  >
                    delete
                  </i>
                  <Link to={`/`}>
                    <i className="small material-icons white-text right">
                      edit
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ memories }, ownProps) => {
  return {
    memories
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(TripMemory)
);
