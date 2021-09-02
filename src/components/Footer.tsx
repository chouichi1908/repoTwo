import React from 'react'
import {Segment,Container,Grid,Header,List} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


function Footer (){

    return(
        <Segment inverted vertical style={{padding:'1.2em 0em'}}>
        <Container>
            <Grid inverted stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <Header inverted as="h4" color='violet' content='关于我们' />
                        <List link inverted>
                            <List.Item as='a'>网站地图</List.Item>
                            <List.Item as='a'>联系我们</List.Item>
                            <List.Item as='a'>合作公司</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header inverted as="h4" color='violet' content='友情链接' />
                        <List link inverted>
                            <List.Item as='a'>Google</List.Item>
                            <List.Item as='a'>Youtube</List.Item>
                            <List.Item as='a'>Instagram</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={6} floated='right'>
                        <Header as='h4' inverted color='violet'>版权声明</Header>
                        <p>Copyright © Dynamic Gravity {new Date().getFullYear()}.</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </Segment>
    )
}

export default Footer