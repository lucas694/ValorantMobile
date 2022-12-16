import "./Weapons.css"
import Header from "../Header";
import axios from "axios";
import {useState, useEffect} from "react";
import CardWeapon from "./CardWeapon";


const Weapons = () => {
  const [data, setData] = useState([]);

  const baseUrl = ()  => {
    axios.get("https://valorant-api.com/v1/weapons", { params: { language: "pt-BR", isPlayableCharacter: true } })
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
    <div className={"WeaponsContainer"}>
      <Header title={"Armas"}/>
      {data.map((item) => {
        return(
          <div>
          <CardWeapon Tittle={item.displayName} CardIcon={item.displayIcon} className={"WeaponImg"}/>
          </div>

        )
      } )}
    </div>
  )
}; export default Weapons;