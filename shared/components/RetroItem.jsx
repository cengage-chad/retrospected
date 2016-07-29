import React from 'react';
import { Button, Panel, Glyphicon, Well, Row, Col } from 'react-bootstrap';

export default class RetroItem extends React.Component {
  
  render() {
    const footer = <div className="pull-right">
        <Col xs={4}>
            <Button bsStyle="info"><Glyphicon glyph="thumbs-up"/></Button>
        </Col>
        <Col xs={4}>
            <Button bsStyle="info"><Glyphicon glyph="thumbs-down"/></Button>
        </Col>
    </div>;
    
    return (
        <Well>
            <Row>{this.props.retroItem.description}</Row>
            <Row>{footer}</Row>
        </Well>
    );
  }
}