import React, { Component } from 'react';
import Cards from '../Component/Cards';
// import Explore from '../Component/explore';
class Home extends Component {
    state = {}
    render() {
        return (
            <div className='main_div'>
            <div className='heading_text'>
                <h2>Taste of Various Cuisines</h2>
                <h3>"GOOD FOOD IS THE FOUNDATION OF GENUINE HAPPINESS”</h3>
            </div>
                <Cards />
                {/* <Explore/> */}
            </div>
        );
    }
}

export default Home;
