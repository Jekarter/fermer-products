import React from "react";
import Title from "../../ui/title/title";
import FeatureCard from "../../ui/feature-card/feature-card";
import Button from "../../ui/button/button";
import "./style.css";


function FeaturesList({ features }) {
  return features && features.length ? (
    <section className="features">
      <Title>Почему фермерские продукты лучше?</Title>
      <ul className="features__list">
        {features.map((feature) => (
          <li className="features__item" key={feature.id}>
            <FeatureCard {...feature} />
          </li>
        ))}
      </ul>
      <Button>Купить</Button>
    </section>
  ) : null;
}

export default FeaturesList;