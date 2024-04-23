import React, { useEffect } from "react";
import FAQ from "../components/FAQ";
import FaqHeader from "../components/FaqHeader/FaqHeader";

const FaqPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <FaqHeader />
      <FAQ />
    </div>
  );
};

export default FaqPage;
