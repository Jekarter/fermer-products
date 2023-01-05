import React from "react";
import Title, { TitleSize } from "../../ui/title/title";
import "./styles";
import { Text, StyledAbout } from "./styles";

function About() {
  return (
    <StyledAbout>
      <Title size={TitleSize.BIG}>
        {" "}
        Магазин фермерских продуктов с доставкой
      </Title>
      <Text>
        Все продукты изготавливаются под заказ. Фермеры начинают готовить
        продукты за день до отправки заказа клиентам. Именно поэтому мы
        принимаем заказы заранее и доставляем продукты максимально свежими.
      </Text>
    </StyledAbout>
  );
}

export default About;
