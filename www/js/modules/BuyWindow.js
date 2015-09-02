import React from 'react';

import {Icon} from "../components/Icons";

export default React.createClass({

    getInitialState() {
        return {
            qty: 0
        }
    },

    onSave() {
        this.props.onSave(this.state);
    },

    qtyChange(event) {
        this.setState({qty: event.target.value});
    },

    render() {
        return (
            <div>
                <div aria-hidden="false" role="dialog" className="slds-modal slds-fade-in-open">
                    <div className="slds-modal__container">
                        <div className="slds-modal__header">
                            <h2 className="slds-text-heading--medium">Buy Order</h2>
                            <button className="slds-button slds-modal__close">
                                <svg aria-hidden="true" className="slds-button__icon slds-button__icon--inverse slds-button__icon--large">
                                </svg>
                                <span className="slds-assistive-text">Close</span>
                            </button>
                        </div>
                        <div className="slds-modal__content">

                            <div className="slds-form--stacked">

                                <fieldset className="slds-form--compound slds-m-bottom--medium">
                                    <div className="form-element__group">
                                        <div className="slds-form-element__row">
                                            <label className="slds-form-element__control slds-size--1-of-4">
                                                <small className="slds-form-element__helper">Symbol</small>
                                                <div>{this.props.stock.symbol}</div>
                                            </label>
                                            <label className="slds-form-element__control slds-size--1-of-4">
                                                <small className="slds-form-element__helper">Last</small>
                                                <div>
                                                    <span style={{color: this.props.stock.change<0?"red":"green"}}>{this.props.stock.last}</span>
                                                    <Icon category="utility" name={this.props.stock.change<0?"down":"up"} size="x-small" color={this.props.stock.change<0?"red":"green"}/>
                                                </div>
                                            </label>
                                            <label className="slds-form-element__control slds-size--1-of-4">
                                                <small className="slds-form-element__helper">Qty</small>
                                                <input className="slds-input" type="text" value={this.state.qty} onChange={this.qtyChange}/>
                                            </label>
                                            <label className="slds-form-element__control slds-size--1-of-4">
                                                <small className="slds-form-element__helper">Total</small>
                                                <div>{parseFloat(this.props.stock.last * this.state.qty).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>

                        </div>
                        <div className="slds-modal__footer">
                            <button className="slds-button slds-button--neutral" onClick={this.props.onCancel}>Cancel</button>
                            <button className="slds-button slds-button--neutral slds-button--brand" onClick={this.onSave}>Buy</button>
                        </div>
                    </div>
                </div>
                <div className="slds-modal-backdrop slds-modal-backdrop--open"></div>
            </div>
        );
    }

});