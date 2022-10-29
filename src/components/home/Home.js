import React from "react";
import HomeBannerCard from "./HomeBannerCard";
import HomeBoardCard from "./HomeBoardCard";
import "../../css/Home.css";
import main_search_icon from "../../images/main-search-icon.png";
import find_roommates_img from "../../images/find-roommates.svg";
import share_board_img from "../../images/share-board.svg";
import suggestion_board_img from "../../images/suggestion-board.svg";
import together_board_img from "../../images/together-board.svg";
import information_board_img from "../../images/information-board.svg";
import free_board_img from "../../images/free-board.svg";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home-top">
          <div>
            <span className="dorm-title">명륜학사</span>
            <span className="dorm-subtitle">E하우스</span>
          </div>
          <div>
            <button className="btn-m">명륜</button>
            <button className="btn-b">봉룡</button>
          </div>
        </div>
        <div className="home-search">
          <input
            className="home-search-input"
            type="text"
            placeholder="검색어를 입력하세요"
          />
          <img className="home-search-icon" src={main_search_icon} />
        </div>
        <div className="home-middle">
          <div className="upper-card">
            <HomeBoardCard title="공지사항"/>
          </div>
          <div className="upper-card">
            <HomeBoardCard title="기숙사 식당" subtitle="E하우스"/>
          </div>
        </div>

        <div className="home-banner">
          <HomeBannerCard title="자유게시판" img={free_board_img} />
          <HomeBannerCard title="정보게시판" img={information_board_img} />
          <HomeBannerCard title="건의게시판" img={suggestion_board_img} />
          <HomeBannerCard title="공구게시판" img={together_board_img} />
          <HomeBannerCard title="나눔게시판" img={share_board_img} />
          <HomeBannerCard title="룸메 찾아요" img={find_roommates_img} />
        </div>

        <div className="home-bottom">
          <div className="lower-card">
            <HomeBoardCard title="인기게시글"/>
          </div>
          <div className="lower-card">
            <HomeBoardCard title="기숙사 정보"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
