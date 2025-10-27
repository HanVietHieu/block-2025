import React from "react";
import Location from "./components/location";

const Blog: React.FC = () => (
  <div>
    <div id="home">
      <Location />
    </div>
    <div id="profile" style={{ height: "300px", padding: "40px" }}>
      <h2>Profile Section</h2>
    </div>
    <div id="resume" style={{ height: "100vh", padding: "40px" }}>
      <h2>Resume Section</h2>
    </div>
    <div id="blog" style={{ height: "100vh", padding: "40px" }}>
      <h2>Blog Section</h2>
    </div>
    <div id="about" style={{ height: "100vh", padding: "40px" }}>
      <h2>About Section</h2>
    </div>
  </div>
);

export default Blog;
