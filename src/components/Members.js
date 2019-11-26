import React, { Component } from 'react';
import Description from './Description';
import { Tab } from 'semantic-ui-react';

const panes = [
    {render:() => <Tab.Pane attached = {true}> <Description/></Tab.Pane>}
]

class Members extends Component {
    state = {color:"grey"}
    handleColorChange = e => this.setState({color: e.target.value})
    render() {
        const{color} = this.state
        return (
            <div className = "Apps">
                <Tab menu={{color, inverted: true, attached: true, tabular: true}} panes={panes} />
            </div>
        )
    }
}

export default Members