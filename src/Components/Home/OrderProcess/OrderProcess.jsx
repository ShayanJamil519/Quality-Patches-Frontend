
import React from "react";
import { orderProcessingData } from "../../../dummyData.js";

const Card = ({ imgUrl, title, sub_title, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4">
      <div className="bg-white rounded-lg shadow-lg h-500 border border-gray-300">
        <img
          src={imgUrl}
          alt={title}
          className="w-150px h-150px mx-auto mt-4"
          style={{height: '80px', width: '80px'}}
        />
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
          <h4 className="text-lg text-gray-600 mb-4 text-center">{sub_title}</h4>
          <p className="text-gray-700 text-sm ">{description}</p>
        </div>
      </div>
    </div>
  );
};



const OrderProcess = () => {
  const orderProcessingData = [
    {
      imgUrl: "/assets/OrderProcessing/Place-The-Order.png",
      title: "Order Placement",
      sub_title: "Quick, Effortless, Convenient",
      description: "To get started, please fill out our online quote form or send us a message with your request’s specifics and place your patches order. We will then provide you with a quote and further instructions on how to complete your order.",
    },
    {
      imgUrl: "/assets/OrderProcessing/For-Approval.png",
      title: "Sample Approval",
      sub_title: "Perfection is everything!",
      description: "We do make a sample patch before making the whole order. This allows us to check the quality of the embroidery, the size, and the colors of the patch. It also ensures that the customer is satisfied with the design before the entire order is produced.",
    },
    {
      imgUrl: "/assets/OrderProcessing/Production.png",
      title: "Production Of The Patches",
      sub_title: "Ready to go!",
      description: "Once you have approved the sample, please let us know and we will begin production of the remaining patches. We will require a 100% payment before beginning production. Once production has begun, please allow up to two weeks for the order to be completed and ready for shipping.",
    },
    {
      imgUrl: "/assets/OrderProcessing/Delivery.png",
      title: "Fast and On-time Delivery",
      sub_title: "Fast and On-Time",
      description: "We guarantee fast and on-time delivery of your custom patches. We have our own production facility and a team of experienced professionals who will ensure that your order is processed quickly and efficiently. We also offer worldwide shipping and can also provide rush services for your urgent orders.",
    },
    
  ];
  return (
    <div className="flex flex-wrap justify-center">
      {orderProcessingData.map((step, index) => (
        <Card key={index} {...step} />
      ))}
    </div>
  );
};

export default OrderProcess;