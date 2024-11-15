/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import RentaUpdate from './RentaUpdate';


function RentaCard({renta, setRenta}) {

const [view, setView] = useState(false); 
const { user } = props;

const handleView = () => {
  setView((prev) => !prev);
};

const handleDelete = async () => {
  try {
    const response = await axiosInstance.delete(`/renta/${renta.id}`);
    if (response.status === 200) {
      setRenta((prev) => prev.filter((el) => el.id !== renta.id));
    }
  } catch (error) {
    console.log(error);
  }
};

    return (
      <div className="renta-item">
      <p>{renta.title}</p>
      <p className="renta_description">Описание {renta.description}</p>
      <img
        src={`${renta.photo}`}
        alt="photo"
        className="rentaImage"
      />
      {user?.id === renta.userId ? (
        <button onClick={handleDelete}>Удалить</button>
      ) : null}
      {user?.id === renta.userId ? (
        <button
          style={{ background: `${view ? "red" : "green"}`, color: "purple" }}
          onClick={handleView}
        >
          {view ? "закрыть" : "показать"}
        </button>
      ) : null}
      {view && <RentaUpdate renta={renta} setRenta={setRenta} />}
    </div>
    )
}

export default RentaCard;