// import React, { useEffect, useState } from 'react';
// import Card from 'react-bootstrap/Card';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useTrail, animated } from 'react-spring';
// import '../style/all.css';

// function CategoriesSection() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios.get('https://dummyjson.com/products/categories').then((json) => setCategories(json.data));
//   }, []);

//   const trail = useTrail(categories.length, {
//     opacity: 1,
//     transform: 'translateX(0)',
//     from: { opacity: 0, transform: 'translateX(-50px)' },
//   });

//   return (
//     <>
//       <div className="container">
//         <div className="my-5">
//           <h1 className="pro">Categories</h1>
//           <p className="text-secondary">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum perferendis ab hic aspernatur facilis cumque accusantium aperiam ullam vel distinctio voluptatum unde veritatis iste veniam molestiae repudiandae. Suscipit, rerum?
//           </p>
//         </div>
//       </div>
//       <div className="row px-5">
//         {trail.map((props, index) => (
//           <animated.div key={categories[index]} style={props} className="col-md-4">
//             <Link className="text-decoration-none" to={`/products/category/${categories[index]}`}>
//               <Card>
//                 <Card.Body style={{ height: '100%', backgroundColor: 'black', color: 'white', objectFit: 'content' }}>
//                   <Card.Title>{categories[index]}</Card.Title>
//                 </Card.Body>
//               </Card>
//             </Link>
//           </animated.div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default CategoriesSection;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ProductPage from '../Pages/ProductPage';
import CategoryPage from '../Pages/CategoryPage';


export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        const categoryNames = response.data;
        const categoryImages = await fetchCategoryImages(categoryNames);
        const categoriesWithImages = categoryNames.map((name, index) => ({
          name: name,
          image: categoryImages[index],
        }));
        setCategories(categoriesWithImages);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const fetchFirstImage = async (category) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
      const firstImage = response.data.products[1]?.thumbnail; // Get the first product's thumbnail image
      return firstImage;
    } catch (error) {
      console.error(`Error fetching first image for category '${category}':`, error);
    }
  };

  const fetchCategoryImages = async (categories) => {
    const categoryImages = await Promise.all(categories.map(category => fetchFirstImage(category)));
    return categoryImages;
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const sortedCategories = categories.sort((a, b) => a.name.localeCompare(b.name));
  const visibleCategories = sortedCategories.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div className="my-5 text-center">
        <h1>Categories</h1>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore
          aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe
          autem?
        </p>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item  active >Products</Breadcrumb.Item>
      </Breadcrumb>
       
      <div className="row">
        {visibleCategories.map((category, index) => (
          <div className="col-md-4 my-3" key={index}>
            <Link className="text-decoration-none" to={`/products/category/${category.name}`}>
              <Card className="bg-white" style={{ width: '300px', height: '300px' }}>
                {category.image && (
                  <Card.Img
                    variant="top"
                    src={category.image}
                    alt={category.name}
                    style={{ width: '150%', height: '80%' }}
                  />
                )}
                <Card.Body>
                  <Card.Title className="text-center color-black">
                    <div>
                      <span style={{ color: 'black' }}>{category.name.toUpperCase().replace('-', ' ')}</span>
                    </div>
                  </Card.Title>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev
            disabled={activePage === 1}
            onClick={() => handlePageChange(activePage - 1)}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === activePage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={activePage === totalPages}
            onClick={() => handlePageChange(activePage + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
}