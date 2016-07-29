import React from 'react';
import NavigationView from '../containers/NavigationView';

export default class AppView extends React.Component {
    render() {
        return (
            <div id="app-view">
                <NavigationView></NavigationView>
                {this.props.children}
            </div>
        );
    }
}