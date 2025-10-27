import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import iconFb from "../../../../assets/img/icon-facebook.jpg";
import iconCrown from "../../../../assets/img/crown.png";
import iconH from "../../../../assets/img/img_H.png";
import iconGlassesimoji from "../../../../assets/img/glassesimoji.png";
import iconThumbup from "../../../../assets/img/thumbup.png";
import type { BannerItem } from "../../../../assets/interface/Blog";

const BANNER_HEADER: BannerItem[] = [
  { srcImg: iconFb, alt: "icon-face" },
  { srcImg: iconCrown, alt: "img-crown" },
  { srcImg: iconH, alt: "img-fiverr" },
  { srcImg: iconGlassesimoji, alt: "img-glassesimoji" },
  { srcImg: iconThumbup, alt: "img-thumbup" },
];

const Location: React.FC = () => {
  return (
    <ContainerHome className="overflow-hidden" id="home">
      <div className="Intro" id="Intro">
        <div className="i-left">
          <div className="i-name">
            <span className="hello">Xin chào! Tôi là</span>
            <span className="full-name">HAN VIET HIEU</span>
            <span className="title">
              Nhà phát triển web có trình độ kinh nghiệm cao trong thiết kế và phát triển web, tạo ra tác phẩm Chất lượng
            </span>
          </div>
        </div>

        <div className="i-right">
          <div className="w-right">
            <motion.div
              initial={{ rotate: 45 }}
              whileInView={{ rotate: 0 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 3.5, type: "spring" }}
              className="w-mainCircle"
            >
              {BANNER_HEADER.map((item, index) => (
                <div className="w-secCircle" key={`banner_${index}`}>
                  <img src={item.srcImg} alt={item.alt} width="120px" />
                </div>
              ))}
            </motion.div>

            <div className="w-backCircle blueCircle" />
            <div className="w-backCircle yellowCircle" />
          </div>
        </div>
      </div>
    </ContainerHome>
  );
};

export default Location;

const ContainerHome = styled.div`
  padding: 3rem;
  position: relative;
  width: 100%;
  min-height: 300px;
  margin: auto;
  background: linear-gradient(-45deg, #ffffff, #ffff99, #e8e8e8, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .title {
    font-size: 18px;
  }

  .container {
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .fullName {
    font-size: 48px;
  }

  .title {
    font-size: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  .full-name,
  .hello {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0;

    .Intro {
      padding-top: 1rem;
    }

    .full-name,
    .hello {
      font-size: 2rem;
    }

    .title {
      font-size: 18px;
    }

    .i-right {
      display: none;
    }
  }

  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding: 1rem;

    .full-name,
    .hello {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 992px) and (min-width: 768px) {
    .i-right {
      scale: 0.8;
    }
  }
`;
