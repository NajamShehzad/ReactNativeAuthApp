import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from '../index';


class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            text: ''
        }
        this.inputField = this.inputField.bind(this);
    }

    inputField(text) {
        this.setState({ text });
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label={this.state.text}
                        value={this.state.text}
                        onChangeText={this.inputField}
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        )
    }
}


export default LoginForm;