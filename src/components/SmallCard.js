import React from "react";
import PropTypes from "prop-types";

function SmallCard({ cardInfo }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className={`card border-left-${cardInfo.colorDeBorde} shadow h-100 py-2`}
      >
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${cardInfo.colorDeBorde} text-uppercase mb-1`}
              >
                {cardInfo.titulo}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {cardInfo.cifra}
              </div>
            </div>
            <div className="col-auto">
              <i className={`fas fa-${cardInfo.icono} fa-2x text-gray-300`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

SmallCard.propTypes = {
  cardInfo: PropTypes.shape({
    colorDeBorde: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    cifra: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icono: PropTypes.oneOf(["film", "award", "user"]).isRequired,
  }),
};

SmallCard.defaultProps = {
  colorDeBorde: "warning",
  titulo: "No hay título",
  cifra: 0,
  icono: "film",
};

export default SmallCard;
