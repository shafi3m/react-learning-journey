import { useState } from "react";
import Card from "./components/card";

import "./App.css";

function App() {
  return (
    <>
      <Card
        title="Nike Air Max 270"
        description="Designed with the biggest heel Air unit yet, the Nike Air Max 270 delivers ultra-soft cushioning and bold style. Ideal for everyday wear."
        imgSrc="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        buttonText="Buy Now"
      />
      <Card
        title="Adidas Ultraboost 22"
        description="Responsive Boost cushioning and a Primeknit upper give you a locked-in fit and cloud-like comfort with every stride."
        imgSrc="https://images.pexels.com/photos/21070422/pexels-photo-21070422.jpeg"
        buttonText="Shop Now"
      />
      <Card
        title="Puma RS-X"
        description="Chunky retro style meets high-tech performance in the Puma RS-X. Built for comfort and designed to stand out in any crowd."
        imgSrc="https://images.pexels.com/photos/14525666/pexels-photo-14525666.jpeg"
        buttonText="Explore"
      />
    </>
  );
}

export default App;
