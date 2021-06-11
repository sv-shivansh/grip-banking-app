import React from "react";
import "./profile.css";

const Transaction = ({ transaction }) => {
  return (
    <div className={`transaction-item ${transaction.action}`}>
      <div className="transaction-item_details">
        <h3 className="profile">{`${transaction.action}ed`}</h3>
        {transaction.action === "Credit" ? (
          <span className="details">
            {transaction.from.name} -&gt; You on{" "}
            {Date(transaction.date).slice(0, 25)}
          </span>
        ) : (
          <span className="details">
            {" "}
            You -&gt; {transaction.to.name} on{" "}
            {Date(transaction.date).slice(0, 25)}
          </span>
        )}
        {/* Electronics #123456 - 12 July, 2016 */}
      </div>
      <div className="transaction-item_amount">
        {transaction.action === "Credit" ? <span>+$ </span> : <span>-$ </span>}

        <p className="amount">{"0" + transaction.amount}</p>
      </div>
    </div>
  );
};

export default Transaction;
