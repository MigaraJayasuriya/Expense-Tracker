import { useState, useEffect } from "react";
import { getBalance } from "../api";

const Balance = () => {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        loadBalance();
    }, []);

    const loadBalance = async () => {
        const res = await getBalance();
        setBalance(res.data.balance);
    }

    return (
        <div>
            <h2>Current Balance</h2>
            <p>${balance}</p>
        </div>
    );
}

export default Balance;

