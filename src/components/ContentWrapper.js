import React from "react";
import Topbar from "./Topbar";
import ContentRowTop from "./ContentRowTop";
import Chart from "./Chart";
import Footer from "./Footer";

function ContentWrapper() {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Topbar --> */}
        <Topbar />
        {/* <!-- End of Topbar --> */}

        {/* <!-- Content Row Top --> */}
        <ContentRowTop />
        {/* <!--End Content Row Top--> */}
        <Chart />
        {/* <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}
      </div>
      {/* <!-- End of MainContent --> */}
    </div>
  );
}

export default ContentWrapper;
