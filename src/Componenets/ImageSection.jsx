// import React, { useState } from "react";

// function ImageSection({ images }) {
//   const [img, setImg] = useState(images[0] ? images[0] : null);

//   const changeImage = (index) => {
//     setImg(images[index]);
//   };

//   return (
//     <>
//       <div className="container w-75">
//         <img src={img} alt="" className="img-fluid mb-5" />
//       </div>

//       <div className="d-flex align-items-center gap-3 bg-light border border-danger p-5 rounded mb-5 w-100">
//         {images?.map((val, key) => (
//           <div
//             className={
//               img == images[key]
//                 ? "border border-danger rounded-circle p-2"
//                 : null
//             }
//             onClick={() => changeImage(key)}
//             key={key}
//           >
//             <img
//               className=" rounded-circle img-fluid "
//               src={val}
//               alt={`img-${key}`}
//             />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default ImageSection;



import React, { useState } from 'react';
import { Modal, Carousel } from 'react-bootstrap';

export default function ImageSection({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <>
      <div className="container w-75">
        <div className="">
          {selectedImage && (
            <img src={selectedImage} alt="" className="img-fluid mb-5" />
          )}
          {!selectedImage && images.length > 0 && (
            <div>
              <img
                src={images[0]}
                alt=""
                className="img-fluid mb-5"
                onClick={() => openModal(images[0])}
                style={{ cursor: 'pointer' }}
              />
              <button
                className="btn btn-dark"
                onClick={() => setShowModal(true)}
       
              >
                Click to see more images
              </button>
            </div>
          )}
        </div>
      </div>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <style>
            {`
            .carousel-control-prev-icon,
            .carousel-control-next-icon {
              background-color: black;
            }

            .carousel-control-prev,
            .carousel-control-next {
              width: 10%;
            }
            `}
          </style>
          <Carousel prevLabel="" nextLabel="">
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block mx-auto"
                  src={image}
                  alt={`img-${index}`}
                  style={{ maxHeight: '400px', maxWidth: '100%', objectFit: 'contain' }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}