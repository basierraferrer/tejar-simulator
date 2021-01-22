import React from "react";

interface IData {
  path: string;
  description: string;
  id: number;
}

interface ICarrousel {
  className?: string;
  vertical?: boolean;
  data: IData[];
  onClick:(value:number)=>void
}

const Carrousel = (props: ICarrousel) => {
  const margin = props.vertical ? "m-auto" : "";
  const centerText = margin ? 'align-items-center' : '';
  const [activeItem,setActiveItem] = React.useState(0); 
  const handleOnClick = (newVal: number)=>{
     props.onClick(newVal);
      setActiveItem(newVal);
  }  

  React.useEffect(()=>{
    props.data.length && handleOnClick(props.data[0].id)
  },[])

  return (
    <div className={`d-flex ${props.className}`}>
      {props.data.map((item,index) => {
        return (
          <button
            className={`d-flex flex-column no-btn ${margin} ${centerText}`}
            onClick={() => handleOnClick(item.id)}
          >
            <img
              className={`img-size rounded-circle ${
                activeItem === item.id ? "btn-selected" : ""
              }`}
              src={`/${item.path}`}
              alt={item.description}
            />
            <span>{item.description}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Carrousel;
