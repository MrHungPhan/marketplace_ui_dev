import React from "react";
import BannerImg from "../../../images/banner.png";
import { BsSearch } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="top-banner" style={{ background: `url(${BannerImg})` }}>
      <div className="top-banner__content">
        <h2 className="banner-title">Free market</h2>
        <p className="banner-subtitle">
          모든 NFT를 자유롭게 거래할 수 있습니다. 높은 성장 잠재력을 가진
          프로젝트를 찾아보세요.
        </p>
        <div className="group-search">
          <BsSearch size={20} />
          <input type="text" placeholder="Search NFT Collection of Single" />
        </div>
        <p className="group-search_desc">
          Trending : time, crypto punks, azuki, clone x
        </p>
      </div>
    </div>
  );
};

export default Banner;
