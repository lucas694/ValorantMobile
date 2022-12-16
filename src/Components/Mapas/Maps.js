import"./Maps.css"
import Header from "../Header";
import axios from "axios";
import {useState, useEffect} from "react";
import CardMaps from "./CardMaps";

const Maps = () => {
  const [data, setData] = useState([]);
  const baseUrl = ()  => {
    axios.get("https://valorant-api.com/v1/maps", { params: { language: "pt-BR" } })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  useEffect(() => {
    baseUrl()

  }, [])
  return(
    <div className={"MapsContainer"}>
      <Header title={"Mapas"}/>
      {data.map((item)=> {
        return(
          <div>
            <CardMaps Tittle={item.displayName} CardIcon={item.splash} />
          </div>
        )
      })}
    </div>
  )
};export default Maps;