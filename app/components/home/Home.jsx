import React             from 'react';


/**
 * @author michaeldohr
 * @since 17/10/15
 */
export default class Home extends React.Component {

    static propTypes = {};

    static contextTypes = {};

    constructor( props ) {
        super ( props );
    }

    render() {
        return (
            <div>Hello, from Home</div>
        );
    }
}