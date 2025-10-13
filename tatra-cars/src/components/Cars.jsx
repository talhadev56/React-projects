import React, { useState, useEffect } from "react";


const CarCard = ({ car }) => {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
      <img
        src={car.image}
        className="card-img-top object-cover car"
        alt={car.name}
        style={{ height: "200px" }}
      />
      <div className="card-body d-flex flex-column p-4">
        <h5 className="card-title fw-bold text-dark">{car.name}</h5>
        <p className="card-text text-muted mb-3">
          ${car.price.toLocaleString()}
        </p>
        <button className="btn btn-primary mt-auto rounded-pill fw-bold">
          View Details
        </button>
      </div>
    </div>
  );
};

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const fetchCars = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const mockCars = [
        {
          id: 1,
          name: "Honda Civic",
          price: 25000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnHLSzNf58zo2obogYJd8RI8NWxkwbOkmZnQ&s",
        },
        {
          id: 2,
          name: "Toyota Camry",
          price: 28000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCPcOHwGNb1J9_OZvoedwFYV-gOfBFIh6jA&s",
        },
        {
          id: 3,
          name: "Ford F-150",
          price: 35000,
          image:
            "https://www.topgear.com/sites/default/files/2024/05/1-Ford-F-150-review.jpg",
        },
        {
          id: 4,
          name: "Tesla Model 3",
          price: 45000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrBN4q99XOCtfoxwgKoH4PO9scoyylLSMVQ&s",
        },
        {
          id: 5,
          name: "BMW X5",
          price: 60000,
          image:
            "https://stimg.cardekho.com/images/carexteriorimages/630x420/BMW/X5-2023/10452/1688992642182/front-left-side-47.jpg?tr=w-360",
        },
        {
          id: 6,
          name: "Mercedes-Benz C-Class",
          price: 50000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOSIzO0zHwsn-LXOdbBjJP-mzHtgHVTLK5-A&s",
        },
        {
          id: 7,
          name: "Audi A4",
          price: 40000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxrax76JBChmXasSZmYR2P_1oxH_00MS1M9w&s",
        },
        {
          id: 8,
          name: "Nissan Titan",
          price: 42000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmdiSKKm3LTNGp1ulaIKVInBOH0DZ1VN-Bg&s",
        },
        {
          id: 9,
          name: "Jeep Wrangler",
          price: 38000,
          image:
            "https://hips.hearstapps.com/hmg-prod/images/2024-jeep-wrangler114-649ade7362678.jpg?crop=0.784xw:0.589xh;0.152xw,0.279xh&resize=640:*",
        },
        {
          id: 10,
          name: "Mercedes-Benz GLE",
          price: 72000,
          image:
            "https://vehicle-images.dealerinspire.com/a2a2-11001242/4JGFB6BB5SB292530/57fe98e0a27b29e8e6d68124977de68f.jpg",
        },
        {
          id: 11,
          name: "Mercedes-Benz E-Class",
          price: 58000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKLizXt1Rndi2b9JhPyJvHbGR0XxGpoebNg&s",
        },
        {
          id: 12,
          name: "Mercedes-Benz G-Class",
          price: 135000,
          image:
            "https://vehicle-images.dealerinspire.com/6ed8-11001591/thumbnails/large/W1NWM0AB2SX042655/51b1e05851452a315656bdb8f62591c7.jpg",
        },
        {
          id: 13,
          name: "Mercedes-Benz S-Class",
          price: 110000,
          image:
            "https://hips.hearstapps.com/hmg-prod/images/2022-mercedes-benz-s500-4matic-123-1642184026.jpg?crop=0.458xw:0.387xh;0.316xw,0.418xh&resize=2048:*",
        },
        {
          id: 14,
          name: "Mercedes-Benz A-Class",
          price: 35000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8qjgFkBtiQ3PrZQ0w_daATw4i5oobzBXzA&s",
        },
        {
          id: 15,
          name: "Mercedes-Benz CLA",
          price: 42000,
          image:
            "https://www.edmunds.com/assets/m/cs/bltc83760352e3505e7/6699a39ae243d862df6e142d/2024-mercedes-benz-cla-250-f34.jpg",
        },
        {
          id: 16,
          name: "Mercedes-Benz C-Class Coupe",
          price: 53000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsQkhVR-Y6QyofHfYyThMTzDipHAIh1Bc5yA&s",
        },
        {
          id: 17,
          name: "Mercedes-Benz",
          price: 55000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVi70DWFGWsecrr9BZCzEsdHjNbPXo8XE8A&s",
        },
        {
          id: 18,
          name: "Mercedes-Benz GLA",
          price: 48000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0R5IyC3UgUsHwMaF1g1iTCzqi0vw2hx-5g&s",
        },
        {
          id: 19,
          name: "Mercedes-Benz AMG GT",
          price: 145000,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpx0bT3uzl2HsbjzI6q0MEM8OeKRdRWHwEpw&s",
        },
        {
          id: 20,
          name: "Mercedes-Benz",
          price: 150000,
          image: "https://i.insider.com/5ea06a6ba34b3c73f509e0b6?width=700",
        },
      ];
      setCars(mockCars);
      setLoading(false);
    };
    fetchCars();
  }, []);

  return (
    <div className="container-fluid py-5">
      <h2 className="mb-5 text-center fw-bold">Our Car Inventory</h2>
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading cars...</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-4">
          {cars.map((car) => (
            <div key={car.id} className="col d-flex">
              <CarCard car={car} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cars;
