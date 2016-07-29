import React from 'react';
import RetroHeader from '../components/RetroHeader';
import RetroBody from '../components/RetroBody';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import * as RetroActions from '../actions/RetroActions';
import PureRenderMixin from 'react-addons-pure-render-mixin';

@connect(state => ({ retroItems: state.retroItems }))
export default class RetroView extends React.Component {
  // static needs = [
  //   TodoActions.getTodos
  // ]
  
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
    
  render() {
    const { dispatch, retroItems } = this.props;
    const retroColumns = [{type: 'good', id: 1}, {type: 'change', id: 2}];
    
    return (
      <Grid id="retro-columns">
        <RetroHeader columns={retroColumns} {...bindActionCreators(RetroActions, dispatch)}></RetroHeader>
        <RetroBody columns={retroColumns} items={retroItems} {...bindActionCreators(RetroActions, dispatch)}></RetroBody>
      </Grid>
    );
  }
}