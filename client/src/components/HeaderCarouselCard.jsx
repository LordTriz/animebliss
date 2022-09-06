import {
  PlayCircleOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { faListOl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TextTruncate from "react-text-truncate";

export default function CarouselCard({
  duration,
  cover,
  title,
  year,
  description,
  epcount,
  coversmall,
}) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  });
  let regexeddescription = description.replaceAll(/<\/?[\w\s]*>|<.+[\W]>/g, "");
  regexeddescription = regexeddescription.substring(
    0,
    regexeddescription.indexOf("("),
    4
  );

  return (
    <div
      className="header-card"
      style={{
        background:
          windowSize > 800
            ? ` linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) ),url(${cover}),center`
            : ` linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3) ),url(${coversmall}),center`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: /* windowSizne < 766 ? 330 :*/ 450,
      }}
    >
      <div
        className="anime-info-div"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h1
          className="anime-title"
          style={{
            fontSize: windowSize < 766 ? "2.5rem" : "4rem",
            color: "white",
          }}
        >
          {title !== "" && title}
        </h1>
        <div
          className="anime-info"
          style={{ color: "white", display: "flex", gap: "20px" }}
        >
          <p>
            {" "}
            <PlayCircleOutlined /> TV
          </p>
          <p>
            <FontAwesomeIcon icon={faListOl} /> {epcount} Episodes
          </p>
          <p>
            <ClockCircleOutlined /> {duration} Minutes
          </p>
          <p>
            <CalendarOutlined /> {year}
          </p>
        </div>
        <p
          className="anime-description"
          style={{
            textAlign: "justify",
            color: "white",
            fontSize:windowSize <766 ? "1.4rem" : "",

            width: windowSize < 766 ? "100%" : "50%",
          }}
        >
          {" "}
          <TextTruncate
            text={regexeddescription}
            line={windowSize < 766 ? 3 : 6}
          ></TextTruncate>
        </p>
      </div>
      <a className="btn btn-watchnow" href="/login">
        {" "}
        <PlayCircleOutlined /> Watch Now
      </a>
    </div>
  );
}
