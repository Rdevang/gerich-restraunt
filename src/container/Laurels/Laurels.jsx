import React from 'react';
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import './Laurels.css';

const AwardCard = ({award:{imgUrl,title,subtitle}}) => {
  return (
    <div className="app__laurel_award-card">
      <img src={imgUrl} alt="" />
      <div className="app__laurel_award-card_content">
        <p className="p__cormorant" style={{ color: "dcca87" }}>
          {title}
        </p>
        <p className="p__cormorant" >
          {subtitle}
        </p>
      </div>
    </div>
  );
}

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper-info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant"> Our Laurels</h1>
      <div className="app__laurels_awards">
        {
          data.awards.map((award)=>(<AwardCard  award={award} key={award.title} />))
        }
      </div>
    </div>

    <div className="app__wrapper-img"><img src={images.laurels} alt=""  /></div>
  </div>
);

export default Laurels;
