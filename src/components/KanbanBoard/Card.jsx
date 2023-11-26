import { useEffect, useRef, useState } from "react";
import "./Card.css";
import { TbLineDashed } from "react-icons/tb";

const Card = ({ ticketData }) => {
  const cardBodyRef = useRef(null);
  const titleClip =
    ticketData.title.length > 50
      ? ticketData.title.substr(0, 50) + "..."
      : ticketData.title;
  const [titleShown, setTitleShown] = useState(titleClip);

  useEffect(() => {
    const onMouseOver = () => {
      if (titleClip === ticketData.title) return;
      setTitleShown(ticketData.title);
    };

    const onMouseOut = () => {
      if (titleClip === ticketData.title) return;
      setTitleShown(titleClip);
    };

    const cardBody = cardBodyRef.current;

    cardBody.addEventListener("mouseover", onMouseOver);
    cardBody.addEventListener("mouseout", onMouseOut);

    return () => {
      cardBody.removeEventListener("mouseover", onMouseOver);
      cardBody.removeEventListener("mouseout", onMouseOut);
    };
  }, [ticketData, titleClip]);

  return (
    <div className="card" ref={cardBodyRef}>
      <div className="card-head">
        <div>{ticketData.id}</div>
        <div>{ticketData.userId}</div>
      </div>
      <div className="card-title">{titleShown}</div>
      <div className="card-footer">
        <TbLineDashed className="card-setting" />
        {ticketData.tag.map((tagName) => (
          <div key={tagName + ticketData.id} className="card-tag">
            <div className="tag-icon"></div>
            {tagName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
