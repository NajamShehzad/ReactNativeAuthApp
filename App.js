import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header, Spinner } from './src/components/index';
import firebase from 'firebase';
import LoginForm from './src/components/LoginScreen/loginForm';
import firebaseKey from './firebaseApi';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: null
        }
    }
    componentWillMount() {
        firebase.initializeApp(firebaseKey);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true })
            }
            else {
                this.setState({ loggedIn: false })
            }
        })
    }
    onPress() {
        console.log('Working');
    }
    renderButton(text) {
        return (
            <TouchableOpacity
                onPress={() => firebase.auth().signOut()}
                style={styles.buttonStyle}
            >
                <Text style={styles.textStyle} >Log Out</Text>
            </TouchableOpacity>
        )
    }



    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return this.renderButton()
            case false:
                return <LoginForm />
            default:
                return <View style={styles.spinnerStyle}><Spinner size='large' /></View>
        }

    }

    render() {
        return (
            <View >
                <Header name={'Authentication App '} />
                {this.renderContent()}
            </View>
        );
    }
}
const styles = {
    buttonStyle: {
        // flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: "#007aff",
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    spinnerStyle: {
        alignSelf: 'center',
        alignItems: 'center',
        // justifyContent: 'center',
        marginBottom: '25%'
    }

}