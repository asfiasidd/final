// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import ReactStars from 'react-stars'
// import Swal from 'sweetalert2'
// import ImageSection from '../Componenets/ImageSection'





// function ProductPage() {
//   const { productID } = useParams()
//   const [product, setproduct] = useState({})
//   const [review, setReview] = useState("")
//   const [productQuantity, setproductQuantity] = useState(1)

//   const ratingChanged = (newRating) =>
//     setratingStar(newRating);
//   const [ratingstar, setratingStar] = useState(0)

//   const submitReview = () => {
//     const payload = {
//       productID: productID,
//       review: review,
//       rating: ratingstar
//     }
//     console.log(payload)

//     Swal.fire({
//       title: 'Successfully Submited!',
//       text: 'Thanks for reviewing our product',
//       icon: 'success',
//       confirmButtonText: 'Continue Shopping',
//       confirmButtonColor: "#DD6B55"
//     }
//     ).then(() => {
//       setReview(""),
//         setratingStar(0)


//     })

//   }

//   const addToCart = () => {
//     const payload = {
//       ...product,
//       productQuantity,
//       totalPrice: product.price * productQuantity
//     }
//     console.log(payload)
//     Swal.fire({
//       title: 'Added to cart !',
//       text: 'Check Your Cart',
//       icon: 'success',
//       confirmButtonText: 'Continue Shopping',
//       confirmButtonColor: "#DD6B55"
//     }
//     )
//   }


//   useEffect(() => {
//     axios.get(`https://dummyjson.com/products/${productID}`).then(json => setproduct(json.data))
//   })

//   return (<>
//     {/* <div>ProductPage -{productID}</div> */}
//     <div className="container">
//       <div className="text-center my-5">
//         <h1>{product.title} -{product.price}$</h1>
//         <p className="text-secondary">{product.description}</p>
//         <div className='d-flex justify-content-center'>

//           <ReactStars
//             count={5}
//             size={24}
//             edit={false}
//             value={product.rating}
//             color2={'#ffd700'} />
//         </div>

//         <div className="my-3">
//           <button className="btn btn-dark mx-3" disabled={productQuantity > 1 ? false : true} onClick={() => setproductQuantity(productQuantity - 1)}> -</button>
//           {productQuantity}
//           <button className="btn btn-dark mx-3" onClick={() => setproductQuantity(productQuantity + 1)}>+</button>
//         </div>

//         <button className='btn btn-warning' onClick={addToCart}> Add To Cart</button>

//       </div>
//       <div className="row ">
//         <div className="col-md-6 ">


//           {
//             product?.images?.length > 0 && <ImageSection images={product.images} />
//           }




//           {/* {
// product?.images?.map((val, key) => 
// <div key={key}>{val}</div>
// )
// }
//  */}

//         </div>

//         <div className="col-md-6">
//           <div className="container">
//             <div className='mb-5'>
//               <h2 className="text-center">Review Us</h2>
//               <p className="  text-center text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ea!</p>
//             </div>

//             <div>
//               <div className="form-floating">
//                 <textarea
//                   className="form-control"
//                   placeholder="Leave a comment here"
//                   id="floatingTextarea2"
//                   style={{ height: 100 }}
//                   defaultValue={""}
//                   onChange={(e) => setReview(e.target.value)}
//                 />
//                 <label htmlFor="floatingTextarea2">Comments</label>
//               </div>

//               <div className='mt-3'>
//                 Rate Us:
//                 <div className="d-flex -center">

//                   <ReactStars
//                     count={5}
//                     size={24}
//                     value={ratingstar}
//                     onChange={ratingChanged}
//                     color2={'#ffd700'} />
//                   <span className='ms-3'>({ratingstar})</span>

//                 </div>
//               </div>
//               <button className='my-3 btn btn-dark' onClick={submitReview}>Submit Review</button>
//             </div>


//           </div>

//         </div>
//       </div>
//     </div></>
//   )
// }

// export default ProductPage


import React, { useEffect, useReducer, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactStars from 'react-stars';
import Swal from 'sweetalert2';
import ImageSection from '../Componenets/ImageSection';
import { CartContext } from '../Context/addtocart/Context';

export default function ProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [review, setReview] = useState('');
  const [ratingStar, setRatingStar] = useState(0);
  const { addToCart } = useContext(CartContext);

  const ratingChanged = (newRating) => {
    setRatingStar(newRating);
  };

  const submitReview = () => {
    const payload = {
      productID: productID,
      review: review,
      rating: ratingStar
    };

    console.log(payload);

    Swal.fire({
      title: 'Successfully Submitted!',
      text: 'Thanks for reviewing our product',
      icon: 'success',
      confirmButtonText: 'Continue Shopping'
    });

    setReview('');
    setRatingStar(0);
  };
  const counterCallback = (state, action) => {
    switch (action.type) {
      case "INCREASE_COUNT":
        return { ...state, count : state.count + 1 }
        
        case "DECREASE_COUNT":
          return { ...state, count : state.count > 1 ? state.count - 1 : 1 }
      default:
    return state;
    }

  }
  const data = {
count: 1
  }
  const [state, dispatch] = useReducer(counterCallback, data)
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${productID}`).then((json) => setProduct(json.data));
  }, []);

  return (
    <>
      <div className="text-center my-5 ">
        <h1 style={{ marginTop: '100px' }}>
          {product.title} - {product.price}$
        </h1>
        <p className="text-secondary">{product.description}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <div className="product-image  ">
              {product?.images?.length > 0 && <ImageSection images={product.images} />}
            </div>

            <div className="d-flex justify-content-center my-3">
              <ReactStars count={5} size={24} edit={false} value={product.rating} color2={'#ffd700'} />
            </div>

            <div className="d-flex justify-content-center my-3">
            <div className="d-flex justify-content-center my-3">
  <button className='btn btn-dark mx-3' onClick={() => dispatch({type : "INCREASE_COUNT"})}>+</button>
{state.count}
<button className='btn btn-dark mx-3' onClick={() => dispatch({type : "DECREASE_COUNT"})}>-</button>

</div>   
            </div>

            <div className="d-flex justify-content-center my-3">
              <button className="btn btn-dark " onClick={() => addToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>

          <div className="col-md-12 my-5">
            <div className="container">
              <div className="mb-5">
                <h2 className="text-center">Reviews Us</h2>
                <p className="text-center text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, sed.
                </p>
              </div>

              <div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: 100 }}
                    defaultValue={review}
                    onChange={(e) => setReview(e.target.value)}
                  />
                  <label htmlFor="floatingTextarea2">Comments</label>
                </div>

                <div className="mt-3">
                  Rate Us :
                  <div className="d-flex align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={ratingStar}
                      onChange={ratingChanged}
                      color2={'#ffd700'}
                    />
                    <span className="ms-3">({ratingStar})</span>
                  </div>
                </div>
                <button className="my-3 btn btn-dark" onClick={submitReview}>
                  Submit review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
