import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../layout/Spinner";
import { loadProfile } from "../../actions/profile";
import { transfer } from "../../actions/profile";

const Transfer = ({ loadProfile, transfer, profiles, loading }) => {
  const [formData, setFormData] = useState({
    sender: "",
    reciever: "",
    amount: "",
  });
  const { sender, reciever, amount } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const from = profiles.filter((profile) => profile.name === sender);
    const to = profiles.filter((profile) => profile.name === reciever);
    transfer({ from: from[0].accountNo, to: to[0].accountNo, amount });
  };
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  return (
    <div className="form-transfer">
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={(e) => onSubmit(e)}>
          <select
            name="sender"
            placeholder="sender"
            value={sender}
            onChange={(e) => onChange(e)}
          >
            <option value="none" selected hidden>
          --Select Senders Account---
      </option>
            {profiles.map((profile) => (
              <option>{profile.name}</option>
            ))}
          </select>
          <input type="submit" value="Transfer" />
          <select
            name="reciever"
            placeholder="reciever"
            value={reciever}
            onChange={(e) => onChange(e)}
          >
            <option value="null" selected hidden>
          --Select Receivers Account--
      </option>

            {profiles.map((profile) => (
              <option>{profile.name}</option>
            ))}
          </select>
          <div className='amount'>
            <input
              name="amount"
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) => onChange(e)}
            />
          </div>
        </form>
      )}
    </div>
  );
};

Transfer.propTypes = {
  transfer: PropTypes.func.isRequired,
  loadProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profiles: state.profile.profiles,
  loading: state.profile.loading,
});

export default connect(mapStateToProps, { transfer, loadProfile })(Transfer);
