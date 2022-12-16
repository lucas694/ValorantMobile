import "./CardAgents.css"
import { Link} from "react-router-dom";


const CardAgent = (props) => {
  return(

    <div className="CardAgentContainer">
      <img src={props.BackgroundCard} className={"BackgroundCardChamp"} alt={"a"} />
      <div className={"FirstSec"}>
        <div className={"IconDiv"}>
          <img src={props.CardIcon}  className="CardIcon" alt={"a"} />
        </div>
        <div className={"CardName"}>
          <p>{props.name}</p>
        </div>
      </div>

      <div className={"DescCard"}>
        <p>{props.DescricaoCard}</p>
        <Link to={`/agents/${props.id}`}>
          <button className={"Btn-Agents"}>Ver Mais</button>
        </Link>
      </div>

    </div>
  )
}

export default CardAgent