import React, { useEffect } from "react";
import { getProfileById } from "../../actions/profile";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Transaction from "./Transaction";
import Spinner from "../layout/Spinner";
import "./profile.css";

const Profile = ({
  getProfileById,
  history,
  match,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);
  return (
    <div className="wrapper">
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <div className="app-wrapper">
          <aside className="wallet">
            <h2 className="profile">My Wallets</h2>
            <div className="cards">
              <div className="credit-card visa">
                <div className="card-image"></div>
                <div className="credit-card_number">{profile.accountNo}</div>
                <div className="credit-card_expiration">{profile.name} </div>
              </div>
            </div>
          </aside>
          <content className="transactions-wrapper">
            <h2 className="profile">
              Current Balance
              <span className="total-balance">{profile.balance}</span>
            </h2>

            <div className="transactions">
              {profile.history.length > 0 ? (
                profile.history.map((transaction) => (
                  <Transaction
                    key={transaction._id}
                    transaction={transaction}
                  />
                ))
              ) : (
                <h4>No History Found</h4>
              )}
            </div>
          </content>
        </div>
      )}
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
