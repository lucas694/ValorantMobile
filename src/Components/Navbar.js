import "./Navbar.css"
//imgs
import home from "../assets/img/home.png"
import agents from "../assets/img/agents.png"
import gun from "../assets/img/gun.png"
import map from "../assets/img/map.png"
import {Link} from "react-router-dom";



const Navbar = () => {
  const ButtonNavBar = [
    {btnImg: home, btnDesc: "Home", btnLink: "/"},
    {btnImg: agents, btnDesc: "Agentes", btnLink: "/Agentes"},
    {btnImg: gun, btnDesc: "Armas", btnLink: "/Armas"},
    {btnImg: map, btnDesc: "Mapas", btnLink: "/Mapas"}
  ]
  return (
    <div className={"NavbarContainer"}>
      <div className={"NavbarContent"}>
        {ButtonNavBar.map((item) => {
          return(
            <button>
                <Link className={"Btn-Navbar"} to={item.btnLink}>
                  <img src={item.btnImg} className={"NavImg"} alt={""} />
                  <p className={"TittleNav"}>{item.btnDesc}</p>
              </Link>
            </button>
          )
        })}
      </div>
    </div>
  )
};
export default Navbar;