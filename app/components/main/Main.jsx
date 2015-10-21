import React                                from 'react';

import { appRoute }                         from 'toolkit/annotations';
import styles                               from 'components/main/Main.scss';

import NavigationLayout                     from 'toolkit/layouts/NavigationLayout';


@appRoute( '/' )
export default class Main extends React.Component {

    render() {
        return (
            <NavigationLayout title="SID - Neo4j">
                { this.props.children }
            </NavigationLayout>
        )
    }
}