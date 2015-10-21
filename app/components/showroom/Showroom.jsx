import React             from 'react';

import { appRoute }          from 'toolkit/annotations';
// Components.
import Badge             from 'toolkit/components/Badge';
import { FabButton }            from 'toolkit/components/Button';


/**
 * @author michaeldohr
 * @since 18/10/15
 */
@appRoute( 'components/showroom' )
export default class Showroom extends React.Component {

    static propTypes = {};

    static contextTypes = {};

    constructor( props ) {
        super ( props );
    }

    render() {
        return (
            <div>
                <p>
                    Component showroom.
                </p>
                <Badge icon="account_box" data="1" />
                <Badge data="42">
                    My message
                </Badge>

                <FabButton>
                    Toto
                </FabButton>
                <FabButton colored="true">
                    Toto
                </FabButton>
            </div>
        );
    }
}