import React from 'react';
import { useSpring, animated } from 'react-spring';

function AboutUs() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 2000 } });
  const slideLeft = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(-100%)' }, config: { duration: 2000 } });
  const slideRight = useSpring({ transform: 'translateX(0)', from: { transform: 'translateX(100%)' }, config: { duration: 2000 } });

  const aboutStyle = {
    backgroundColor: 'pink',
    width: '1200px',
    padding: '20px',
    color: 'black',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    margin: '20px auto',
    marginBottom: '0px',
  };

  return (
    <animated.div className="about-us" style={{ ...aboutStyle, ...fadeIn }}>
      <div className="container">
        <h2>Welcome to Baazar Of Pakistan!</h2>
        <p>
          At Baazar Of Pakistan, we take pride in offering you a wide range of products that showcase the rich cultural heritage and craftsmanship of Pakistan. From traditional clothing and accessories to exquisite handicrafts and home decor, we bring you the best of Pakistani products right at your fingertips.
        </p>
        <p>
          Explore our extensive collection of vibrant and elegant clothing, including stunning embroidered fabrics, intricate handwoven textiles, and stylish contemporary designs. Whether you're looking for a traditional outfit for a special occasion or trendy everyday wear, we have something to suit every taste and style.
        </p>
        <p>
          Indulge in the artistry of Pakistani handicrafts with our carefully curated selection of exquisite items. Discover beautifully handcrafted pottery, intricate woodwork, delicate ceramics, and mesmerizing embroidery that reflect the skill and creativity of Pakistani artisans. Each piece tells a story and adds a touch of elegance to your living spaces.
        </p>
        <p>
          At Baazar Of Pakistan, we are committed to providing you with a seamless shopping experience. Our user-friendly website allows you to browse through different categories, compare products, and make secure purchases with just a few clicks. We also ensure prompt delivery and excellent customer service to make your shopping experience truly satisfying.
        </p>
        <p>
          Join us in celebrating the vibrant colors, rich traditions, and exceptional craftsmanship of Pakistan. Let Baazar Of Pakistan be your gateway to authentic Pakistani products that bring beauty, culture, and elegance into your life.
        </p>
        <p>Start exploring and immerse yourself in the beauty of Baazar Of Pakistan!</p>

        <animated.img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
          alt="Third slide"
          style={{ height: '350px', ...slideRight }}
        />
      </div>

      <animated.div style={{ ...aboutStyle, ...slideLeft }}>
        <h2>Another Section</h2>
        {/* Add your content for the second section here */}
      </animated.div>
    </animated.div>
  );
}

export default AboutUs;


