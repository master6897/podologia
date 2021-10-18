import React from 'react';

import FrontPage from '../pages/frontPage';
import Content from '../content';

class MainContainer extends React.Component{
    render(){
        return(
            <div>
                <FrontPage/>
                <Content/>
            </div>
        );
    }
}

export default MainContainer;