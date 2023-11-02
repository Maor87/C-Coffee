import React from 'react';
import backgroundImg from '../img/coffeeBG.jpg';

const AboutUS = () => {
  return (
    <div
      className="about-container container mx-auto mt-8"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="overlay">
      <h1 className="text-white text-3xl font-bold mt-5 text-center">Our Coffee Story</h1>
      <p className="text-gray-200 mt-6 text-center font-bold pr-20 pl-20">
        Discover the journey behind our chocolate-tasting coffee and how we crafted it to perfection.
        <br /> <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi incidunt cupiditate magnam commodi assumenda aperiam, sapiente distinctio, corrupti eum quae nostrum voluptates modi est nesciunt quo qui nihil nisi velit.
        <br /> <br />
        Placeat in ratione ipsum impedit natus eligendi ut vero repudiandae molestias amet vel a doloremque, mollitia, sunt nam quia voluptates, ab accusamus! In odio fugit, officiis modi aspernatur assumenda reiciendis!
        <br /> <br />
        Recusandae a ut esse debitis, autem cupiditate placeat voluptatem exercitationem accusantium eveniet in tenetur impedit eaque quae ea earum quam praesentium quod obcaecati! Quam hic ex cumque tenetur eveniet excepturi.
        <br /> <br />
        Nobis perspiciatis maxime iusto porro, asperiores ut accusamus sit eveniet! Omnis, animi soluta, earum culpa iure error laudantium provident ut cumque, sapiente sint. Quos numquam adipisci rem maiores, optio quaerat.
        <br /> <br />
        <br /> <br />
      </p>
     </div>
    </div>
  );
};

export default AboutUS;


