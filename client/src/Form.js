import React, {Component} from 'react'
import {Button, Confirm, Input} from 'semantic-ui-react'

class ConfirmExampleConfirm extends Component {
    state = {
        open: false
    }

    show = () => this.setState({open: true})
    handleConfirm = () => this.setState({open: false})
    handleCancel = () => this.setState({open: false})

    render() {
        return (
            <div>
                <Input action={{
                    icon: 'cloud upload',
                    onClick: this.show
                }} placeholder='Search...' disabled />
                <Confirm open={this.state.open} onCancel={this.handleCancel} onConfirm={this.handleConfirm}/>
            </div>
        )
    }
}

export default ConfirmExampleConfirm
