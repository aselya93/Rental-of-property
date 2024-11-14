import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';


function RentaCard(props) {

// const [category, setCategory] = useState('')
// const [title, setTitle] = useState('')
// const [price, setPrice] = useState('')
// const [description, setDescription] = useState('')
// const [photo, setPhoto] = useState('')
// const [location, setLocation] = useState('')

const [renta, setRenta] = useState([]); // Массив для хранения данных аренды

useEffect(() => {

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('/renta');
      setRenta(response.data.RentaCard); 
    } catch (error) {
      console.error('Ошибка, сорян:', error);
    }
  };
  fetchData();
}, []);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            
        <div className="col">
          <div className="card h-100">
            <h1>hfy</h1>
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <h6 className="card-title">Price</h6>
              <p className="card-text">Our description</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Location</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          <h1>hfy</h1>
            <div className="card-body">
              <h5 className="card-title"> title</h5>
              <h6 className="card-title">Price</h6>
              <p className="card-text">Our description</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Location</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
          <h1>hfy</h1>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-title">Price</h6>
              <p className="card-text">Our description</p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Location</small>
            </div>
          </div>
        </div>
      </div>
      
    )
}

export default RentaCard;