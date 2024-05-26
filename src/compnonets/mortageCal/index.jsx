import { useState } from "react";
import "./style.css";
import { useEffect } from "react";
const Mortage = () => {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEMI] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);

    const id = e.target.id;
    const value = parseInt(e.target.value);
    if (id === "principle") {
      setPrinciple(value);
    } else if (id === "interest") {
      setInterest(value);
    } else {
      setYears(value);
    }
  };
  const calCulateEMI = () => {
    let r = interest;
    if (principle && r && years) {
      r = r / 12 / 100; //per month

      const calPow = Math.pow(1 + r, years * 12);
      const amount = principle * ((r * calPow) / (calPow - 1));
      setEMI(Math.round(amount));
    }
  };

  useEffect(() => {
    calCulateEMI();
  }, [principle, interest, years]);

  return (
    <div className="loan-calc">
      <h1>Mortage calculator</h1>

      <div className="inputes">
        <p>Principle :</p>
        <input
          onChange={handleChange}
          style={{ border: "1px solid black" }}
          type="number"
          id="principle"
        />

        <p>Interest :</p>
        <input
          onChange={handleChange}
          style={{ border: "1px solid black" }}
          type="number"
          id="interest"
        />

        <p>Years :</p>
        <input
          onChange={handleChange}
          style={{ border: "1px solid black" }}
          type="number"
          id="year"
        />
      </div>

      <div className="output">Your EMI is {emi}</div>
    </div>
  );
};

export default Mortage;
