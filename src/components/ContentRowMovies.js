import React from "react";
import SmallCard from "./SmallCard";
import PropTypes from "prop-types";

function ContentRowMovies(props) {
  return (
    <div className="row">
      {props.data.map((oneData, i) => {
        return (
          <SmallCard
            key={oneData + i}
            cardInfo={oneData}
            // colorDeBorde
            // titulo={oneData.titulo}
            // cifra={oneData.cifra}
            // icono={oneData.icono}
          />
        );
        // return (
        //   <div key={oneData + i} className="col-md-4 mb-4">
        //     <div
        //       className={`card border-left-${oneData.colorDeBorde} shadow h-100 py-2`}
        //     >
        //       <div className="card-body">
        //         <div className="row no-gutters align-items-center">
        //           <div className="col mr-2">
        //             <div
        //               className={`text-xs font-weight-bold text-${oneData.colorDeBorde} text-uppercase mb-1`}
        //             >
        //               {oneData.titulo}
        //             </div>
        //             <div className="h5 mb-0 font-weight-bold text-gray-800">
        //               {oneData.cifra}
        //             </div>
        //           </div>
        //           <div className="col-auto">
        //             <i
        //               className={`fas fa-${oneData.icono} fa-2x text-gray-300`}
        //             ></i>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // );
      })}

      {/* esto con componente del recuadro */}
      {/* <!-- Movies in Data Base --> */}
      {/* <BoxRowMovies
        colorDeBorde="primary"
        titulo="Movies in Data Base"
        cifra="21"
        icono="film"
      /> */}
      {/* <!-- Total awards --> */}
      {/* <BoxRowMovies
        colorDeBorde="success"
        titulo="Total awards"
        cifra="79"
        icono="award"
      /> */}
      {/* <!-- Actors quantity --> */}
      {/* <BoxRowMovies
        colorDeBorde="warning"
        titulo="Actors quantity"
        cifra="49"
        icono="user"
      /> */}
    </div>
  );
}

// ContentRowMovies.propTypes = {
//   data: PropTypes.shape([
//     {
//       colorDeBorde: PropTypes.string.isRequired,
//       titulo: PropTypes.string.isRequired,
//       cifra: PropTypes.number.isRequired,
//       icono: PropTypes.oneOf(["primary", "success", "warning"]).isRequired,
//     },
//   ]),
// };

ContentRowMovies.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      colorDeBorde: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      cifra: PropTypes.number.isRequired,
      icono: PropTypes.oneOf(["film", "award", "user"]).isRequired,
    })
  ),
};

// ContentRowMovies.defaultProps = {
//     data: [
//       {
//         colorDeBorde: "warning",
//         titulo: "No hay título",
//         cifra: 0,
//         icono: "film",
//       },
//     ],
//   };

export default ContentRowMovies;
