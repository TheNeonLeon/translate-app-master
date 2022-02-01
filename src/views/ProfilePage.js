import React from 'react';
import withAuth from '../hoc/withAuth';
import Profile from '../components/Profile/Profile';

const ProfilePage = () => {
  //ProfilePage renders Profile.
  return (
    <Profile />
  );
};

export default withAuth(ProfilePage);
