import React from "react";
import {Image} from "react-bootstrap";
import Img1 from "../imageEffect/images/Card1.jpg";
import Img2 from "../imageEffect/images/Card2.jpg";
import Img3 from "../imageEffect/images/Card3.jpg";
import Img4 from "../imageEffect/images/Card4.jpg";

export function ImageShow() {
  return (
    <div id="show">
      <Image src={Img1} alt="Card1" width="458px" height="600px" roundedCircle></Image>

      <Image src={Img2} alt="Card1" width="458px" height="600px" roundedCircle></Image>

      <Image src={Img3} alt="Card1" width="459px" height="600px" roundedCircle></Image>

      <Image src={Img4} alt="Card1" width="460px" height="600px" roundedCircle></Image>
    </div>
  );
}

