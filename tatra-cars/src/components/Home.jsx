import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const data = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU2i3ZwTQHgKi_Rb0xr2LUp7v2fJz2Uj2bqQ&s",
      heading: "2023 Honda Civic",
      para: "A modern and reliable sedan, perfect for city driving and long road trips.",
      link: "View Details",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSYh4F0ruVNypDJkqx9wkBwnEj5a26NeGEIQ&s",
      heading: "2024 Ford F-150",
      para: "The best-selling truck in America, known for its power and versatility.",
      link: "View Details",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqWgzJ4IDDa-PEd2LFQGI0xWIsaOF4zYACtA&s",
      heading: "2023 Tesla Model 3",
      para: "Experience the future of driving with this award-winning electric vehicle.",
      link: "View Details",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5KYOKUtm2YnKj8W74XfEn80_ns4NkwI9AZw&s",
      heading: "2024 Toyota RAV4",
      para: "A versatile and fuel-efficient SUV, perfect for families and adventurers alike.",
      link: "View Details",
    },
    {
      image:
        "https://i.pinimg.com/474x/1a/25/fb/1a25fb294be0069e37021775a114f934.jpg",
      heading: "2023 Jeep Wrangler",
      para: "Conquer any terrain with this legendary off-road icon.",
      link: "View Details",
    },
    {
      image:
        "https://www.carscoops.com/wp-content/uploads/2020/07/Porsche-911-GT3-RS-2a-1024x555.jpg",
      heading: "2022 Porsche 911",
      para: "The ultimate sports car, combining iconic design with exhilarating performance.",
      link: "View Details",
    },
  ];

  let ChooseSection = [
    {
      heading: "Expert Team",
      icon: <i class="bi bi-person-circle"></i>,
      para: "Our friendly and knowledgeable staff are here to help you find the perfect car, with no pressure.",
    },
    {
      heading: "Quality & Trust",
      icon: <i class="bi bi-star-fill"></i>,
      para: "Every vehicle is thoroughly inspected to meet our high standards for safety and reliability.",
    },
    {
      heading: "Easy Financing",
      icon: <i class="bi bi-currency-dollar"></i>,
      para: "We offer flexible financing options to make your car-buying process simple and stress-free.",
    },
  ];
  const testimonial = [
    {
      image: "https://randomuser.me/api/portraits/men/26.jpg",
      heading: "Jane Doe",
      para: '"The team at CarDealership made my car-buying experience a breeze. The process was transparent, and I drove away in my dream car!"',
      review: "Happy Customer",
    },
    {
      image: "https://randomuser.me/api/portraits/men/29.jpg",
      heading: "Robert Smith",
      para: '"I was impressed by the quality of their inventory and the professionalism of the staff. Highly recommend this dealership to anyone."',
      review: "Satisfied Buyer",
    },
    {
      image: "https://randomuser.me/api/portraits/men/24.jpg",
      heading: "Emily Miller",
      para: '"As a first-time buyer, I was a bit nervous, but the staff were amazing. They guided me through every step and Im so happy with my new car!"',
      review: "First-time Buyer",
    },
    {
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      heading: "Sarah Chen",
      para: '"This is my second car from this dealership, and the experience is always fantastic. Their service is unmatched!"',
      review: "First-time Buyer",
    },
  ];
  const Blog = [
    {
      image:
        "https://www.shutterstock.com/image-vector/neon-automobile-illustration-vector-600nw-1027533586.jpg",
      heading: "Tips for Your First Car Purchase",
      para: "A comprehensive guide for first-time car buyers, covering everything from budgeting to test driving.",
      btn: "Read More",
    },
    {
      image:
        "https://img.freepik.com/premium-vector/smart-car-vector-concept-electric-auto_87494-138.jpg?semt=ais_hybrid&w=740&q=80",
      heading: "Maintaining Your Vehicle's Value",
      para: "Learn simple maintenance tips to keep your car in top condition and maximize its resale value.",
      btn: "Read More",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzugwFquQG5SBW183gqWfDrCUIWwqAJ-DFvqaD09wUhU6bhbgHXgLEvyOqZNVd4qKYENw&usqp=CAU",
      heading: "The Future of Electric Cars",
      para: "An in-depth look at the latest trends and innovations in the electric vehicle market.",
      btn: "Read More",
    },
  ];
  return (
    <div className="w-100">
      {/* Hero Section */}
      <div className=" text-dark  text-center py-5 shadow-sm background">
        <div className="container-fluid py-5">
          <h1 className="display-4 fw-bold bg-white w-75 mx-auto mb-5 rounded-5">
            Your Next Adventure Awaits
          </h1>
          <Link
            to="/cars"
            className="btn btn-light btn-lg mt-4 fw-bold rounded-pill shadow mb-5"
          >
            Browse Our Inventory
          </Link>
        </div>
      </div>

      {/* Featured Cars Section*/}
      <div className="container-fluid my-5 ">
        <h2 className="text-center fw-bold mb-5">Featured Cars</h2>
        <div className="row g-4 justify-content-center">
          {data.map(function (elem, idx) {
            return (
              <div className="col-12 col-md-6 col-lg-4 key={idx}">
                <div className="card h-100 shadow-lg border-0 rounded-4 overflow-hidden homeCars ">
                  <img
                    src={elem.image}
                    className="card-img-top object-cover"
                    alt="Honda Civic"
                  />
                  <div className="card-body p-4 d-flex flex-column">
                    <h5 className="card-title fw-bold">{elem.heading}</h5>
                    <p className="card-text text-muted mb-3">{elem.para}</p>
                    <Link
                      to="/cars"
                      className="btn btn-primary mt-auto rounded-pill fw-bold"
                    >
                      {elem.link}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-light py-5">
        <div className="container-fluid my-4">
          <h2 className="text-center fw-bold mb-5">Why Choose Us?</h2>
          <div className="row g-4 text-center">
            {ChooseSection.map(function (elem, idx) {
              return (
                <div className="col-md-4" key={idx}>
                  <div className="card h-100 shadow-lg border-0 rounded-4 p-4 cards ">
                    <i className=" text-primary fs-1 mb-3">{elem.icon}</i>
                    <h4 className="fw-bold">{elem.heading}</h4>
                    <p className="text-muted">{elem.para}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-secondary text-white py-5 my-5">
        <div className="container-fluid text-center">
          <h2 className="fw-bold">Ready to Find Your Dream Car?</h2>
          <p className="lead mt-3">
            Schedule a test drive or get a personalized quote today.
          </p>
          <div className="mt-4">
            <Link
              to="/contact"
              className="btn btn-light btn-lg fw-bold rounded-pill shadow me-3"
            >
              Get a Quote
            </Link>
            <Link
              to="/contact"
              className="btn btn-outline-light btn-lg fw-bold rounded-pill shadow"
            >
              Schedule a Test Drive
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="container-fluid my-5">
        <h2 className="text-center fw-bold mb-5">What Our Customers Say</h2>
        <div className="row g-4 justify-content-center">
          {testimonial.map(function (data, id) {
            return (
              <div className="col-md-6" key={id}>
                <div className="card shadow-sm border-0 rounded-4 p-4 cards">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={data.image}
                      className="rounded-circle me-3"
                      alt="Customer Jane Doe"
                    />
                    <div>
                      <h6 className="fw-bold mb-0">{data.heading}</h6>
                      <small className="text-muted">{data.review}</small>
                    </div>
                  </div>
                  <p className="fst-italic text-muted">{data.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*Blog Section */}
      <div className="bg-light py-5">
        <div className="container-fluid my-4">
          <h2 className="text-center fw-bold mb-5">Latest News & Articles</h2>
          <div className="row g-4 justify-content-center">
            {Blog.map(function (data, idx) {
              return (
                <div className="col-12 col-md-6 col-lg-4" key={idx}>
                  <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden cards">
                    <img
                      src={data.image}
                      className="card-img-top"
                      alt="Blog Post 1"
                    />
                    <div className="card-body">
                      <h5 className="card-title fw-bold">{data.heading}</h5>
                      <p className="card-text text-muted">{data.para}</p>
                      <a href="#" className="btn btn-link px-0">
                        {data.btn} &raquo;
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
