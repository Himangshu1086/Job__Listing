import React from 'react'
import Navbar from '../header/Header__for__home__page/Navbar'
import Container__For__Category from './People__container/Container__For__Category'
import Poster from './poster/Poster'
import Slide__show from './slide__show/Slide__show'


function Home() {
    return (
        <>
            <Navbar/>
            <Slide__show/>
            <Poster/>
            <Container__For__Category/>
        </>
    )
}

export default Home
