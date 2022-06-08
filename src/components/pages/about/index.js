import React from 'react';

import styled from 'styled-components';
import Container from '../../shared/Container';
import picture from '../../../images/Wioleta.jpg';

const StyledSection = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 15vh;
`;

class About extends React.Component{
    render(){
        return(
            <StyledSection>
                <Container
                    title={"O mnie"}
                    img={picture}
                    about={"about"}
                >
                    Moja praca to również moja pasja. Doświadczenia zebrane przez lata praktyki owocują pięknymi
stopami moich zadowolonych Klientów. . Kocham swoją prace, gdyż uwielbiam przynosić ulgę
bolącym stopom. Im bardziej wymagający przypadek, tym więcej mojego zaangażowania i satysfakcji z
wykonanej pracy. Moją misją jest, by ręce i stopy moich Klientek i Klientów były zdrowe oraz piękne.
Swoją przygodę ze stopami zaczęłam jako kosmetyczka, ale w gabinecie zaczęły pojawiać się
przypadki, które potrzebowały specjalistycznej pielęgnacji.<br></br><br></br>
Pedicure stóp stał się moją pasją, którą lubię pielęgnować, a nie ma nic cenniejszego jak uśmiech
zadowolonych klientów z pomocy, którą jestem im w stanie zaoferwać. Będę czuła się wyróżniona
mogąc zadbać o Twój wygląd stóp jak i dobre samopoczucie! Jeżeli w obrębie Twoich stóp pojawił się
niepokojący problem i chcesz się go pozbyć, a przy okazji odzyskać komfort podczas chodzenia,
skontaktuj się ze mną. Mój gabinet to miejsce, w którym uzyskasz pomoc, a Twoje stopy wrócą do
formy i będziesz mógł się cieszyć ich nienagannym wyglądem. Do każdej osoby, która jest na fotelu
podchodzę indywidualnie i staram się, by czuła się komfortowo podczas zabiegu.

                </Container>
            </StyledSection>
        );
    }
}

export default About;