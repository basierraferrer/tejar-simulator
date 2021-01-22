import React from "react";
import Carrousel from "./common/carrousel";

import { floor } from "../__test__/data.json";

interface IFloor {
  onClick: (value: number) => void;
}

const Floor = (props: IFloor) => (
  <div className="floor mt-2">
    <p className="title start-text">Pisos</p>
    <Carrousel
      className="justify-content-around"
      data={floor}
      onClick={props.onClick}
    />
  </div>
);

export default Floor;
