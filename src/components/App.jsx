import '../styles/index.scss'
import Recipes from './Recipes'

import React from 'react'

const App = () => {
    return(
        <>
            <section className="hero">
                <main>
                    <section>
                        <h1>Hello this is react</h1>
                    </section>
                </main>
                <Recipes/>
            </section>
        </>
    )
}
export default App