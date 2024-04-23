import React from "react";
import "./BlogsNav.css";
import { NavLink } from "react-router-dom";

const BlogsNav = () => {
  return (
    <div>
      <div className="Blogs-nav">
        <ul>
          <NavLink>Latest Articles</NavLink>
          <NavLink>Customer Service</NavLink>
          <NavLink>Growth & Culture</NavLink>
          <NavLink>Inside Help Scout</NavLink>
          <NavLink>Support Toolkit</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default BlogsNav;
