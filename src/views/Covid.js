import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
export default function Covid() {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch("https://api.2covid19api.com/summary")
        .then((res) => res.json())
        .then((data) => {
          setDataCovid(data.Countries);
          setLoading(false);
        });
    } catch (err) {
      setLoading(true);
    }
  }, []);
  console.log("re-render");
  return (
    <div>
      <h1 className="text-center">Covid </h1>
      <table className="table table-dark table-striped bg-dark text-center">
        <thead>
          <tr>
            <th>1</th>
            <th>Country</th>
            <th>CountryCode</th>
            <th>TotalConfirmed</th>
            <th>TotalDeaths</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid?.length > 0 &&
            dataCovid.map((country, i) => (
              <tr key={i}>
                <td>{i}</td>
                <td>{country.Country}</td>
                <td>{country.CountryCode}</td>
                <td>{country.TotalConfirmed}</td>
                <td>{moment(country.Date).format("DD/MM/YYYY")}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {loading && <p className="text-center fs-5">loading .....</p>}
    </div>
  );
}
