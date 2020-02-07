import React, { Component } from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const SectionItem = ({ name, icon }) => (
    <Grid>
        <Grid.Column >
            <Link to={`/${name.toLowerCase()}`}>
                <Header style={{ fontSize: 11, color: '#FFFFFF', marginTop: 17 }}>
                    <Icon.Group size='large'>
                        <Icon name={icon} />
                    </Icon.Group>
                    {name}
                </Header>
            </Link>
        </Grid.Column>
    </Grid>
)
// class SectionItem extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         const { name, icon } = this.props;
//         const linkTo = `/${name}`.toLowerCase()
//         return (
//             <Grid>
//                 <Grid.Column >
//                     <Link to={linkTo}>
//                         <Header style={{ fontSize: 11, color: '#FFFFFF', marginTop: 17 }}>
//                             <Icon.Group size='large'>
//                                 <Icon name={icon} />
//                             </Icon.Group>
//                             {name}
//                         </Header>
//                     </Link>
//                 </Grid.Column>
//             </Grid>
//         )
//     }
// }

export default SectionItem;