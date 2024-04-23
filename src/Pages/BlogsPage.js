import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BlogsPage.css";
import { FaArrowRightLong } from "react-icons/fa6";
import BlogImage1 from "../Assets/BlogImage1.jpg";
import BlogImage2 from "../Assets/BlogImage2.jpg";
import BlogImage3 from "../Assets/BlogImage3.jpg";
import BlogImage4 from "../Assets/BlogImage4.jpg";

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Blogs = [
    {
      title: "Pioneering the Future of Engagement.",
      image: BlogImage1,
      link: "/page1",
    },
    {
      title: "How Technology is Transforming Event Management with Eventiq",
      image: BlogImage2,
      link: "/page2",
    },
    {
      title: " Community Building is the New Marketing Frontier",
      image: BlogImage3,
      link: "/page3",
    },
    {
      title: " Navigating the market in 2024.",
      image: BlogImage4,
      link: "/page4",
    },
  ];
  return (
    <div>
      {/* <BlogContent/> */}
      <div className="Blogs-header">
        <h1>NEWSROOM</h1>
        <h4>Stay Updated!</h4>
      </div>
      <div className="Blogs">
        {Blogs.map((blog) => (
          <Link to={blog.link} style={{ textDecoration: 'none' }}>
            <div className="Blogs-card">
              <div className="Blogs-card-img">
                <img src={blog.image} alt="" />
                <div className="Blogs-link">
                  <div className="Link-arrow">
                    <FaArrowRightLong size={70} />
                  </div>
                </div>
              </div>
              <div className="Blogs-card-text">{blog.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
