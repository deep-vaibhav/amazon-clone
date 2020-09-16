import React from "react";

import "./Home.scss";
import prime from "../../assets/amzPrime.jpg";
import prodImg1 from "../../assets/products/tagr.jpg";
import prodImg2 from "../../assets/products/headphone.jpg";
import prodImg3 from "../../assets/products/laptop.jpg";
import prodImg4 from "../../assets/products/echo.jpg";
import prodImg5 from "../../assets/products/book.jpg";
import prodImg6 from "../../assets/products/firestick.jpg";

import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img src={prime} alt="prime" className="prime_banner"></img>

        <div className="home__row">
          <Product
            title="Think & Grow Rich: THE 21st CENTURY EDITION Paperback – 1 March 2020"
            price={4.99}
            image={prodImg1}
            rating={4}
          />
          <Product
            title="Marshall Mid ANC 04092138 Active Noise Cancelling On-Ear Wireless Bluetooth Headphone (Black)"
            price={19.99}
            image={prodImg2}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            title="Microsoft Surface GO 2 STQ-00013 10.1-inch Laptop (Gold Processor 4425Y/8GB/128GB SSD/Windows 10 Home in S Mode/Intel UHD 615 Graphics), Platinum"
            price={24.99}
            image={prodImg3}
            rating={3}
          />
          <Product
            title="Echo Input Portable Smart Speaker Edition - Carry Echo anywhere in your home"
            price={12.99}
            image={prodImg4}
            rating={4}
          />
          <Product
            title="Rich Dad Poor Dad : What The Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
            price={3.99}
            image={prodImg5}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="Fire TV Stick 4K with All-New Alexa Voice Remote | Streaming Media Player"
            price={6.99}
            image={prodImg6}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
