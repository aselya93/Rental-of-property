/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import RentaUpdate from './RentaUpdate';


function RentaCard({renta, setRenta, user}) {

const [view, setView] = useState(false); 

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
  <div className="renta-item card mb-3">
    <img
      src={`${renta.photo}`}
      alt="photo"
      className="card-img-top rentaImage"
    />
    <div className="card-body">
      <h5 className="card-title">{renta.title}</h5>
      <h6 className="card-text renta_description">{renta.price} рублей</h6>
      <p className="card-text renta_description">{renta.location}</p>
      <p className="card-text renta_description">{renta.description}</p>
      {user.isAdmin && (
        <button type="button" className="btn btn-danger" onClick={handleDelete}>Удалить</button>
      )}
      {user.isAdmin && (
        <button
          className="btn btn-pastel-edit"
          style={{ background: `${view ? "#77dd77" : "#77dd77"}` }}
          onClick={handleView}
        >
          {view ? "Закрыть" : "Редактировать"}
        </button>
      )}
      {view && <RentaUpdate renta={renta} setRenta={setRenta} />}
    </div>
  </div>
);
};
//     return (
//       <div className="renta-item">
//       <p>{renta.title}</p>
//       <p className="renta_description">Описание {renta.description}</p>
//       <img
//         src={`${renta.photo}`}
//         alt="photo"
//         className="rentaImage"
//       />
//       {user.isAdmin ? (
//         <button onClick={handleDelete}>Удалить</button>
//       ) : null}
//       {user.isAdmin ? (
//         <button
//           style={{ background: `${view ? "red" : "green"}`, color: "purple" }}
//           onClick={handleView}
//         >
//           {view ? "Закрыть" : "Редактировать"}
//         </button>
//       ) : null}
//       {view && <RentaUpdate renta={renta} setRenta={setRenta} />}
//     </div>
//     )
// }

export default RentaCard;