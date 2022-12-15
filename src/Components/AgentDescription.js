import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import {Link} from "react-router-dom";
import "./AgentDescription.css";
import axios from "axios";



const AgentDescription = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const[loading, setLoading] = useState(true);


  useEffect(() => {
    // Faz uma chamada à API do Valorant para obter o detalhe de um personagem específico
    axios.get(`https://valorant-api.com/v1/agents/${id}`,{ params: { language: "pt-BR"}
    })
      .then(response => {
        setCharacter(response.data.data)
        setLoading(false)
  })
      .catch(error => console.error(error));
  }, [id]);
  const details = [
    {name:character.displayName, characterBackground:character.fullPortrait, }
  ]
  if (loading) return(
    <div className="loading">
      <h1>Carregando...</h1>
    </div>
  )
  return (
    <div className={`AgentDescriptionContainer`}>
      <img src={character.fullPortrait} alt={""} className={"characterBackground"}/>
      <div className={`AgentDescriptionContent`}>
        <header className={"AgentDescriptionHeader"}>
          <div className={"HeaderContent"}>
            <Link to={"/Agentes"}> <FaChevronLeft className={"ArrowBackIcon"}/> </Link>
            <h1 className={"AgentDescriptionName"}>{character.displayName}</h1>
          </div>
          <div className={"HeaderContentRole"}>
            <img src={character.role.displayIcon} alt={""} className={"RoleIcon"}/>
            <h1 className={"RoleName"}>{character.role.displayName}</h1>
          </div>
        </header>
        <div className={"AbilitiesContainer"}>
          <h1 className={"AbilitiesTittle"}>Habilidades</h1>
            {character.abilities.map((item) => {
              return(
                <div className={"AbilitiesContent"}>
                  <section className={"flex flex-col items-center"}>
                    <img src={item.displayIcon} alt={""} className={"AbilityIcon"}/>
                    <h1 className={"AbilityName"}>{item.displayName}</h1>
                  </section>
                  <section className={"AbilityDescription"}>
                    <p className={"AbilityD"}>{item.description}</p>
                    <hr className={"AbilityHR"}/>
                  </section>
                </div>
              )}
            )}
        </div>
      </div>
    </div>
  );
};

export default AgentDescription;