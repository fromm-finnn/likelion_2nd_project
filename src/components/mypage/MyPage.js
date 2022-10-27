import React from "react";
import HomeBannerCard from "../home/HomeBannerCard";
import "../../css/MyPage.css";

function MyPage() {
  return (
    <>
      <div className="my-page">
        <img className="profile-img" alt="profile-img" src="" />
        <div className="profile-box">
          <img className="edit-icon" alt="edit-icon" src="" />
          <div className="profile-content-container">
            <div className="profile-content-box">
              <span className="profile-content-title">타이틀</span>
              <span className="profile-content">내용</span>
            </div>
            <div className="profile-content-box">
              <span className="profile-content-title">타이틀</span>
              <span className="profile-content">내용</span>
            </div>
            <div className="profile-content-box">
              <span className="profile-content-title">타이틀</span>
              <span className="profile-content">내용</span>
            </div>
            <div className="profile-content-box">
              <span className="profile-content-title">타이틀</span>
              <span className="profile-content">내용</span>
            </div>
          </div>
        </div>
        <div className="my-page-banner">
          <HomeBannerCard />
          <HomeBannerCard />
          <HomeBannerCard />
        </div>
        <div className="my-chat-box">
          <span className="my-chat">내가 참여한 채팅</span>
          <img className="chat-img" alt="chat-image" src=""></img>
        </div>
      </div>
    </>
  );
}

export default MyPage;
