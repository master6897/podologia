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
            <StyledIFrame src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2377.9645368617585!2d14.530749816026082!3d53.41546037723289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47aa08dff51d3d2f%3A0x276ddf47c2c33ee7!2zUG93c3RhxYRjw7N3IMWabMSFc2tpY2ggNCwgNzAtMTAwIFN6Y3plY2lu!5e0!3m2!1spl!2spl!4v1633078932689!5m2!1spl!2spl" allowfullscreen="true" loading="lazy" title="mapka"></StyledIFrame>
        );
    }
}

export default Map;