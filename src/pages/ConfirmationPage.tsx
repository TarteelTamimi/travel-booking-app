import { useLocation } from "react-router-dom";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import jsPDF from "jspdf";

const ConfirmationPage = () => {
  const location = useLocation();
  const {
    roomNumber,
    roomType,
    price,
    fullName,
    email,
    state,
    city,
    cardNumber,
    exDate,
    cvc,
    specialRequests,
  } = location.state || {};

  const printRef = useRef<HTMLDivElement>(null);

  const handleSaveAsPDF = () => {
    if (printRef.current) {
      const doc = new jsPDF();
      doc.text(printRef.current.innerText, 10, 10);
      doc.save("BookConfirmation.pdf");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div ref={printRef}>
        <h1 className="text-4xl font-bold text-center mb-6">Booking Confirmation</h1>
        <div className="my-6 text-center">
          <p className="text-green-700 font-bold text-lg">Thank you for your booking! Your payment has been successfully processed.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Full Name</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{fullName}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Email</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{email}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">State</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{state}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">City</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{city}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Card Number</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cardNumber}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Exp. Date</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exDate}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CVC</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cvc}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Room Number</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{roomNumber}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Room Type</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{roomType}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Price</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${price}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Special Requests</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{specialRequests}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <ReactToPrint
          trigger={() => <button className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-lg">Print</button>}
          content={() => printRef.current}
        />
        <button
          onClick={handleSaveAsPDF}
          className="text-white bg-green-700 hover:bg-green-800 px-4 py-2 rounded-lg"
        >
          Save as PDF
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
