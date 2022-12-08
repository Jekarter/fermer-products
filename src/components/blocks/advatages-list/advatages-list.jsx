import React from "react";
import Title from "../../ui/title/title"
import AdvantageCard from "../../ui/advatage-card/advatage-card"
import Button from "../../ui/button/button";
import "./style.css"


function AdvatagesList() {
  return (
    <section className="advantages-list">
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="advantages-list__list">
        <li className="advantages-list__item">
          <AdvantageCard />
        </li>
      </ul>
      <Button>Купить</Button>
    </section>
  )
}

export default AdvatagesList;