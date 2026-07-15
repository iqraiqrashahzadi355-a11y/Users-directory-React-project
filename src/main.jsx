import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import hamzaImg from "./assets/hamza.png";
import bilalImg from "./assets/bilal.png";
import usmanImg from "./assets/usman.png";
import danishImg from "./assets/danish.png";
import ahsanImg from "./assets/ahsan.png";
import fahadImg from "./assets/fahad.png";
import ayeshaImg from "./assets/ayesha.png";
import sanaImg from "./assets/sana.png";
import mariamImg from "./assets/mariam.png";
import alishbaImg from "./assets/alishba.png";
import noorImg from "./assets/noor.png";
import rabiaImg from "./assets/rabia.png";
import iqraImg from "./assets/iqra.png";

const data = [
  {
    id: 1,
    name: "Ayesha Bilal",
    email: "ayesha.bilal@example.com",
    phone: "0300-1122334",
    university: "Punjab University Lahore",
    image: ayeshaImg,
  },
  {
    id: 2,
    name: "Hamza Tariq",
    email: "hamza.tariq@example.com",
    phone: "0301-2233445",
    university: "COMSATS Islamabad",
    image: hamzaImg,
  },
  {
    id: 3,
    name: "Sana Javed",
    email: "sana.javed@example.com",
    phone: "0302-3344556",
    university: "NUST Islamabad",
    image: sanaImg,
  },
  {
    id: 4,
    name: "Bilal Ahmed",
    email: "bilal.ahmed@example.com",
    phone: "0303-4455667",
    university: "FAST NUCES Karachi",
    image: bilalImg,
  },
  {
    id: 5,
    name: "Mariam Sheikh",
    email: "mariam.sheikh@example.com",
    phone: "0304-5566778",
    university: "Lahore College for Women University",
    image: mariamImg,
  },
  {
    id: 6,
    name: "Usman Raza",
    email: "usman.raza@example.com",
    phone: "0305-6677889",
    university: "University of Karachi",
    image: usmanImg,
  },
  {
    id: 7,
    name: "Alishba Naveed",
    email: "alishba.naveed@example.com",
    phone: "0306-7788990",
    university: "Bahauddin Zakariya University",
    image: alishbaImg,
  },
  {
    id: 8,
    name: "Danish Iqbal",
    email: "danish.iqbal@example.com",
    phone: "0307-8899001",
    university: "GIK Institute",
    image: danishImg,
  },
  {
    id: 9,
    name: "Noor Fatima",
    email: "noor.fatima@example.com",
    phone: "0308-9900112",
    university: "Fatima Jinnah Women University",
    image: noorImg,
  },
  {
    id: 10,
    name: "Ahsan Khalid",
    email: "ahsan.khalid@example.com",
    phone: "0309-0011223",
    university: "University of Engineering & Technology Lahore",
    image: ahsanImg,
  },
  {
    id: 11,
    name: "Rabia Yousaf",
    email: "rabia.yousaf@example.com",
    phone: "0311-1234567",
    university: "Islamia University Bahawalpur",
    image: rabiaImg,
  },
  {
    id: 12,
    name: "Fahad Malik",
    email: "fahad.malik@example.com",
    phone: "0312-2345678",
    university: "Air University Islamabad",
    image: fahadImg,
  },
  {
    id: 13,
    name: "Iqra Zafar",
    email: "iqra.zafar@example.com",
    phone: "0313-3456789",
    university: "Virtual University of Pakistan",
    image: iqraImg,
  },
];

function Cards(props) {
  const handleViewProfile = () => {
    alert(
      `Name: ${props.name}\nEmail: ${props.email}\nPhone: ${props.phone}\nUniversity: ${props.university}`
    );
  };

  return (
    <div className="card">
      <img src={props.image} alt={props.name} className="card-img" />
      <h3 className="card-name">{props.name}</h3>
      <p className="card-info">Email: {props.email}</p>
      <p className="card-info">Phone: {props.phone}</p>
      <p className="card-info">University: {props.university}</p>
      <button className="card-btn" onClick={handleViewProfile}>
        View Profile
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Users Directory</h1>
        <p>Browse and explore user Profiles</p>
      </header>

      <div className="cards-grid">
        {data.map((user) => (
          <Cards
            key={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
            university={user.university}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
