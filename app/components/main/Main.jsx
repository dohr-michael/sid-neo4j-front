import React                 from 'react';
import { appRoute }          from 'tools/annotations';

import styles                from 'components/main/Main.scss';


@appRoute( '/' )
export default class Main extends React.Component {

    render() {
        return (
            <div>
                <h1>Title</h1>
                { this.props.children }
                <div>
                    <span>Footer</span>
                </div>
            </div>
        )
    }
}