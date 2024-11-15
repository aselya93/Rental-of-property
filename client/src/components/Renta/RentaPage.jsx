/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosInstance";
import RentaCard from "./RentaCard";

function RentaPage({user}) {
  const [renta, setRenta] = useState([]); // Массив для хранения данных аренды

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get("/renta");
        setRenta(data.rentaCard);
        console.log(data);
      } catch (error) {
        console.error("Ошибка, сорян:", error);
      }
    };
    fetchData();
  }, []);

  console.log(renta);
  

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {renta?.map((item) => (
        // <div className="col">
        //   <div className="card h-100">
        //     <img src={item.photo} className="card-img-top" alt={item.title} />
        //     <div className="card-body">
        //       <h5 className="card-title">{item.title}</h5>
        //       <h6 className="card-title">{item.price}</h6>
        //       <p className="card-text">{item.description}</p>
        //     </div>
        //     <div className="card-footer">
        //       <small className="text-body-secondary">{item.location}</small>
        //     </div>
        //   </div>
        // </div>
        <RentaCard key={item.id} renta={item} setRenta={setRenta} user={user}/>
        // <span key={item.id}>{item.title}</span>
      ))}
    </div>
  );
}

export default RentaPage;
