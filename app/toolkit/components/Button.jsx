import React             from 'react';
import classNames        from 'classnames';
import styles            from './Button.scss';

/**
 * @author michaeldohr
 * @since 20/10/15
 */
class Button extends React.Component {

    static propTypes = {
        ripple: React.PropTypes.bool
    };

    constructor( props ) {
        super ( props );
    }

    /**
     * Returns additional styles.
     * @abstract
     * @returns {object}
     */
    getClassNames() {
        return null;
    }

    /**
     * Returns the content of the button. will change in function of the kid of button.
     * @returns {object}
     */
    getContent() {
        return this.props.children;
    }


    render() {
        return (
            <button className={ classNames( this.props.className,
                                            'mdl-button',
                                             this.getClassNames())}>
                { this.getContent() }
            </button>
        );
    }
}

export class FabButton extends Button {

    static propTypes = {
        colored: React.PropTypes.bool
    };

    getClassNames() {
        return {
            'mdl-button--fab': true,
            'mdl-button--colored': this.props.colored
        };
    }
}