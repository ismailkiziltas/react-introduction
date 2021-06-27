import React from "react";

const Content = () => {
  return (
      <>
    <div className="menu-card">
      <img
        src="https://via.placeholder.com/400x500"
        alt=""
        className="h-full rounded mb-20 shadow"
      />
      <div className="content-center">
          <h2 className="text-2xl mb-2">Placeholder 400x500</h2>
          <p className="mb-2">Description</p>
          <span>$16</span>
      </div>
    </div>
    <div className="menu-card">
      <img
        src="https://via.placeholder.com/400x500"
        alt=""
        className="h-full rounded mb-20 shadow"
      />
      <div className="content-center">
          <h2 className="text-2xl mb-2">Placeholder 400x500</h2>
          <p className="mb-2">Description</p>
          <span>$26</span>
      </div>
    </div>
    </>
  );
};

export default Content;
