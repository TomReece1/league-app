import { useEffect, useState } from "react";

function Content() {
  const [freeChamps, setFreeChamps] = useState({ freeChampionIds: [] });

  useEffect(() => {
    const API_key = "RGAPI-8969c1a7-87c1-4c49-9b3e-6f59eb60e933";
    let APICallString =
      "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=" +
      API_key;
    //Example working URL
    //"https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-8969c1a7-87c1-4c49-9b3e-6f59eb60e933"

    fetch(APICallString)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("below is the parsed response from API");
        console.log(data);
        setFreeChamps(data);
        console.log(
          "below is the value of freeChamps state after setFreeChamps with the above data"
        );
        console.log(freeChamps);
      });
  }, []);
  return (
    <section>
      <p>Free champions this patch:</p>
      {console.log("below is the freeChamps state before rendering")}
      {console.log(freeChamps)}
      {freeChamps.freeChampionIds.map((champId) => {
        return <p key={champId}>{champId}</p>;
      })}
    </section>
  );
}

export default Content;
