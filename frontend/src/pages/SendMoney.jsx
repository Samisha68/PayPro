import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function SendMoney(props) {
    const navigate = useNavigate();
    const authHeader = window.localStorage.getItem("Authorization");
    const headers = {
        'Authorization': authHeader
    };
    const to = props.to;
    const [amount, setAmount] = useState(0);
    const body = {
        to, amount
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="border h-min text-gray-700 max-w-md p-6 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h2 className="text-3xl font-bold text-center text-blue-600">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                            <span className="text-2xl text-white">{props.name}</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-blue-600">{name || "User"}</h3>
                    </div>
                    <div className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="amount">
                                Amount (in Rs)
                            </label>
                            <input
                                type="number"
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500"
                                id="amount"
                                placeholder="Enter Amount"
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <button
                            className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-blue-600 text-white hover:bg-blue-700"
                            onClick={async () => {
                                await axios.post("http://localhost:3000/api/v1/account/transfer", body, { headers });
                                navigate('/confirmation');
                            }}
                        >
                            Initiate Transfer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
