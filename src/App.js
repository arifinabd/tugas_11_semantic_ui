import React from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Dimmer,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Loader,
  Placeholder,
  Search,
  Segment,
} from "semantic-ui-react";

function App() {
  return (
    <div>
      <br />
      <Segment>
        <Grid columns="2" stackable textAlign="center">
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign="middle">
            <Grid.Column>
              <Header icon>
                <Icon name="search" link />
                Cari document
              </Header>
              <Search placeholder="Search document..." />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name="file pdf outline" />
                Tambah document baru
              </Header>
              <br />
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
      <br />
      <Grid columns="equal">
        <Grid.Column width={5}>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column width={7}>
          <Segment>
            <Placeholder>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Header>Website Terkait</Header>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a href="http://google.com" target="_blank">
                  Google
                </a>
              }
            />
          </List>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a href="http://facebook.com" target="_blank">
                  Facebook
                </a>
              }
            />
          </List>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a href="https://react.semantic-ui.com/" target="_blank">
                  Semantic-ui
                </a>
              }
            />
          </List>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a href="https://niomic.com/" target="_blank">
                  Niomic
                </a>
              }
            />
          </List>
          <List>
            <List.Item
              icon="linkify"
              as="p"
              content={
                <a href="https://reactjs.org/" target="_blank">
                  React
                </a>
              }
            />
          </List>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
