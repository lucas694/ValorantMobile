import "./Home.css"
import ValorantText from "../../assets/img/VALORANT.png"
import ValorantLogo from "../../assets/img/Logo.png"
import Effect from "../../assets/img/effect.png"
import BgMobile from "../../assets/img/ValorantHomeMob.png"
import BgDesk from "../../assets/img/ValorantDesk.webp"
import EffectDesk from "../../assets/img/effectDesk.png"

const Home = () => {
  return(
    <div className={"HomeContainer"}>
      <img src={ValorantText} alt={"ValorantText"} className={"ValorantText"} />
      <img src={ValorantLogo} alt={"Logo"} className={"ValorantLogo"}/>
      <img src={Effect} alt={"Efeito"} className={"Efeito"}/>
      <img src={BgMobile} alt={"bg"} className={"BgMobile"}/>
      <img src={BgDesk} alt={"bg"} className={"BgDesk"}/>
      <img src={EffectDesk} alt={"bg"} className={"EfeitoDesk"}/>
    </div>
  )
};
export default Home;