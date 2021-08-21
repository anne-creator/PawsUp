import React from 'react'
import styles from './SignIn.module.css'

export interface SignInPageProps {

}
export class SignInPage extends React.Component<SignInPageProps> {
    constructor(props: SignInPageProps) {
        super(props);
        console.log(props);
    }
    render() {
        return (<h1>sign in Page</h1>);
    }
}

