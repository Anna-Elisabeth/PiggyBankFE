import "./team.css";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Snort from "../../pigsnort.mp3";
import useSound from "use-sound";
import Dylan from "../../dylanpig.png";
import Jordan from "../../jordanpig.png";
import Piers from "../../pierspig.png";
import Rob from "../../robpig.png";
import Chris from "../../chrispig.png";

function MeetTheTeam() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const soundUrl1 = Snort;
  const [play1, { stop }] = useSound(soundUrl1);

  function handleMouseOver1() {
    setText1(
      <div style={{ backgroundColor: "#FF6666", color: "#000000" }}>
        <p>Clarkey - Straight from the pig’s snout—the truth, unfiltered.</p>
      </div>
    );
    setText2("");
  }

  function handleMouseOver2() {
    setText2(
      <div style={{ backgroundColor: "#CF99FF", color: "#000000" }}>
        <p>Michaela- Saving money is oink-credible!</p>
      </div>
    );
    setText1("");
  }

  function handleMouseOver3() {
    setText3(
      <div style={{ backgroundColor: "#99C2FF", color: "#000000" }}>
        <p>
          Anna - Never wrestle with pigs. You both get dirty and the pig likes
          it.
        </p>
      </div>
    );
    setText4("");
  }

  function handleMouseOver4() {
    setText4(
      <div style={{ backgroundColor: "#99FF9C", color: "#000000" }}>
        <p>Lucy - Oink Oink</p>
      </div>
    );
    setText3("");
  }

  function handleMouseOver5() {
    setText5(
      <div style={{ backgroundColor: "#FF99E0", color: "#000000" }}>
        <p>
          Adele - They say money can't buy happiness, but it sure can buy a lot
          of truffles for this money-savvy pig
        </p>
      </div>
    );
    setText4("");
  }

  function handleMouseOut() {
    setText1("");
    setText2("");
    setText3("");
    setText4("");
    setText5("");
  }
  return (
    <div>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "400",
            marginTop: "15px",
          }}
        >
          {" "}
          <b>Meet the team ₍ᐢ･⚇･ᐢ₎</b>{" "}
        </h1>
        <br />
        {/* <h4 style={{textAlign: "center", color: "black", fontWeight: "300"}}>  VOLUME: ▁▂▃▄▅▆▇ 100%</h4> */}
      </div>

      <div className="container" id="team">
        <div className="gallery-wrap" style={{ marginTop: "50px" }}>
          <div
            className="item item-1"
            id="1"
            onMouseOver={() => {
              handleMouseOver1();
              play1();
            }}
            onMouseOut={() => {
              handleMouseOut();
              stop();
            }}
          >
            {text1 && <p className="text">{text1}</p>}
          </div>

          <div
            className="item item-2"
            id="2"
            onMouseOver={() => {
              handleMouseOver2();
              play1();
            }}
            onMouseOut={() => {
              handleMouseOut();
              stop();
            }}
          >
            {text2 && <p className="text">{text2}</p>}
          </div>

          <div
            className="item item-3"
            id="3"
            onMouseOver={() => {
              handleMouseOver3();
              play1();
            }}
            onMouseOut={() => {
              handleMouseOut();
              stop();
            }}
          >
            {text3 && <p className="text">{text3}</p>}
          </div>

          <div
            className="item item-4"
            id="4"
            onMouseOver={() => {
              handleMouseOver4();
              play1();
            }}
            onMouseOut={() => {
              handleMouseOut();
              stop();
            }}
          >
            {text4 && <p className="text">{text4}</p>}
          </div>

          <div
            className="item item-5"
            id="5"
            onMouseOver={() => {
              handleMouseOver5();
              play1();
            }}
            onMouseOut={() => {
              handleMouseOut();
              stop();
            }}
          >
            {text5 && <p className="text">{text5}</p>}
          </div>
        </div>
        <Card style={{ marginTop: "50px" }} border="light" border-10>
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              {" "}
              <h1>
                <b> Special Thanks </b>
              </h1>
            </Card.Title>

                    <img src={Dylan} alt="Piggy Dylan"/>
                    <img src={Piers} alt="Piggy Piers"/>
                    <img src={Jordan} alt="Piggy Jordan"/>
                    <img src={Rob} alt="Piggy Rob"/>
                    <img src={Chris} alt="Piggy Chris"/>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default MeetTheTeam;
