import { Segment, Container, Grid, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import React from "react";

const nav = React.memo(() => {
  console.log("render header.");
  return (
    <Segment
      inverted
      vertical
      style={{ padding: "1.2em 0em", margin: "0,0,960px,0" }}
    >
      <Container>
        <Grid inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as={Link} to="/" inverted color="blue" content="Home" />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header
                as={Link}
                to="/currentweather"
                inverted
                color="olive"
                content="Page2"
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <Header
                as={Link}
                to="/forecasteachthreehours"
                inverted
                color="violet"
                content="Page3"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
});

export default nav;
