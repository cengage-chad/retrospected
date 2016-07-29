import React from 'react';
import _ from 'lodash';
import RetroItem from './RetroItem';
import RetroColumnHeader from './RetroColumnHeader';
import { Col, PageHeader, Button, Glyphicon } from 'react-bootstrap';

export default class RetroColumn extends React.Component {
  render() {
    return (
        <div>
        {
          this.props.retroItems.map(item => <RetroItem key={item.id} ref="retro-item" retroItem={item} />)
        }
        </div>
    );
  }
}