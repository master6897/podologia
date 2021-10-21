import React from 'react';

import styled from 'styled-components';

const StyledIFrame = styled.iframe`
    width: 500px;
    height: 372px;
    @media (max-width: 991.98px){
        width: 300px;
        height: 200px;
    }
`
class Map extends React.Component{
    render(){
        return(
            <StyledIFrame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9511.875766996665!2d14.5331626!3d53.4153816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd3bc9a3d25a2804!2sGabinet%20podologiczno-kosmetyczny%20Wioleta%20Dzi%C4%99gelewska!5e0!3m2!1spl!2spl!4v1634828524564!5m2!1spl!2spl" allowfullscreen="true" loading="lazy" title="mapka"></StyledIFrame>
        );
    }
}

export default Map;