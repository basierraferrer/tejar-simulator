import React from 'react'

import {enviorement} from '../__test__/data.json'

interface IEnviorement{
    imageSelected:string
}

const Enviorement = ({imageSelected}:IEnviorement) => {
    const enviorementSelected = enviorement && enviorement.length && enviorement.find(item=>{
        const path = item.path
        const splitPath = path.split('/')
        const lastPart = splitPath[splitPath.length - 1].split(".")[0];
        return lastPart === imageSelected && item;
    })
    
    return (
      <div
        className={`enviorement-size ${
          !enviorementSelected && "justify-content-center"
        }`}
      >
        {enviorementSelected ? (
          <img
            className="enviorement-size"
            src={`/${enviorementSelected.path}`}
            title={enviorementSelected.description}
            alt={enviorementSelected.description}
          />
        ) : (
          <img
            className="mx-auto d-block"
            src="/enviorement/no-image.png"
            title=""
            alt=""
          />
        )}
      </div>
    );
}

export default Enviorement