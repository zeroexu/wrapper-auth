import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function WrapperAppZe(props) {
  return (
    <div >
     Hola {props.name}
    </div>
  );
}

WrapperAppZe.propTypes = {
  name: PropTypes.string
};

export default WrapperAppZe;
