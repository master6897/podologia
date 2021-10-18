import React from 'react';

import Card from '../../shared/Card';
import Container from '../../shared/Container';
import styled from 'styled-components';
import bath from '../../../images/bath.jpg';


const StyledContainer = styled.section`
    padding-top: 15vh;
    display:flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    align-items:center;
    width: 100%;
`;

const StyledLi = styled.li`
    margin: .5em 0;
`;
class PricePage extends React.Component{
    render(){
        return(
            <StyledContainer>
                <Card
                    title="Leczenie stóp"
                >
                    <StyledLi>Opatrunek zwykły/stały: 50-80 zł</StyledLi>
                    <StyledLi>Opatrunek (stan zapalny): 60 zł</StyledLi>
                    <StyledLi>Opracowanie pięt: 70 zł</StyledLi>
                    <StyledLi>Opatrunek paznokcia: 80-90 zł</StyledLi>
                    <StyledLi>Rekonstrukcja paznokcia: 90 zł</StyledLi>
                    <StyledLi>Paznokieć grzybiczny: 90-150 zł</StyledLi>
                    <StyledLi>Paznokieć wrastający (stan zapalny): 110-160 zł</StyledLi>
                    <StyledLi>Odcisk: 50-80 zł</StyledLi>
                    <StyledLi>Modzele: 50-80 zł</StyledLi>
                    <StyledLi>Pękające pięty (opracowanie skalpelem, frezarka): 100 zł</StyledLi>
                    <StyledLi>Brodawki wirusowe (leczenie kwasem): 80 zł</StyledLi>
                </Card>
                <Card
                    title="Pielegnacja stóp"
                >
                    <StyledLi>Malowanie paznokci bez opracowania: 30 zł</StyledLi>
                    <StyledLi>Pedicure kosmetyczny: 110 zł</StyledLi>
                    <StyledLi>Pedicure kosmetyczny + malowanie hybrydą: 150 zł</StyledLi>
                    <StyledLi>Pedicure malowanie + lakier: 130 zł</StyledLi>
                    <StyledLi>Pedicure medyczny: 140-160 zł</StyledLi>
                </Card>
                <Card
                    title="Pielęgnacja dłoni"
                >
                    <StyledLi>Manicure bez malowania: 40 zł</StyledLi>
                    <StyledLi>Manicure z malowaniem lakierem: 60 zł</StyledLi>
                    <StyledLi>Manicure hybryda: 110 zł</StyledLi>
                    <StyledLi>Plus french/zdobienie paznokci: 20-60 zł</StyledLi>
                    <StyledLi>Ściągnięcie żelu/hybrydy: 30-60 zł</StyledLi>
                    <StyledLi>Parafina na dłonie (peeling, maska): 60 zł</StyledLi>
                </Card>
                <Container
                    title={"Przed wizytą w gabinecie przygotuj się!"}
                    img={bath}
                    link={"https://www.freepik.com/vectors/people"}
                    description={"People vector created by pch.vector - www.freepik.com"}
                >
                    <b>STOPY</b><br></br>
Przed wizytą dla komfortu obu stron zaleca się odświeżenie stóp oraz niestosowanie
żadnych preparatów, które mogłyby utrudnić diagnostykę.
<br></br><br></br><b>PAZNOKCIE</b><br></br>
Paznokcie powinny być niepomalowane lakierem. Lakier warto usunąć przynajmniej jedną
dobę przed wizytą.
                </Container>
            </StyledContainer>
        );
    }
}

export default PricePage;