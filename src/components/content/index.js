import React from 'react';

import Container from '../shared/Container';
import styled from 'styled-components';
import auto from '../../images/auto.jpg';

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: inherit;
    wdith: 100%;
`;

class Content extends React.Component{
    render(){
        return(
            <StyledDiv>
                <Container 
                    link="https://www.freepik.com/vectors/car'" 
                    description="Car vector created by stories - www.freepik.com" 
                    img={auto}
                    title={"Wizyty domowe - usługi z dojazdem do pacjenta"}>
                    W ramach wizyty domowej realizuję większość zabiegów związanych z leczeniem i
pielęgnacją stóp. Całkowita opłata za wizytę ustalana jest podczas wcześniejszej rozmowy
telefonicznej. Dla wszystkich, którzy nie są pewni, czy wymagana jest specjalistyczna pomoc, a:
                        <ul>
                            <li>odczuwają boleści wokół wału paznokcia,</li>
                            <li>doskwiera im ból związany z odciskiem,</li>
                            <li>chorują przewlekle na cukrzycę,</li>
                            <li>mają podejrzenie choroby grzybiczej,</li>
                            <li>borykają się z przewlekle pękającymi piętami,</li>
                        </ul>
                        i nie wiedzą jak sobie z tym poradzić służę pomocą, a również dla tych, co nie mogą
osobiście pojawić się na wizycie istnieje możliwość zamówienia wizyty domowej. Kieruję tę
ofertę do osób w podeszłym wieku lub chorych, których stan zdrowia nie pozwala na
poruszanie się, a wymagają specjalistycznej pomocy podologicznej oraz pielęgnacji stóp.
Stopy noszą nas całe życie dbajmy o nie codziennie, a ja z miłą chęcią pomogę w tym by
Was lekko nosiły.
                    </Container>
            </StyledDiv>
        );
    }
}

export default Content;