import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'
import request from '../Request'

const Home = () => {
    return (
        <>
            <Main />
            <Row rowId='1' title="Up Coming" fetchURL={request.requestUpComing} />
            <Row rowId='2' title="Popular" fetchURL={request.requestPopular} />
            <Row rowId='3' title="Trending" fetchURL={request.requestTrending} />
            <Row rowId='4' title="Horror" fetchURL={request.requestHorror} />
            <Row rowId='5' title="TopRating" fetchURL={request.requestTopRating} />
        </>
    )
}

export default Home