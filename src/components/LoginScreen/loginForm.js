import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from '../index';


class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            text: ''
        }
        this.inputField = this.inputField.bind(this);
    }

    inputField(text){
        this.setState({text});
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        value={this.state.text}
                        onChangeText={this.inputField}
                        style={{ height: 40, width: '100%' }}
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