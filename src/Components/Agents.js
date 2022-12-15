import "./Agents.css"
import CardAgents from "./CardAgents";
import axios from "axios";
import {useState, useEffect} from "react";
import Header from "./Header";

const Agents = (props) => {
  const [data, setData] = useState([]);

  const baseUrl = ()  => {
    axios.get("https://valorant-api.com/v1/agents", { params: { language: "pt-BR", isPlayableCharacter: true } })
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
    <div className={"AgentsContainer"}>
      <Header/>
      {data.map((item) => {
        return(
          <div>
          <CardAgents CardIcon={item.displayIcon}
                     name={item.displayName}
                     BackgroundCard={item.background}
                     DescricaoCard={item.description}
                      id={item.uuid}/>
          </div>

        )
      })}
    </div>
  )
}
export default Agents