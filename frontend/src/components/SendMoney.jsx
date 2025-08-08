import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Appbar } from "../components/Appbar"; // Adjust path as necessary

export const SendMoney = () => {
  const [amount, setAmount] = useState(0);
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");
  const name = searchParams.get("name");

  async function handleClick() {
    const token = localStorage.getItem("token");

    await axios.post(
      "http://localhost:3000/api/v1/account/transfer",
      {
        to: id,
        amount: amount,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setAmount(0);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Appbar at the top */}
      <Appbar />

      {/* Centered content below Appbar */}
      <div className="flex justify-center items-center py-12 mt-[75px]">
        <div className="border text-card-foreground max-w-md w-96 bg-white shadow-xl rounded-lg p-6 space-y-6">
          <h2 className="text-3xl font-bold text-center">Send Money</h2>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-2xl text-white">
                {name?.[0]?.toUpperCase()}
              </span>
            </div>
            <h3 className="text-2xl font-semibold">Send to {name}</h3>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="amount"
                className="text-sm font-medium leading-none"
              >
                Amount (in Rs)
              </label>
              <input
                type="number"
                id="amount"
                placeholder="Enter amount"
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </div>

            <button
              onClick={handleClick}
              className="w-full bg-green-500 text-white rounded-md h-10 text-sm font-medium hover:bg-green-600 transition"
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
