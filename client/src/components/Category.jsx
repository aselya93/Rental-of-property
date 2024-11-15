import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function Category() {

    const [categorys, setCategory] = useState([
        {
            id: 1,
            name: 'Комната'
        },
        {
            id: 2,
            name: 'Квартира'
        },
        {
            id: 3,
            name: 'Дома'
        }
    ]);

    return (
        <>
        <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-expanded="false">
            Категории
        </Link>
          <ul className="dropdown-menu">
            {categorys.map((category) => (<li>
              <a className="dropdown-item" href="#">
                {category.name}
              </a>
            </li>))}
          </ul>
        </>
    );
}

export default Category;