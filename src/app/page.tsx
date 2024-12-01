import React from "react";

const HomePage = async () => {
  let jsonData;

  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(
    `https://api.sportradar.com/badminton/trial/v2/en/competitors/sr%3Acompetitor%3A76587/profile.json?api_key=${process.env.SPORT_RADAR_API_KEY}`,
    options
  )
    .then((res) => res.json())
    .then((res) => {
      jsonData = res;
      console.log(jsonData);
    })
    .catch((err) => console.error(err));

  return (
    <div>
      <h1>Hello World</h1>
      <pre>
        <code>{JSON.stringify(jsonData)}</code>
      </pre>
    </div>
  );
};

export default HomePage;
