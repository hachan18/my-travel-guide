// src/components/TouristSpots.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import './TouristSpots.css'; // CSSのインポート

const TouristSpots = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await axios.get("http://localhost:3001/spots");
        setSpots(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpots();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Tourist Spots</h1>
      {spots.map((spot) => (
        <div key={spot.id}>
          <h2>{spot.name}</h2>
          <p>{spot.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TouristSpots;
