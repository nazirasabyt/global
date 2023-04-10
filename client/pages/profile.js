import React from "react";
import AppLayout from "../components/Layout/AppLayout";
import Profile from "../components/Profile/Profile";
import { getLocalStorageAuth } from "../utils/helpers";

const ProfilePage = () => {
  return (
    <AppLayout>
      <main className='mb-40'>
        <Profile />
      </main>
    </AppLayout>
  );
};

export default ProfilePage;

export async function getServerSideProps({ req }) {
  const auth = getLocalStorageAuth(req);
  if (!auth.jwt) {
    return {
      redirect: {
        destination: "/",
      },
    };
  } else {
  }
}
