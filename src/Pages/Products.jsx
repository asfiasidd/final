// import React, { useEffect, useState } from 'react'
// import Card from 'react-bootstrap/Card';
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import { useTrail, animated } from 'react-spring'
// import HeaderSection from '../Componenets/HeaderSection'


// function Products() {


//   const [products, setProducts] = useState([])
//   useEffect(() => {
//     axios.get('https://dummyjson.com/products').then(json => setProducts(json.data.products))
//   }, [])

//   const trail = useTrail(products.length, {
//     opacity: 1,
//     transform: 'translateX(0)',
//     from: { opacity: 0, transform: 'translateX(-100%)' },
//     config: { mass: 1, tension: 500, friction: 35 }
//   });

//   return (
//     <>
//     <HeaderSection/>
//       <div className="container">
//         <div className="my-5">
//           <h1 className='pro'> Products</h1>
//           <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, eum perferendis ab hic aspernatur facilis cumque accusantium aperiam ullam vel distinctio voluptatum unde veritatis iste veniam molestiae repudiandae. Suscipit, rerum?</p>
//         </div>
//       </div>
//       <div className="row px-5">
//         {trail.map((style, index) => {
//           const val = products[index];
//           return (
//             <animated.div className="col-md-4" key={val.id} style={style}>
//               <Link className='text-decoration-none' to={`/products/${val.id}`}>
//                 <Card>
//                   <Card.Body style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
//                     <Card.Title>{val.title}</Card.Title>
//                     <Card.Img variant="top" src={val.thumbnail} style={{ height: '250px', objectFit: 'fill' }} />
//                   </Card.Body>
//                 </Card>
//               </Link>
//             </animated.div>
//           );
//         })}
//       </div>
//     </>
//   )
// }

// export default Products


import React, { useEffect, useState } from 'react';
import CategoriesSection from '../Componenets/CategoriesSection';
import { Spinner } from 'react-bootstrap';
export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentDate = new Date().getTime();
      const launchDate = new Date('November 18, 2023 12:00:00').getTime();
      const duration = launchDate - currentDate;

      if (duration < 0) {
        clearInterval(timer);
      } else {
        const dayCount = Math.floor(duration / (1000 * 60 * 60 * 24));
        const hourCount = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minuteCount = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
        const secondCount = Math.floor((duration % (1000 * 60)) / 1000);

        setDays(dayCount.toString().padStart(2, '0'));
        // setHours(hourCount.toString().padStart(2, '0'));
        setHours(((dayCount * 24) + hourCount).toString().padStart(2, '0'));

        setMinutes(minuteCount.toString().padStart(2, '0'));
        setSeconds(secondCount.toString().padStart(2, '0'));
      }
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Change the delay value as desired (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div id="coming-soon">
        <div className="wrapper ">
          <div className="custom-title mt-5">
            Our new category is <span>Coming soon</span>, stay connected with us!
          </div>
          <form action="#" className="custom-form">
            <div className="custom-email-field">
              <input type="email" placeholder="Enter Email Address" required="" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
          <div className="custom-count-down">
            <div className="custom-timer custom-day">
              <div className="custom-count">
                <div className="numb">{days}</div>
                <div className="custom-text">Days</div>
              </div>
            </div>
            <div className="custom-clone">:</div>
            <div className="custom-timer custom-hour">
              <div className="custom-count">
                <div className="numb">{hours}</div>
                <div className="custom-text">Hours</div>
              </div>
            </div>
            <div className="custom-clone">:</div>
            <div className="custom-timer custom-min">
              <div className="custom-count">
                <div className="numb">{minutes}</div>
                <div className="custom-text">Minutes</div>
              </div>
            </div>
            <div className="custom-clone">:</div>
            <div className="custom-timer custom-sec">
              <div className="custom-count">
                <div className="numb">{seconds}</div>
                <div className="custom-text">Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="loader">
          <Spinner animation="grow" />
        </div>
      ) : (
        <CategoriesSection />
      )}
    
    </>
  );
}