import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useTrail, animated } from 'react-spring'
import HeaderSection from '../Componenets/HeaderSection'


function Products() {


  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products))
  }, [])

  const trail = useTrail(products.length, {
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-100%)' },
    config: { mass: 1, tension: 500, friction: 35 }
  });

  return (
    <>
    <HeaderSection/>
      <div className="container">
        <div className="my-5">
          <h1 className='pro'> Products</h1>
          <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum perferendis ab hic aspernatur facilis cumque accusantium aperiam ullam vel distinctio voluptatum unde veritatis iste veniam molestiae repudiandae. Suscipit, rerum?</p>
        </div>
      </div>
      <div className="row px-5">
        {trail.map((style, index) => {
          const val = products[index];
          return (
            <animated.div className="col-md-4" key={val.id} style={style}>
              <Link className='text-decoration-none' to={`/products/${val.id}`}>
                <Card>
                  <Card.Body style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                    <Card.Title>{val.title}</Card.Title>
                    <Card.Img variant="top" src={val.thumbnail} style={{ height: '250px', objectFit: 'fill' }} />
                  </Card.Body>
                </Card>
              </Link>
            </animated.div>
          );
        })}
      </div>
    </>
  )
}

export default Products
