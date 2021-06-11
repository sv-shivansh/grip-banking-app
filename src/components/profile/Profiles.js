import React, { useEffect } from "react";
import { loadProfile } from "../../actions/profile";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import ProfileItem from "./ProfileItem";

const Profiles = ({ loadProfile, profile: {profiles, loading} }) => {
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  var count = 1
  return (
    <section>
      {loading ? <Spinner /> :
          <div className="container">
          {profiles.length > 0 ? (
              profiles.map(profile => (
                  <ProfileItem sno = {count++} key={profile._id} profile={profile}/>
              ))
          ): <h2>No profile</h2>}
      </div>}
    </section>
  );
};

Profiles.protoTypes = {
  loadProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, { loadProfile })(Profiles);
