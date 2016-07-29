import React from 'react';
import RetroColumn from './RetroColumn';
import { Row, Col } from 'react-bootstrap';

export default class RetroBody extends React.Component {
  render() {
    return (
        <Row>
            {
                this.props.columns.map(column => {
                    return <Col xs={6} key={column.id}>
                        <RetroColumn {... this.props} retroItems={this.props.items.get(column.type) || []}/>
                    </Col>;
                })
            }
        </Row>
    );
  }
}