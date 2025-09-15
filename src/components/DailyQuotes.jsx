import React, { useState, useEffect } from "react";
import './DailyQuotes.css';

const DailyQuote = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://api.alquran.cloud/v1/ayah/random/en.asad");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        console.log("Fetched data:", data); 
        setQuote(data.data.text || "No quote found");
      } catch (err) {
        console.error("Fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) return <p>Loading quote...</p>;
  if (error) return <p>Failed to fetch quote. Please try again later.</p>;

  return <blockquote>{quote}</blockquote>;
};

export default DailyQuote;
