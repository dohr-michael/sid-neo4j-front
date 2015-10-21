import React             from 'react';
import classNames        from 'classnames';
import { Link }          from 'react-router';

import styles            from './NavigationLayout.scss';

/**
 * @author michaeldohr
 * @since 18/10/15
 */
export default class NavigationLayout extends React.Component {

    static propTypes = {
        title: React.PropTypes.string,
    };

    static contextTypes = {};

    constructor( props ) {
        super ( props );
    }

    render() {
        return (
            <div className={ classNames( this.props.className, 'mdl-layout mdl-js-layout mdl-layout--fixed-header' ) }>
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">{ this.props.title }</span>
                    </div>
                </header>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        { this.props.children }
                    </div>
                </main>
                <footer className="mdl-mega-footer">
                    <div className="mdl-mega-footer__middle-section">
                        <div className="mdl-mega-footer__drop-down-section">
                            <h1 className="mdl-mega-footer__heading">Features</h1>
                            <ul className="mdl-mega-footer__link-list">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Updates</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}