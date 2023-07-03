import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTrail, animated } from 'react-spring';
import '../style/all.css';

function CategoriesSection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories').then((json) => setCategories(json.data));
  }, []);

  const trail = useTrail(categories.length, {
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-50px)' },
  });

  return (
    <>
      <div className="container">
        <div className="my-5">
          <h1 className="pro">Categories</h1>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum perferendis ab hic aspernatur facilis cumque accusantium aperiam ullam vel distinctio voluptatum unde veritatis iste veniam molestiae repudiandae. Suscipit, rerum?
          </p>
        </div>
      </div>
      <div className="row px-5">
        {trail.map((props, index) => (
          <animated.div key={categories[index]} style={props} className="col-md-4">
            <Link className="text-decoration-none" to={`/products/category/${categories[index]}`}>
              <Card>
                <Card.Body style={{ height: '100%', backgroundColor: 'black', color: 'white', objectFit: 'content' }}>
                  <Card.Title>{categories[index]}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </animated.div>
        ))}
      </div>
    </>
  );
}

export default CategoriesSection;
