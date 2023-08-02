// import React from 'react'
// import HeaderSection from '../Componenets/HeaderSection'
// import CategoriesSection from '../Componenets/CategoriesSection'
// import ContactForm from '../Componenets/ContactForm'
// import AboutUs from '../Componenets/AboutUS'

// function Home() {
//   return (
//   <>
//   <HeaderSection/>
//   <AboutUs/>
//   <CategoriesSection/>
//   <ContactForm/>
//   </>
//   )
// }

// export default Home

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1633934542430-0905ccb5f050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1585960622850-ed33c41d6418?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>

      <>
        {/*Best Sallers*/}

        <section className="products">
          <div
            className="container-fluid my-5"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div>
              <h2 className="text-center col-sm-12 glowing-text">
                Best Sellars
              </h2>
              <hr className="w-25 m-auto" />
            </div>
          </div>
        </section>

        {/*Our Best Selers cards*/}

        <div id="arrival">
          <div className="many-row">
            <div>
              <div className="responsive-card">
                <div className="responsive-imgbox">
                  <img
                    src="https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    className="responsive-img"
                  />
                </div>
                <div className="responsive-content">
                  <h2>High heels</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h5 className="card__price">Price: Rs: 6000</h5>
                </div>
              </div>
            </div>
            <div>
              <div className="responsive-card">
                <div className="responsive-imgbox">
                  <img
                    src="https://media.istockphoto.com/id/1216928523/photo/elegant-jewelry-set-of-white-gold-ring-necklace-and-earrings-with-diamonds.webp?b=1&s=170667a&w=0&k=20&c=UCtXFxr_5mz3FW-tlxrV57IhhuNsFoIkHaBXaZWLALQ="
                    className="responsive-img"
                  />
                </div>
                <div className="responsive-content">
                  <h2>Jewellery</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h5 className="card__price">Price: Rs: 7550</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="responsive-card">
                <div className="responsive-imgbox">
                  <img
                    src="https://images.unsplash.com/photo-1511335413948-b5966e4e1d01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=873&q=80"
                    className="responsive-img"
                  />
                </div>
                <div className="responsive-content">
                  <h2>Hand Bag</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h5 className="card__price">Price: Rs:6500</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* upcoming sale banner */}

        <div className="background">
          <h1 className="fw-bold text-center col-sm-12">Upcoming Sale</h1>
          <h2 className="fw-bold text-center col-sm-12">Up to 30% off</h2>
          <div className="blinking-cover"></div>
        </div>

        {/* upcoming sale card */}

        <div id="services" className="container">
          <div className="card-row row justify-content-center">
            <div className="col-md-4 col-sm-6 mb-4 text-center">
              <div className="card-container">
                <figure className="card">
                  <img
                    src="https://media.istockphoto.com/id/1155023238/photo/female-legs-in-stylish-black-jeans-in-white-leather-sneakers-with-snake-pattern-on-the.webp?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=QdQpNvPG9RQH9Ap8AHAyDbFRNk6te8r7FCil8nbEVgo="
                    alt=""
                    className="card__image"
                  />
                  <figcaption className="card__body">
                    <h2 className="card__title">Sneakers</h2>
                    <div>
                      <p className="card__description">
                        Some description about this card and its purpose.
                      </p>
                    </div>
                    <button className="card__sale-button">Sale</button>
                  </figcaption>
                </figure>
                <div className="product-details">
                  <h5 className="card__heading">Women sneakers</h5>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <h5 className="card__price">Price: Rs: 9000</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4 text-center">
              <div className="card-container">
                <figure className="card">
                  <img
                    src="https://media.istockphoto.com/id/1034939250/photo/mid-century-modern-chair-with-a-blanket-and-a-large-sofa-with-colorful-cushions-in-a-spacious.webp?b=1&amp;s=170667a&amp;w=0&amp;k=20&amp;c=57OPhvhKvW3OVpB0kGGPs_FMpVxoFn-qZVxguaDspaU="
                    alt=""
                    className="card__image"
                  />
                  <figcaption className="card__body">
                    <h2 className="card__title">Sofa</h2>
                    <p className="card__description">
                      Some description about this card and its purpose.
                    </p>
                    <button className="card__sale-button">Sale</button>
                  </figcaption>
                </figure>
                <div className="product-details">
                  <h5 className="card__heading">Sofa </h5>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <h5 className="card__price">Rs: 40,000</h5>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 mb-4 text-center">
              <div className="card-container">
                <figure className="card">
                  <img
                    src="https://images.unsplash.com/photo-1591375372226-3531cf2eb6d3?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlvciUyMHBlcmZ1bWV8ZW58MHx8MHx8fDA%3D&amp;w=1000&amp;q=80"
                    alt=""
                    className="card__image"
                  />
                  <figcaption className="card__body">
                    <h2 className="card__title">perfume</h2>
                    <p className="card__description">
                      Some description about this card and its purpose.
                    </p>
                    <button className="card__sale-button">Sale</button>
                  </figcaption>
                </figure>
                <div className="product-details">
                  <h5 className="card__heading">Dior perfume</h5>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <AiFillStar></AiFillStar>
                  <BsStarHalf></BsStarHalf>
                  <h5 className="card__price">Rs: 30,000</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* banner card  */}

        <section id="banner" className="section-m1">
          <h4>Baazar Of Novels OFFERS</h4>
          <h2>
            UP TO <span className="discount">50% OFF</span> jewellery &amp;
            <span className="fragrance" style={{ display: "block" }}>
              Fragrances
            </span>
          </h2>
          <button className="btn-explore">
            <a
              href="/products"
              style={{ textDecoration: "none", color: "white" }}
            >
              Explore NOW
            </a>
          </button>
        </section>


        <h2 className="heading fw-bold text-center fs-3 fs-sm-4 fs-md-5">
          Our CEO & Founders
        </h2>

        <div id="team">
          <div className="card-row row justify-content-center">
            <div className="col-md-3 col-sm-6 mb-4 text-center">
              <article className="custom-card card1">
                <div className="custom-card__body">
                  <h2 className="custom-card__title">Umaima Farooq</h2>
                  <p>CEO / Founder</p>
                  <div className="icons">
                    <i className="icon icon--github">
                      <a href="https://github.com/syedaumaima">
                        <AiFillGithub></AiFillGithub>
                      </a>
                    </i>
                    <i className="icon icon--instagram">
                      <a href="https://www.instagram.com/writerumaimafarooq/">
                        <BsInstagram></BsInstagram>
                      </a>
                    </i>
                    <i className="icon icon--linkedin">
                      <a href="https://www.linkedin.com/in/syedaumaima/">
                        <BsLinkedin></BsLinkedin>
                      </a>
                    </i>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 text-center">
              <article className="custom-card card2">
                <div className="custom-card__body">
                  <h2 className="custom-card__title">Eiman</h2>
                  <p>HOD</p>
                  <div className="icons">
                    <i className="icon icon--github">
                      <a href="https://github.com/syedaumaima">
                        <AiFillGithub></AiFillGithub>
                      </a>
                    </i>
                    <i className="icon icon--instagram">
                      <a href="https://www.instagram.com/writerumaimafarooq/">
                        <BsInstagram></BsInstagram>
                      </a>
                    </i>
                    <i className="icon icon--linkedin">
                      <a href="https://www.linkedin.com/in/syedaumaima/">
                        <BsLinkedin></BsLinkedin>
                      </a>
                    </i>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 text-center">
              <article className="custom-card card3">
                <div className="custom-card__body">
                  <h2 className="custom-card__title">Rafia</h2>
                  <p>Co-Director</p>
                  <div className="icons">
                    <i className="icon icon--github">
                      <a href="https://github.com/syedaumaima">
                        <AiFillGithub></AiFillGithub>
                      </a>
                    </i>
                    <i className="icon icon--instagram">
                      <a href="https://www.instagram.com/writerumaimafarooq/">
                        <BsInstagram></BsInstagram>
                      </a>
                    </i>
                    <i className="icon icon--linkedin">
                      <a href="https://www.linkedin.com/in/syedamaima/">
                        <BsLinkedin></BsLinkedin>
                      </a>
                    </i>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-md-3 col-sm-6 mb-4 text-center">
              <article className="custom-card card4">
                <div className="custom-card__body">
                  <h2 className="custom-card__title">Qurat-ul-Ain</h2>
                  <p>Assistant</p>
                  <div className="icons">
                    <i className="icon icon--github">
                      <a href="https://github.com/syedaumaima">
                        <AiFillGithub></AiFillGithub>
                      </a>
                    </i>
                    <i className="icon icon--instagram">
                      <a href="https://www.instagram.com/writerumaimafarooq/">
                        <BsInstagram></BsInstagram>
                      </a>
                    </i>
                    <i className="icon icon--linkedin">
                      <a href="https://www.linkedin.com/in//">
                        <BsLinkedin></BsLinkedin>
                      </a>
                    </i>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* services cards  */}

        <h2 className="heading fw-bold text-center fs-3 fs-sm-4 fs-md-5">
          Our Services
        </h2>

        <div className="my-container">
          <article className="my-card">
            <div className="my-card__inner">
              <div className="my-card__side my-card__side--front">
                <div className="my-card__image-wrapper">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2020/10/PS/JB/BN/91705647/home-delivery-service.jpg"
                    alt=""
                    className="my-card__image"
                  />
                </div>
                <div className="my-card__body my-card__body--flex">
                  <h2 className="my-card__title">HOME DELIVERY</h2>
                  <span className="my-card__arrow">→</span>
                </div>
              </div>
              <div className="my-card__side my-card__side--back">
                <div className="my-card__body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Numquam unde adipisci quas nulla dolores esse dolor magnam
                    repudiandae perferendis eaque, ex eveniet inventore iure
                    ipsum incidunt quaerat, obcaecati sint hic.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="my-card">
            <div className="my-card__inner">
              <div className="my-card__side my-card__side--front">
                <div className="my-card__image-wrapper">
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                    className="my-card__image"
                  />
                </div>
                <div className="my-card__body my-card__body--flex">
                  <h2 className="my-card__title">REFUND POLICY</h2>
                  <span className="my-card__arrow">→</span>
                </div>
              </div>
              <div className="my-card__side my-card__side--back">
                <div className="my-card__body">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Optio pariatur ex dignissimos est sunt corrupti commodi aut
                    autem culpa, aperiam saepe consectetur. Enim consectetur
                    nostrum itaque iure eligendi id tempore.
                  </p>
                </div>
              </div>
            </div>
          </article>
          <article className="my-card">
            <div className="my-card__inner">
              <div className="my-card__side my-card__side--front">
                <div className="my-card__image-wrapper">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/016/856/482/small/faq-line-gradient-circle-background-icon-vector.jpg"
                    alt=""
                    className="my-card__image"
                  />
                </div>
                <div className="my-card__body my-card__body--flex">
                  <h2 className="my-card__title">FAQs</h2>
                  <span className="my-card__arrow">→</span>
                </div>
              </div>
              <div className="my-card__side my-card__side--back">
                <div className="my-card__body">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reiciendis dolorem quasi saepe. Repellendus et provident,
                    sit quidem aliquam eligendi animi nam voluptatum nobis
                    sapiente itaque nulla perspiciatis odio distinctio facilis.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </>
    </>
  );
}
