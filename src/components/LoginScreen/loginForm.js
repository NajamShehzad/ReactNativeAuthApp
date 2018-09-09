import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from '../index';


class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: ''
        }
        this.inputField = this.inputField.bind(this);
    }

    inputField(email) {
        this.setState({ email });
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder="abc@example.com"
                        value={this.state.email}
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