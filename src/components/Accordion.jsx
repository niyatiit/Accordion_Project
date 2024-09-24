import React, { useEffect, useState } from "react";
import faqq from "../Api/Frq.json";
import FAQ from "./UI/FAQ";

function Accordion() {
  const [data, setdata] = useState([]);
  const [activeId, setActiveId] = useState(false);

   const handlebutton = (id) =>{
     setActiveId((prevId)=>(prevId === id ? false : id));
 
   }

  useEffect(() => {
    setdata(faqq);
  }, []);
  return (
    <>
      <h1> The Accordion </h1>
      <ul className="section-accordion">
        {data.map((item) => {
          return (
            <FAQ
              key={item.id}
              currElement={item}
              isActive={activeId === item.id}
              isToggle={() => handlebutton(item.id)}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Accordion;
