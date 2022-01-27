import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { ethers } from "ethers";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";

import "../../styles/home.css";
const startPayment = async ({ setError, setTxs, ether, addr }) => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(ether),
    });
    console.log({ ether, addr });
    console.log("tx", tx);
    setTxs([tx]);
  } catch (err) {
    setError(err.message);
  }
};

export const Payment = () => {
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("ether"),
      addr: data.get("addr"),
    });
  };

  return (
    <div>
      <div className="sidebar-container">
        <div className="sidebar-logo">Birthday</div>
        <ul className="sidebar-navigation">
          <li className="header">Navigation</li>
          <li>
            <Link to="/dashboard">
              <i class="fa fa-circle" aria-hidden="true"></i> Dashboard
            </Link>
          </li>
          <li class="header">Other</li>
          <li>
            <Link to="/Dates">
              <i className="fa fa-calendar" aria-hidden="true"></i> View Dates
            </Link>
          </li>
          <li>
            <Link to="/Add">
              <i class="fa fa-user" aria-hidden="true"></i>Add A Person
            </Link>
          </li>
          <li>
            <Link to="/giftacard">
              <i className="fa fa-gift" aria-hidden="true"></i> Send A Card
            </Link>
          </li>
          <li>
            <Link to="/sendapayment">
              <i className="fa fa-gift" aria-hidden="true"></i> Send A Payment
            </Link>
          </li>
        </ul>
      </div>
      <form className="m-4" onSubmit={handleSubmit}>
        <div className="credit-card lg:w-1/2 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
          <main className="mt-4 p-4">
            <h1 className="text-xl font-semibold text-gray-700 text-center">
              Send ETH Payment
            </h1>
            <div className="">
              <div className="form-group">
                <input
                  style={{ marginLeft: "35rem", width: "18rem" }}
                  type="text"
                  name="addr"
                  className="form-control input-normal"
                  placeholder="Recipient Address"
                />
              </div>
              <br></br>
              <div className="form-group">
                <input
                  style={{ marginLeft: "35rem", width: "18rem" }}
                  name="ether"
                  type="text"
                  className="form-control input-normal"
                  placeholder="Amount in ETH"
                />
              </div>
            </div>
          </main>
          <footer className="p-4">
            <button
              type="submit"
              style={{ width: "18rem", marginLeft: "35rem" }}
              className="btn btn-primary submit-button"
            >
              Pay now
            </button>
            <ErrorMessage message={error} />
            <TxList txs={txs} />
          </footer>
        </div>
      </form>
    </div>
  );
};
