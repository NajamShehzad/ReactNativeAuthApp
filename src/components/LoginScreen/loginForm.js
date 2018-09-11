import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Spinner } from '../index';
import firebase from 'firebase';
import { Text } from 'react-native';


class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
        this.emailField = this.emailField.bind(this);
        this.passwordField = this.passwordField.bind(this);
        this.onLoginSucess = this.onLoginSucess.bind(this);
        this.onLoginFail = this.onLoginFail.bind(this);
    }

    emailField(email) {
        this.setState({ email });
    }

    passwordField(password) {
        this.setState({ password });
    }
    onButtonPress() {

        const { email, password } = this.state;
        this.setState({ error: '', loading: true })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSucess)
            .catch(error => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSucess)
                    .catch(this.onLoginFail);
            });
    }
    onLoginSucess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        })
    }
    onLoginFail(){
        this.setState({ error: 'Authentication Fails', loading: false })
    }

    renderButton() {
        return (
            !this.state.loading ?
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log in
                </Button>
                : <Spinner />
        )
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
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}
export default LoginForm;