import React from "react";
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDb from "./LastMovieInDb";

function ContentRowTop() {
  return (
    <div className="container-fluid">
      <div
        className="
      d-sm-flex
      align-items-center
      justify-content-between
      mb-4
    "
      >
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      {/* <!-- Content Row Movies--> */}
      <ContentRowMovies
        data={[
          {
            colorDeBorde: "primary",
            titulo: "Movies in Data Base",
            cifra: 21,
            icono: "film",
          },
          {
            colorDeBorde: "success",
            titulo: "Total awards",
            cifra: 79,
            icono: "award",
          },
          {
            colorDeBorde: "warning",
            titulo: "Actors quantity",
            cifra: 49,
            icono: "user",
          },
        ]}
      />
      {/* <!-- End movies in Data Base --> */}

      {/* <!-- Content Row Last Movie in Data Base --> */}
      <LastMovieInDb />
    </div>
  );
}

export default ContentRowTop;
