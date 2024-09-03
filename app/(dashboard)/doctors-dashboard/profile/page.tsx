import PageContainer from "@/components/global/page-container";
import Profile from "@/components/global/profile";
import React from "react";

const ProfilePage = () => {
  return (
    <PageContainer>
      <div className="max-w-[800px]">
        <Profile />
      </div>
    </PageContainer>
  );
};

export default ProfilePage;
