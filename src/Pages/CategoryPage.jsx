import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {Link} from 'react-router-dom'
// import '../style/all.css'
import '../style/category.css';
function CategoryPage() {

const {categoryName} = useParams()
const [ products,Setproducts] =useState([])


useEffect(()=>{
axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json=> Setproducts(json.data.products))
},[categoryName])


return (
<div className="container">
<div className="my-5 text-center">
<h1> {categoryName.toUpperCase()} </h1>
<p className="pro white-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, quas quam. Molestias voluptatibus doloribus beatae quo debitis iure commodi tempora quis eius delectus veritatis sint accusantium dolor, eveniet nesciunt sed ducimus obcaecati quisquam nobis, neque saepe repellendus? Aperiam et ab laudantium ea adipisci, mollitia autem labore. Obcaecati quae iure inventore.</p>
</div>

<div className="row">
  {products.map((val, key) => (
    <div className="col-md-6 my-4 object-" key={key}>
      <Link className="text-decoration-none" to={`/products/${val.id}`}>
        <Card style={{ width: '100%',height: '450px', backgroundColor: 'black', color: 'white' }}>
          <Card.Img variant="top" src={val.thumbnail} style={{ height: '250px', objectFit: 'fill' }} />
          <Card.Body>
            <Card.Title>{val.title} - {val.price}$</Card.Title>
            <Card.Text>
              {val.description}
            </Card.Text>
            <Button variant="primary">View Product</Button>
          </Card.Body>
        </Card>
      </Link>
    </div>
  ))}
</div>


</div>
)
}

export default CategoryPage