import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUserTie,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SubscriptionPlans = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center">
      <div className="bg-white w-[95%] max-w-7xl rounded-xl shadow-2xl p-8 relative">
       
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <FaTimes size={22} />
        </button>

        <div className="bg-gray-200 text-center py-2 rounded-md text-gray-700 mb-6">
          ℹ️ This is a Premium Property! Subscribe to a Premium Plan below to
          get this contact.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlanCard
            title="Instant Matching Plan"
            price="₹ 1,099"
            old="₹ 1,649"
            color="bg-[#009688]"
            features={[
              ["Premium Filters", true],
              ["Number of Contacts: upto 25", true],
              ["Instant Property Alerts", true],
              ["Locality Experts", false],
              ["Rent Negotiation", false],
            ]}
            navigate={navigate}
          />

          <PlanCard
            title="Our Plan"
            price="₹ 3,499"
            old="₹ 3,999"
            color="bg-[#006d91]"
            features={[
              ["Premium Filters", true],
              ["Number of Contacts: upto 50", true],
              ["Instant Property Alerts", true],
              ["Locality Experts", true],
              ["Rent Negotiation", true],
            ]}
            navigate={navigate}
          />

          <PlanCard
            title="Quaterly Plan"
            price="₹ 5,499"
            old="₹ 5,999"
            color="bg-[#ff5b5b]"
            features={[
              ["Premium Filters", true],
              ["Number of Contacts: upto 50", true],
              ["Instant Property Alerts", true],
              ["Locality Experts", true],
              ["Rent Negotiation", true],
            ]}
            premium
            navigate={navigate}
          />
        </div>

        <p className="text-center text-sm mt-6">
          For assistance call us at:{" "}
          <span className="text-red-500 font-semibold">+91-89-055-522-22</span>
        </p>

        <p className="text-center text-xs text-gray-500 mt-1">
          Plan Validity: MoneyBack & Relax (45 Days), Freedom (90 Days).{" "}
          <span className="text-red-500">T&C apply</span>
        </p>
      </div>
    </div>
  );
};

const PlanCard = ({
  title,
  price,
  old,
  features,
  color,
  premium,
  navigate,
}) => (
  <div className="bg-white border rounded-xl shadow-lg overflow-hidden">
    <div className={`${color} text-white p-4 flex justify-between`}>
      <h2 className="font-semibold">{title}</h2>
      <div className="text-right">
        <p className="line-through text-sm opacity-80">{old}</p>
        <p className="text-lg font-bold">{price}</p>
        <p className="text-xs">+18% GST</p>
      </div>
    </div>

    <div className="p-5 text-sm">
      <div className="flex items-center gap-3 mb-3">
        <FaUserTie className="text-gray-500 text-3xl" />
        <p className="font-medium">Relationship Manager Included</p>
      </div>

      {features.map(([text, ok], i) => (
        <div
          key={i}
          className="flex items-center justify-between border-b py-2"
        >
          <p>{text}</p>
          {ok ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <FaTimesCircle className="text-gray-400" />
          )}
        </div>
      ))}

      <button
        onClick={() => navigate("/payment")}
        className={`w-full mt-5 py-2 rounded-lg text-white font-medium ${
          premium
            ? "bg-[#ff5b5b] hover:bg-red-600"
            : "bg-[#009688] hover:bg-teal-700"
        }`}
      >
        Subscribe
      </button>
    </div>
  </div>
);

export default SubscriptionPlans;
