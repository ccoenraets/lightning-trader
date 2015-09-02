import React from 'react';

import {Icon, ButtonIcon} from "../components/Icons";
import {ActionButton, DropdownItem} from "../components/Dropdown";

var StockRow = React.createClass({

    actionHandler(value, label) {
        if (label==="Buy") {
            this.props.onBuy(this.props.stock)
        } else if (label==="Sell") {
            this.props.onSell(this.props.stock)
        } else if (label==="Remove") {
            this.props.onRemove(this.props.stock)
        }
    },

    render: function () {
        var lastBackgroundColor = 'transparent',
            changeClass = 'change-positive',
            iconClass = 'glyphicon glyphicon-triangle-top';
        if (this.props.stock === this.props.last) {
            lastBackgroundColor = this.props.stock.change < 0 ? 'red' : 'green';
        }
        if (this.props.stock.change < 0) {
            changeClass = 'change-negative';
            iconClass = 'glyphicon glyphicon-triangle-bottom';
        }
        return (
            <tr>
                <td data-label="stage">
                    <span>{this.props.stock.symbol}</span>
                </td>
                <td data-label="open" style={{textAlign: "right"}}>
                    <span>{this.props.stock.open}</span>
                </td>
                <td data-label="last" style={{textAlign: "right", backgroundColor: lastBackgroundColor}}>
                    <span>{this.props.stock.last}</span>
                </td>
                <td data-label="change" style={{textAlign: "right"}}>
                    <span style={{color: this.props.stock.change<0?"red":"green"}}>{this.props.stock.change}</span>
                    <Icon category="utility" name={this.props.stock.change<0?"down":"up"} size="x-small" color={this.props.stock.change<0?"red":"green"}/>
                </td>
                <td data-label="high" style={{textAlign: "right"}}>
                    <span>{this.props.stock.high}</span>
                </td>
                <td data-label="low" style={{textAlign: "right"}}>
                    <span>{this.props.stock.low}</span>
                </td>
                <td style={{width:"50px"}}>
                    <ActionButton onChange={this.actionHandler}>
                        <DropdownItem label="Buy"/>
                        <DropdownItem label="Sell"/>
                        <DropdownItem label="Remove"/>
                    </ActionButton>
                </td>
            </tr>
        );
    }
});

export default React.createClass({

    getInitialState() {
        return ({sortField: "symbol"})
    },

    getDefaultProps() {
        return {stocks: []}
    },

    linkHandler(property) {
        window.location.hash = "#property/" + property.property_id;
    },

    actionHandler(data, value, label) {
        if (label === "Delete") {
            this.props.onDelete(data);
        } else if (label === "Edit") {
            this.props.onEdit(data);
        }
    },

    sortHandler(col) {
        this.setState({sortField: col});
    },

    render() {

        var rows = [];
        for (var symbol in this.props.stocks) {
            var stock = this.props.stocks[symbol];
            rows.push(<StockRow key={stock.symbol} stock={stock} last={this.props.last}
                                onSell={this.props.onSell}
                                onBuy={this.props.onBuy}
                                onRemove={this.props.onRemove}/>);
        }

        rows.sort((a, b) => {
            return a.props.stock[this.state.sortField] < b.props.stock[this.state.sortField] ? -1 : 1;
        });

        return (
            <table className="slds-table slds-table--bordered slds-max-medium-table--stacked-horizontal slds-no-row-hover">
                <thead>
                    <tr className="slds-text-heading--label">
                        <th className="slds-is-sortable" scope="col">
                            <span className="slds-truncate">Symbol</span>
                            <button className="slds-button slds-button--icon-bare slds-button--icon-border-small" onClick={this.sortHandler.bind(this, 'symbol')}>
                                <ButtonIcon name="arrowdown" size="--small"/>
                                <span className="slds-assistive-text">Sort</span>
                            </button>
                        </th>
                        <th className="slds-is-sortable" scope="col" style={{textAlign: "right", width:"110px"}}>
                            <span className="slds-truncate">Open</span>
                            <button className="slds-button slds-button--icon-bare slds-button--icon-border-small" onClick={this.sortHandler.bind(this, 'open')}>
                                <ButtonIcon name="arrowdown" size="--small"/>
                                <span className="slds-assistive-text">Sort</span>
                            </button>
                        </th>
                        <th className="slds-is-sortable" scope="col" style={{textAlign: "right", width:"110px"}}>
                            <span className="slds-truncate">Last</span>
                            <button className="slds-button slds-button--icon-bare slds-button--icon-border-small" onClick={this.sortHandler.bind(this, 'last')}>
                                <ButtonIcon name="arrowdown" size="--small"/>
                                <span className="slds-assistive-text">Sort</span>
                            </button>
                        </th>
                        <th className="slds-is-sortable" scope="col" style={{textAlign: "right", width:"110px"}}>
                            <span className="slds-truncate">Change</span>
                            <button className="slds-button slds-button--icon-bare slds-button--icon-border-small" onClick={this.sortHandler.bind(this, 'change')}>
                                <ButtonIcon name="arrowdown" size="--small"/>
                                <span className="slds-assistive-text">Sort</span>
                            </button>
                        </th>
                        <th className="slds-is-sortable" scope="col" style={{textAlign: "right", width:"110px"}}>
                            <span className="slds-truncate">High</span>
                            <button className="slds-button slds-button--icon-bare slds-button--icon-border-small" onClick={this.sortHandler.bind(this, 'high')}>
                                <ButtonIcon name="arrowdown" size="--small"/>
                                <span className="slds-assistive-text">Sort</span>
                            </button>
                        </th>
                        <th className="slds-is-sortable" scope="col" style={{textAlign: "right", width:"110px"}}>
                            <span className="slds-truncate">Low</span>
                            <button className="slds-button slds-button--icon-bare slds-button--icon-border-small" onClick={this.sortHandler.bind(this, 'low')}>
                                <ButtonIcon name="arrowdown" size="--small"/>
                                <span className="slds-assistive-text">Sort</span>
                            </button>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

});