import React from "react";
import { Segment, Image, Header } from "semantic-ui-react";

const Hero = () => (
  <Segment>
    <Header>Weather App for Learning.</Header>
    <Image src="/logo512.png" wrapped ui={false} />
  </Segment>
);

export default Hero;
