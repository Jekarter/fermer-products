import React from "react";
import "./style.css"

export const ProductFrom = {
  FARM: "farm",
  SHOP: "shop"
};

function AdvantageCard({ children, from }) {
  return (
    <article className="advantage-card">
      <div className="advantage-card__title">
        <figure className="advantage-card__figure">
          <span className={`advantage-from_farm${from ? ` advantage-from_${from}` : ""}`}>Фермерские продукты</span>
        </figure>
        <p className="advantage-card__item-title">Еда намного вкуснее</p>
      </div>
      <p className="advantage-card__text">Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники</p>
    </article>
  );
}

export default AdvantageCard;
