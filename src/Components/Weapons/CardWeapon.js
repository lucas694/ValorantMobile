import "./CardWeapon.css"

const CardWeapon = (props) => {
  return(
    <div className={"CardWeaponContainer"}>
      <h1 className={"CardWeaponTittle"}> {props.Tittle}</h1>
      <div className={"mt-4"}>
        <img src={props.CardIcon} alt={"CardIcon"} className={"CardWeaponIcon"}/>
      </div>
    </div>
  )
}; export default CardWeapon