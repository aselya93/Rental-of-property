
import React, { useState } from 'react';
import { axiosInstance } from '../../axiosInstance'


function RentaUpdate({renta, setRenta}) {
const [category_id, setCategory_id] = useState(renta.category_id)
const [title, setTitle] = useState(renta.title)
const [price, setPrice] = useState(renta.price)
const [description, setDescription] = useState(renta.description)
const [photo, setPhoto] = useState(renta.photo)
const [location, setLocation] = useState(renta.location)



const onHandleUpdate = async (el) => {
    try {
        el.preventDedault()
        if(
            category_id.trim() === '' ||
            title.trim() === '' ||
            price.trim() === '' ||
            description.trim() === '' ||
            photo.trim() === '' ||
            location.trim() === '' 
        ) {
            setError("Заполни по-братски, да !!!")
            return;
        }
        const response = await axiosInstance.put(`/renta/${renta.id}`, {
            category_id,
            title,
            price,
            description,
            photo,
            location,
        })
        if(response.status === 200) {
            setRenta((prev) => 
            prev.map((el) => 
            el.id === response.data.renta.id ? responce.data.renta : el
        )
    )
    setError(null)
    return;
        }
    } catch (error) {
        console.log(error)
    }
}

    return (
        <div>
        {error && <p>{error}</p>}
        <form onSubmit={onHandleUpdate} className="updateForm">
        <input
            type="text"
            placeholder="Добавить фото"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="update-form__input"
          />
             <input
            type="text"
            placeholder="Добавить категорию"
            value={category_id}
            onChange={(e) => setCategory_id(e.target.value)}
            className="update-form__input"
          />
          <input
            type="text"
            placeholder="Добавить название"
            maxLength={40}
            value={title}
            onChange={(el) => setTitle(el.target.value)}
            className="update-form__input"
          />
          <input
            type="text"
            placeholder="Добавить цену"
            maxLength={20}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="update-form__input"
          />
          <input
            type="text"
            placeholder="Добавить категорию"
            maxLength={40}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="update-form__input"
          />
          <input
            type="url"
            placeholder="Добавить локацию"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="update-form__input"
          />
  
          <button type="submit">Редактирование</button>
        </form>
      </div>
    );
}

export default RentaForAdmin;