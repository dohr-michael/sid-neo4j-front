import React             from 'react';
import classNames        from 'classnames';
import styles            from './Badge.scss';

/**
 * @author michaeldohr
 * @since 18/10/15
 */
export default class Badge extends React.Component {

    static propTypes = {
        data: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string
    };

    static contextTypes = {};

    static defaultProps = {};

    constructor( props ) {
        super ( props );
    }

    render() {
        const content = this.props.icon || this.props.children;
        return (
            <span className={ classNames( this.props.className,
                                          { 'material-icons': !!this.props.icon },
                                          'mdl-badge') }
                  data-badge={ this.props.data }>
                { content }
            </span>
        );
    }
}