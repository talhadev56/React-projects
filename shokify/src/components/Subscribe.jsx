import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-orange-300 to-orange-500 p-12 my-10">
        <div className="max-w-[700px] m-auto">
          <div className="text-center">
            <h2 className="text-white capitalize font-bold text-2xl mb-3">
              get notified about our new products
            </h2>
            <input
              type="text"
              placeholder="Enter Your Email"
              className=" lg:w-[430px] w-[220px] sm:w-[330px] bg-white p-2 placeholder:text-gray-500 focus:outline-none rounded-lg"
            />
            <button className="bg-transparent text-white border-1 border-black border-solid py-2 px-2 ms-2 rounded-md cursor-pointer hover:scale-120 hover:ms-5 hover:text-black">Sumbit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
