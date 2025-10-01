import Marquee from "react-fast-marquee";
import '../style/events.css'

const reviews = [
  { name: "International Health Awareness Film Festival", img: "/events/event1.jpg" },
  { name: "NLP Training", img: "/events/event2.jpg" },
  { name: "EduJoy Chess Master", img: "/events/event3.jpg" },
  { name: "EduJoy Chess Master", img: "/events/event4.jpg" },
  { name: "EduJoy Chess Master", img: "/events/event5.jpg" },
  { name: "EduJoy Birthday", img: "/events/event6.jpg" },
  { name: "Collective Iftar", img: "/events/event7.jpg" },
];

const ReviewCard = ({ img, name }) => (
  <div className="review-card">
    <div className="review-img-wrapper">
      <img className="review-img" src={img} alt={name} />
    </div>
    <p className="review-name">{name}</p>
  </div>
);



export function MarqueeDemo() {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
      <Marquee pauseOnHover speed={40}>
        {firstRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover direction="right" speed={40}>
        {secondRow.map((review, idx) => (
          <ReviewCard key={idx} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
