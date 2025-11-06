import React from "react";
import Location from "./components/location";
import Profile from "./components/profile";
import ProjectsSection from "./components/project";
import Block from "./components/block";
import About from "./components/about";
import ScrollTopButton from "../../layouts/components/ScrollTopButton";

const Blog: React.FC = () => (
  <div>
    <div id="home">
      <Location />
    </div>
    <div id="profile">
      <Profile />
    </div>
    <div id="resume">
      <ProjectsSection />
    </div>
    <div id="blog">
      <Block />
    </div>
    <div id="about" style={{ paddingBottom: "24px" }}>
      <About />
    </div>
    <ScrollTopButton />
  </div>
);

export default Blog;
