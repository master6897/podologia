import React from 'react';

import styled, {css} from 'styled-components';

import zrogoPo from '../../../images/portfolio/zrogowaceniapo.jpg';
import zrogoPrzed from '../../../images/portfolio/zrogowaceniaprzed.jpg';
import maniHybPo from '../../../images/portfolio/manicurehybrydowypo.jpeg';
import maniHybPrzed from '../../../images/portfolio/manicurehybrydowyprzed.jpeg';
import maniPo from '../../../images/portfolio/manicurepo.jpg';
import maniPrzed from '../../../images/portfolio/manicureprzed.jpg';
import zrogo2 from '../../../images/portfolio/zrogowacenia2.jpg';
import zrogo3 from '../../../images/portfolio/zrogowacenia3.jpg';
import peknieciaPo from '../../../images/portfolio/peknieciapo.jpeg';
import peknieciaPrzed from '../../../images/portfolio/peknieciaprzed.jpeg';
import plytkaPrzed from '../../../images/portfolio/plytkaprzed.jpg';
import plytkaPo from '../../../images/portfolio/plytkapo.jpg';
import odciskPrzed from '../../../images/portfolio/odciskprzed.jpeg';
import odciskPo from '../../../images/portfolio/odciskpo.jpeg';
import wkrecajacePrzed from '../../../images/portfolio/wkrecajaceprzed.jpeg';
import wkrecajacePo from '../../../images/portfolio/wkrecajacepo.jpeg';


const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15vh;
    width: 100%;
`;

const StyledDiv = styled.div`
    width: 80%;
    align-items:center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 40vh;
    @media(max-width:998.91px){
        width: 100%;
    }
    ${props => props.img && css`
        flex-direction: row;
        box-shadow: none;
        @media(max-width:998.91px){
            flex-direction: column;
        }
    `}
`;
const StyledArticle = styled.article`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin-bottom: 3em;
    box-shadow: 0 20px 40px rgb(0 0 0 / 16%);
    transition: 0.3s ease;
    &:hover{
        transform: scale(1.02);
    }
`;

const StyledImgDiv = styled.div`
    width: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

const StyledH2 = styled.h2`
    color: #D41e83;
    ${props => props.title && css`
        color: #493657;
    `}
`

class Portfolio extends React.Component{
    render(){
        return(
            <StyledSection>
                <StyledDiv>
                    <StyledArticle>
                        <StyledH2>Usunięcie zrogowaceń pedicure medyczny</StyledH2>
                        <StyledDiv img>
                            <StyledImgDiv>
                                <img src={zrogoPrzed} alt='Zrogowacenia przed'></img>
                                <StyledH2 title>PRZED</StyledH2>
                            </StyledImgDiv>
                            <StyledImgDiv>
                                <img src={zrogoPo} alt='Zrogowacenia po'></img>
                                <StyledH2 title>PO</StyledH2>
                            </StyledImgDiv>
                        </StyledDiv>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Manicure hybrydowy</StyledH2>
                        <StyledDiv img>
                            <StyledImgDiv>
                                <img src={maniHybPrzed} alt='Manicure hybrydowy przed'></img>
                                <StyledH2 title>PRZED</StyledH2>
                            </StyledImgDiv>
                            <StyledImgDiv>
                                <img src={maniHybPo} alt='Manicure hybrydowy po'></img>
                                <StyledH2 title>PO</StyledH2>
                            </StyledImgDiv>
                        </StyledDiv>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Pedicure z pomalowaniem lakierem hybrydowym</StyledH2>
                        <StyledDiv img>
                            <StyledImgDiv>
                                <img src={maniPrzed} alt='Pedicure z pomalowaniem lakierem hybrydowym przed'></img>
                                <StyledH2 title>PRZED</StyledH2>
                            </StyledImgDiv>
                            <StyledImgDiv>
                                <img src={maniPo} alt='Pedicure z pomalowaniem lakierem hybrydowym po'></img>
                                <StyledH2 title>PO</StyledH2>
                            </StyledImgDiv>
                        </StyledDiv>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Zrogowacenia</StyledH2>
                        <StyledDiv img>
                            <StyledImgDiv>
                                <img src={zrogo2} alt='Zrogowacenia przed'></img>
                                <StyledH2 title>PRZED</StyledH2>
                            </StyledImgDiv>
                            <StyledImgDiv>
                                <img src={zrogo3} alt='Zrogowacenia po'></img>
                                <StyledH2 title>PO</StyledH2>
                            </StyledImgDiv>
                        </StyledDiv>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Pęknięcia</StyledH2>
                        <StyledDiv img>
                            <StyledImgDiv>
                                <img src={peknieciaPrzed} alt='Pęknięcia przed'></img>
                                <StyledH2 title>PRZED</StyledH2>
                            </StyledImgDiv>
                            <StyledImgDiv>
                                <img src={peknieciaPo} alt='Peknięcia po'></img>
                                <StyledH2 title>PO</StyledH2>
                            </StyledImgDiv>
                        </StyledDiv>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Rekonstrukcja płytki paznokcia</StyledH2>
                        <StyledDiv img>
                            <StyledImgDiv>
                                <img src={plytkaPrzed} alt='Rekonstrukcja płytki paznokcia przed'></img>
                                <StyledH2 title>PRZED</StyledH2>
                            </StyledImgDiv>
                            <StyledImgDiv>
                                <img src={plytkaPo} alt='Rekonstrukcja płytki paznokcia po'></img>
                                <StyledH2 title>PO</StyledH2>
                            </StyledImgDiv>
                        </StyledDiv>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Zgrubiałe, przerosniete paznokcie, opracowanie odciska</StyledH2>
                        <StyledDiv img>
                            <StyledImgDiv>
                                <img src={odciskPrzed} alt='Zgrubiałe, przerosniete paznokcie, opracowanie odciska przed'></img>
                                <StyledH2 title>PRZED</StyledH2>
                            </StyledImgDiv>
                            <StyledImgDiv>
                                <img src={odciskPo} alt='Zgrubiałe, przerosniete paznokcie, opracowanie odciska po'></img>
                                <StyledH2 title>PO</StyledH2>
                            </StyledImgDiv>
                        </StyledDiv>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Przerosnięte, wkręcające się paznokcie</StyledH2>
                        <StyledDiv img>
                            <StyledImgDiv>
                                <img src={wkrecajacePrzed} alt='Przerosnięte, wkręcające się paznokcie przed'></img>
                                <StyledH2 title>PRZED</StyledH2>
                            </StyledImgDiv>
                            <StyledImgDiv>
                                <img src={wkrecajacePo} alt='Przerosnięte, wkręcające się paznokcie po'></img>
                                <StyledH2 title>PO</StyledH2>
                            </StyledImgDiv>
                        </StyledDiv>
                    </StyledArticle>
                </StyledDiv>
            </StyledSection>
        );
    }
}

export default Portfolio;