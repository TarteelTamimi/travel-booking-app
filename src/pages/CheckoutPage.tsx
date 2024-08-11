import { useLocation } from "react-router-dom";
import PaymentForm from "../components/PaymentForm";

const CheckoutPage = () => {
  const location = useLocation();
  const { roomId, roomNumber, roomType, roomPhotoUrl, price, capacityOfAdults, capacityOfChildren } = location.state || {}; 

  return (
    <div>
      <h1 className="text-4xl font-bold text-center m-5">Payment Information</h1>
      <PaymentForm roomId={roomId} roomNumber={roomNumber} roomType={roomType} price={price}/>
      <div>
        <p className="text-3xl m-2 p-5 text-center">Confirm your room reservation by entering your payment details.</p>
        <div className="w-[45%] m-5 flex max-[1050px]:w-full max-[1050px]:flex-col max-[1050px]:text-center">
          <img className="m-3 rounded-lg h-96 md:h-auto md:w-72 md:rounded-lg" src={roomPhotoUrl} alt="room photo" />
          <div className="text-gray-500 w-1/2">
            <div className="flex">
              <p className="w-11/12">Room Number:</p>
              <p>{roomNumber}</p>
            </div>
            <div className="flex">
              <p className="w-11/12">Room Type:</p>
              <p>{roomType}</p>
            </div>
            <div className="flex">
              <p className="w-11/12">Adults Capacity:</p>
              <p>{capacityOfAdults}</p>
            </div>
            <div className="flex">
              <p className="w-11/12">Children Capacity:</p>
              <p>{capacityOfChildren}</p>
            </div>
            <div className="flex">
              <p className="w-11/12">Price:</p>
              <p>{price}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage;
