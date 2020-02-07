import React, { Component } from 'react';
import { Header, Icon, Grid } from 'semantic-ui-react';
import SectionItem from './SectionItem'

const Sections = () => (
    <div>
        <Grid verticalAlign='middle'>
            <Grid.Column style={{ backgroundColor: '#BC112E', height: 65 }} width={5} textAlign='center'>
                <SectionItem name={'Carousel'} icon={'dollar sign'}></SectionItem>
            </Grid.Column>
            <Grid.Column style={{ backgroundColor: '#68953B', height: 65 }} width={5} textAlign='center'>
                <SectionItem name={'Catalogo'} icon={'computer'}></SectionItem>
            </Grid.Column>
            <Grid.Column style={{ backgroundColor: '#4B7BAB', height: 65 }} width={4} textAlign='center'>
                <SectionItem name={'Soporte'} icon={'ticket'}></SectionItem>
            </Grid.Column>
            <Grid.Column style={{ backgroundColor: '#DB9635', height: 65 }} width={2} textAlign='center'>
                <SectionItem name={''} icon={'user'}></SectionItem>
            </Grid.Column>

        </Grid>
    </div>
)
// class Sections extends Component {
//     render() {
//         return (
//             <div>
//                 <Grid verticalAlign='middle'>
//                     <Grid.Column style={{ backgroundColor: '#BC112E', height: 65 }} width={5} textAlign='center'>
//                         <SectionItem name={'Carousel'} icon={'dollar sign'}></SectionItem>
//                     </Grid.Column>
//                     <Grid.Column style={{ backgroundColor: '#68953B', height: 65 }} width={5} textAlign='center'>
//                         <SectionItem name={'Catalogo'} icon={'computer'}></SectionItem>
//                     </Grid.Column>
//                     <Grid.Column style={{ backgroundColor: '#4B7BAB', height: 65 }} width={4} textAlign='center'>
//                         <SectionItem name={'Soporte'} icon={'ticket'}></SectionItem>
//                     </Grid.Column>
//                     <Grid.Column style={{ backgroundColor: '#DB9635', height: 65 }} width={2} textAlign='center'>
//                         <SectionItem name={''} icon={'user'}></SectionItem>
//                     </Grid.Column>

//                 </Grid>
//             </div>


//         )
//     }
// }

export default Sections;