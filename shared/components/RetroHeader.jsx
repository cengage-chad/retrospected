import React from 'react';
import RetroColumnHeader from './RetroColumnHeader';
import RetroItemModal from '../components/RetroItemModal';
import { Row, Col } from 'react-bootstrap';

export default class RetroHeader extends React.Component {
  addItem(title) {
      this.refs['new-item-modal'].open(title);
  }
  
  render() {
    return (
        <Row>
            {
                this.props.columns.map(column => {
                    return <Col xs={6} key={column.id}>
                        <RetroColumnHeader title={column.type} {...this.props} addItem={this.addItem.bind(this)} />
                    </Col>;
                }) 
            }
            <RetroItemModal ref="new-item-modal" {...this.props}></RetroItemModal>
        </Row>
    );
  }
}