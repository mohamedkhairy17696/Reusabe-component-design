import React from "react";
import { Card, SectionHeader, SectionWrapper } from "../../components";
import MostPopularData from "../../Data/MostPopularData";
import "./MostPopular.css";

const MostPopular = () => {
  const cards = MostPopularData.map((card) => {
    return (
      <Card
        key={card.id}
        image={card.image}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download}
      />
    );
  });
  return (
    <SectionWrapper>
      <SectionHeader>Most Popular</SectionHeader>
      <div className="most-popular-items">{cards}</div>
    </SectionWrapper>
  );
};

export default MostPopular;
