import React from 'react';

import {Icon, ButtonIcon} from "./Icons";

export let Toast = React.createClass({

    render() {
        return (
            <div className={"slds-notify-container" + (this.props.visible ? " visible" : "")}>
                <div className="slds-notify slds-notify--toast slds-theme--success slds-theme--inverse-text" role="alert">
                    <span className="slds-assistive-text">Info</span>
                    <button className="slds-button slds-notify__close">
                        <ButtonIcon category="utility" inverse={true} color="#FFFFFF" name="close"/>
                        <span className="slds-assistive-text">Close</span>
                    </button>
                    <div className="notify__content">
                        <h2 className="slds-text-heading--small">{this.props.title}</h2>
                    </div>
                </div>
            </div>
        );
    }

});

export let Alert = React.createClass({

    render() {
        return (
            <div className="slds-notify slds-notify--alert slds-theme--alert-texture" role="alert">
                <h2><Icon category="utility" name="notification" size="x-small"/>  {this.props.title}</h2>
            </div>
        );
    }

});

