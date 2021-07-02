import React from 'react'
import Container__For__Category from './People__container/Container__For__Category'
import Poster from './poster/Poster'
import Slide__show from './slide__show/Slide__show'


function Home() {
    return (
        <>
            <Slide__show/>
            <Poster/>
            <Container__For__Category/>
        </>
    )
}

export default Home
