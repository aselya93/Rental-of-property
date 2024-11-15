import React, {useState} from 'react';
import  axiosInstance  from '../../axiosInstance'


function RentaFormAdd({ setRenta }) {

    const [category_id, setCategory_id] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
   const [photo, setPhoto] = useState('')
    const [location, setLocation] = useState('')
    const [error, setError] = useState(null);

    const onHandleSubmit = async (el) => {
        try {
            el.preventDefault()
            // if(
            //     category_id.trim() === '' ||
            //     title.trim() === '' ||
            //     price.trim() === '' ||
            //     description.trim() === '' ||
            //     photo.trim() === '' ||
            //     location.trim() === '' 
            // ) {
            //     setError("Заполни по-братски")
            //     return;
            // }
            const response = await axiosInstance.post(`/renta/`, {
                category_id,
                title,
                price,
                description,
                photo,
                location,
            })
            if(response.status === 201) {
                setRenta((prev) => [...prev, response.data.renta]);
                setCategory_id('');
                setTitle('');
                setPrice('');
                setDescription('');
                setPhoto('')
                setLocation('')
                return;                
            }
        } catch (error) {
            console.log(error)
            setError("У тебя нет прав, чел :( ")
        }
    }
    
    return (
        <div>
        {error && <p>{error}</p>}
        <form onSubmit={onHandleSubmit} className="add-form">
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

        <button type="submit">Добавление</button>
      </form>
    </div>
    );
}

export default RentaFormAdd;