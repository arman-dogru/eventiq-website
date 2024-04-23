import React from 'react';
import './BlogContent.css';

const BlogContent = () => {
    return (
      <div>
        <div>
          <div className="Blog-content-header">
            <h1>
              Help Scout’s Shopify Integration: More Functionality At Your
              Fingertips
            </h1>
            <div className="Blog-content-author">
              <img
                className="Blog-content-author-avatar"
                alt="na"
                src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F6DrDSohI3bjXa4iaZodsY%2F4b16f8742b678badcfecd18df7e402c8%2FHelpScout-Icon-Square-Cobalt.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=328&h=328&s=d4bf1a623b77e92e819ae8f4ec4a150c"
              />
              <h3>Written By Help Scout</h3>
            </div>
          </div>
          <div className="Blog-content">
            <div className="Blog-content-photo">
              <img
                className="Blog-content-photo-img"
                alt=""
                src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1RVJ2iVvloJA4HREaUT3PZ%2F0b52fa36f0d2ceb0820f18507a9f08e1%2Fshopify-deep-dive--post-art-sfw.jpg?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=2257&h=1269&s=d596fde8a0d49b92c119d9f19b609e58"
              />
            </div>
            <p>
              Are you getting the most out of Help Scout’s
              more-powerful-than-ever integration with Shopify?
            </p>
            <p>
              When it comes to your bottom line, every customer interaction
              matters. Making sure your customer support platform integrates
              seamlessly with other tools you use means your team will resolve
              customer concerns more quickly.
            </p>
            <p>
              From accessing order details to processing refunds and
              cancellations all in one place — our new and improved Shopify
              integration enables you to spend less time switching systems and
              more time taking care of customers.
            </p>
            <p>
              Right in your Help Scout sidebar, you’ll get all the context you
              need to craft personalized responses and provide delightful
              support. Beyond order details, you can also see customer lifetime
              value, shipping status, and more.
            </p>
            <div className="Blog-content-box">
              <ol>
                <li>
                  Access details like order status, receipts, tracking, and more
                  — without leaving Help Scout.
                </li>
                <li>Process refunds, cancel orders, and restock items.</li>
                <li>
                  View customer data like lifetime value, average order value,
                  and total order count.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BlogContent;
