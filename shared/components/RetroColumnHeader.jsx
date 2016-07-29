import React from 'react';
import { PageHeader, Button, Glyphicon } from 'react-bootstrap';

export default class RetroColumnHeader extends React.Component {
  addItem() {
    this.props.addItem(this.props.title);  
  }
  
  render() {
    return (
        <PageHeader>
          <small>{this.props.title}</small>
          <span className="pull-right">
            <Button bsStyle="default" bsSize="small" pullRight onClick={this.addItem.bind(this)}><Glyphicon glyph="plus"/></Button>
          </span>
        </PageHeader>
    );
  }
}