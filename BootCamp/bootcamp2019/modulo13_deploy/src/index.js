import React, { Component } from 'react';

import CodePush from 'react-native-code-push'
import OneSignal from 'react-native-onesignal'
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import './config/ReactotronConfig';

import {store, persistor} from '~/store';

import App from '~/App';


class Index  extends Component {

    constructor(props) {
        super(props)

        OneSignal.init('b01cf639-85a7-46f3-acf7-1bb0a4ec42db')

        OneSignal.addEventListener('received', this.onReceived)
        OneSignal.addEventListener('opened', this.onOpened)
        OneSignal.addEventListener('ids', this.onIds)
    }


    componentWillUnmount(){
        OneSignal.addEventListener('received', this.onReceived)
        OneSignal.addEventListener('opened', this.onOpened)
        OneSignal.addEventListener('ids', this.onIds)
    }

    onReceived = (data) => {
        console.log(data)
    }
    onOpened = (notification)  => {

    }

    onIds = (id) => {

    }


    render (){

        return (

        <Provider store={store}>
            <PersistGate persistor={persistor}>
                {/* <StatusBar barStyle="light-content" backgroundColor="#22202C" /> */}
                <StatusBar hidden />
                <App />
            </PersistGate>
        </Provider>

        )
    }
}
    




export default CodePush({
    checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(Index);
