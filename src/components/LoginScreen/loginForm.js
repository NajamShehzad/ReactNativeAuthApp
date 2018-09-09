import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from '../index';


class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.emailField = this.emailField.bind(this);
        this.passwordField = this.passwordField.bind(this);
    }

    emailField(email) {
        this.setState({ email });
    }
    
    passwordField(password) {
        this.setState({ password });
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder="abc@example.com"
                        value={this.state.email}
                        onChangeText={this.emailField}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry={true}
                        label='Password'
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={this.passwordField}
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