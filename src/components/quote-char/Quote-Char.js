import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInfo, getQuote } from "../../utility/api/api";
import "./quote-char.css";

export const QuoteChar = () => {
  const { name } = useParams();
  const getData = `quote?author=${name}`;
  const [item, setItem] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getQuote({ setItem, getData, setLoading });
  }, []);

  return !loading ? (
    <div className="quote-char">
      <h3>Quote char:</h3>
      {item.map(({ quote }) => (
        <li>{quote}</li>
      ))}
    </div>
  ) : (
    <div> loading...</div>
  );
};
