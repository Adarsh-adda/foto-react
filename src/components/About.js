import React from "react";
import about from "./../images/about.jpg"
const About = () => {
  return (
    <div style={{ textAlign: "start", margin: "40px" }}>

      <div className={"container"}>
        <h3>About Us</h3>
        <div className={"row"}>
          <div className={"col-md-7"}>
            <p>
        A printed image keeps memories forever. Printed image tell me lot of
        things. FOTOCART is unique in its belief that provide best of best
        services to each customer.FOTOCART provide all types cameras you want to
        be. We are leading dealers of all type of branded cameras, cameras
        accessories and outdoor optics. We are the genuine distributer of all
        branded cameras & accessories. We are in this business for a long time.
        E-commerce is our passion because we want to serve all Indian customers.
        We provide fast service to our valuable customers. The customer trust in
        FOTOCART because of comfort and quality we provide our customers with
        the best of products at affordable prices. If you receive the product in
        a bad condition or if the packing is tampered with or damaged before
        delivery, please refuse to accept the package and call to our help desk
        at 011-3304 7015 Mon-Sat 10 am till 6 pm & mentioning your order ID. We
        ensure that a replacement delivery is made to you at the earliest. Our
        service to all type of user such as corporate, commercial,
        law-enforcement and educational sector photographers can find
        audio-visual equipment and camera accessories, as well as boardroom
        systems and screens for special presentations. If u wants to like share
        our passion for photography, in each of our stores. We also believe that
        these are the reasons why our customers trust their most precious
        memories to us. We invite you to get to know us and our photography
        superstores, come visit us today.
      </p>
          </div>
            <div className={"col-md-5"}>
                <img src={about} alt={""}/>
            </div>

        </div>
      </div>

    </div>
  );
};

export default About;
