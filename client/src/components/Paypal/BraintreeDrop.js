import React, { Component } from "react";
import { Dimmer, Loader, Segment, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import axios from "axios";
import braintree from "braintree-web-drop-in";
import BraintreeDropin from "braintree-dropin-react";
import BraintreeSubmitButton from "./BraintreeSubmitButton";

class BraintreeDrop extends Component {
  state = {
    loaded: false,
    token: ""
  };
  //comment for push
  componentDidMount() {
    axios
      .get("/api/braintree_token")
      .then(res => {
        const { data: token } = res;
        this.setState({ token, loaded: true });
      })
      .catch(res => console.log("sorry"));
  }

  handlePaymentMethod = payload => {
    const { amount } = this.props;

    axios
      .post("/api/payment", { amount, ...payload })
      .then(res => {
        const { data: transactionId } = res;
        this.setState({ transactionId });
      })
      .catch(res => {
        window.location.reload();
      });
  };

  render() {
    const { loaded, token } = this.state;

    if (loaded)
      return (
        <Segment basic textAlign="center">
          <BraintreeDropin
            braintree={braintree}
            authorizationToken={token}
            handlePaymentMethod={this.handlePaymentMethod}
            renderSubmitButton={BraintreeSubmitButton}
          />
          <Button
            style={{ margin: "10px" }}
            color="red"
            onClick={this.props.switchAndSet}
          >
            Cancel
          </Button>
        </Segment>
      );
    else
      return (
        <Dimmer active>
          <Loader>Loading Payment Experience. Please Wait...</Loader>
        </Dimmer>
      );
  }
}

export default connect()(BraintreeDrop);
