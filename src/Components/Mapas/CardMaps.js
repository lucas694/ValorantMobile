import "./CardMaps.css"

const CardMaps = (props) => {
  return(
    <div className={"CardMapsContainer"}>
      <h1 className={"CardMapsTittle"}>{props.Tittle}</h1>
      <div className={"mt-4"}>
        <img src={props.CardIcon} alt={"CardIcon"} className={"CardMapsIcon"}/>
      </div>
    </div>
  )
};export default CardMaps;