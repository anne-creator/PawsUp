import React from 'react'
import styles from 'Deatil.module.css'
import { RouteComponentProps } from 'react-router-dom';
interface MatchParams {
    touristRoutedId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
    console.log(props.history)
    console.log(props.location)
    console.log(props.match)
    return (<h1>路线ID：{props.match.params.touristRoutedId}</h1>)
}