import React from "react";
import Carrousel from "./common/carrousel";

import {wall} from '../__test__/data.json'

interface IWall {
    onClick: (value:number)=>void
}

const Wall = (props: IWall) => (
  <div className="wall m-2">
    <p className="title center-text">Paredes</p>
    <Carrousel
      className="flex-column align-items-center h-100"
      vertical
      data={wall}
      onClick={props.onClick}
    />
  </div>
);

export default Wall;
