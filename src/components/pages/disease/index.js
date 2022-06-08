import React from 'react';

import styled from 'styled-components';

const StyledSection= styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15vh;
`;
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 40px 40px rgb(0 0 0 / 16%);
    width: 70%;
    padding: 2em 0;
    transition: 0.3s ease;
    &:hover{
        transform: scale(1.01);
    }
    @media (max-width: 991.98px){
        width: 90%;
    }
`;
const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    text-align: justify;
    width: 70%;
    border-bottom: 1px solid #000b76;
    @media (max-width: 991.98px){
        text-align: left;
    }
    & > p{
        @media (max-width: 991.98px){
            text-align: justify;
        }
    }

`;
const StyledH2 = styled.h2`
    color: #D41e83;
    @media (max-width: 991.98px){
        text-align: left;
        font-size: 1.2em;
    }
`;
const StyledH4 = styled.h4`
    color: #493657;
`;


class Disease extends React.Component{
    render(){
        return(
            <StyledSection>
                <StyledDiv>
                    <StyledArticle>
                        <StyledH2>Wrastający paznokieć - najczęstsze przyczyny wrastania paznokci:</StyledH2>
                        <ul>
                            <li>niewłaściwe obcinanie paznokci</li>
                            <li>wady stopy</li>
                            <li>zbyt ciasne buty</li>
                            <li>otyłość</li>
                            <li>czynnik genetyczny</li>
                        </ul>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Paznokieć grzybiczny - czynniki wpływające na leczenie grzybicy:</StyledH2>
                        <ul>
                            <li>stan zdrowia (cukrzyca, łuszczyca, anoreksja)</li>
                            <li>zaburzenia krążenia</li>
                            <li>przyjmowanie leków immunosupresyjnych</li>
                            <li>zaburzenia wzrostu paznokcia</li>
                            <li>wielkość zajętej powierzchni paznokcia</li>
                        </ul>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Grzybica skóry stóp</StyledH2>
                        <p>Paznokcie czy skóra z zakażeniem chorobotwórczymi
                            grzybami to uciążliwy i nieprzyjemny problem. Może on dotyczyć również
                            przestrzeni międzypalcowych. Odmiany grzybicy skórnej: </p>
                        <ul>
                            <li>odmiana międzypalcowa: lokalizacja głównie w III i IV przestrzeni międzypalcowej,
                                charakterystyczna obecność maceracji naskórka, złuszczanie, pęknięcia</li>
                            <li>odmiana potnicowa: wykwitem podstawowym jest pęcherzyk i/ lub pęcherz o grubej
                                pokrywie, następnie powstają nadżerki i strupy</li>
                            <li>odmiana złuszczająca się: charakterystyczne obfite rogowacenie i złuszczanie się
                                naskórka; często występuje u osób z upośledzonym ukrwieniem tętniczym</li>
                        </ul>
                        <StyledH4>Co to jest grzybica paznokci?</StyledH4>
                        <p>Grzybica paznokci to choroba, którą diagnozuje się na podstawie badania mykologicznego. W trakcie
                            oczyszczania paznokcia pobiera się materiał i wysyła do laboratorium mykologicznego. Tam jest
                            poddawany badaniu mikroskopowemu i hodowli. Nieleczona grzybica może prowadzić do całkowitej
                            utraty płytki paznokcia. Rodzina obcująca z osobą zakażoną grzybami jest narażona na pojawienie
                            się infekcji u niej.</p>
                        <StyledH4>Na czy polega terapia paznokcia grzybiczego?</StyledH4>
                        <p>W gabinecie podologicznym terapia polega na oczyszczeniu zmienionego chorobowo paznokcia,
                            wysłaniu pobranego materiału na badanie oraz doborze leczniczych preparatów do aplikacji na
                            paznokieć i łożysko. Co ważne, to terapia ta jest bardzo skuteczna i nie obciąża wątroby pacjenta, co
                            występuje w przypadku leków doustnych zalecanych przez dermatologów. Osoby obciążone wieloma
                            schorzeniami powinny unikać doustnych leków przeciwgrzybicznych. Naszym celem jest też
                            uświadomienie pacjentowi, że nie bez znaczenia jest przy zakażeniu grzybami redukcja, a nawet
                            eliminacja spożywania cukru. Ważne jest też wzmocnienie układu immunologicznego.</p>
                        <StyledH4>Co to jest grzybica międzypalcowa?</StyledH4>
                        <p>Grzybica międzypalcowa objawia się swędzeniem, pękaniem skóry i nieprzyjemnym zapachem.
                            Najczęściej dotyka osoby, u których występuje nadpotliwość i bardzo ciasno przylegające do siebie
                            palce. Niewłaściwe osuszanie tych przestrzeni będzie sprzyjało rozwojowi chorobotwórczych
                            grzybów. Terapia polega na oczyszczaniu tych przestrzeni, zastosowaniu odpowiednich preparatów i
                            stosowanie się do zaleceń codziennej pielęgnacji.</p>
                        <StyledH4>Co to jest grzybica stóp? Na czym polega terapia?</StyledH4>
                        <p>Grzybica stóp charakteryzuje się popękaną, łuszczącą się skórą. Zazwyczaj swędzi i piecze.
                            Generuje nieprzyjemny zapach. Osoby z nadpotliwością są predysponowane do tego schorzenia,
                            podobnie diabetycy. Dłuższe stosowanie sterydów i antybiotyków również może spowodować
                            pojawienie się problemu. Terapia polega na doborze właściwych preparatów hamujących rozwój
                            grzybów oraz regenerujących uszkodzoną skórę.</p>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Modzele - przyczyny powstawania:</StyledH2>
                        <ul>
                            <li>noszenie butów na wysokim obcasie</li>
                            <li>nieprawidłowy chód</li>
                            <li>atrofia (zanik) podskórnej warstwy tłuszczowej na podeszwie stopy</li>
                            <li>płaskostopie i wysokie podbicie stopy</li>
                            <li>nieprawidłowe ustawienie kości śródstopia</li>
                            <li>wyniosłości kostne</li>
                        </ul>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Nagniotki - przyczyny powstawania:</StyledH2>
                        <ul>
                            <li>noszenie zaciasnych butów</li>
                            <li>obcisłe skarpety lub rajstopy</li>
                            <li>obcierający palce wewnętrzny szew lub łączenie buta</li>
                            <li>luźny but, w którym stopa ślizga się przy każdym kroku</li>
                            <li>długie schodzenie po pochyłej nawierzchni</li>
                            <li>deformacja i krzywizna palców stopy</li>
                        </ul>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Ostrogi piętowate - przyczyny powstawania:</StyledH2>
                        <ul>
                            <li>otyłość, powodująca duże przeciążenie stopy</li>
                            <li>długotrwałe utrzymywanie w pozycji stojącej</li>
                            <li>uprawianie sportów nadmiernie przeciążających stopy</li>
                            <li>niedoleczone urazy, wymuszające nienaturalną pozycję stopy</li>
                            <li>nieodpowiednio dobrane obuwie (np. kurczenie palców przy zbyt dużych butach)</li>
                            <li>wady wrodzone lub nabyte oraz zmiany zachodzące z wiekiem</li>
                        </ul>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Paluch koślawy (halluks) - przyczyny powstawania:</StyledH2>
                        <ul>
                            <li>nieodpowiednie obuwie (w szczególności buty na wysokim obcasie)</li>
                            <li>predyspozycje genetyczne oraz płeć (znacznie częściej u kobiet)</li>
                            <li>urazy</li>
                            <li>nadmierna długość palucha</li>
                            <li>przykurcz w okolicy ścięgna Achillesa</li>
                            <li>choroby (płaskostopie, dna moczanowa, patologia mięśnia piszczelowego tylnego,
                                reumatoidalne zapalenie stawów, łuszczycowe zapalenie stawów)</li>
                        </ul>
                    </StyledArticle>
                    <StyledArticle>
                        <StyledH2>Pękające pięty - przyczyny powstawania:</StyledH2>
                        <ul>
                            <li>nieodpowiednia pielęgnacja</li>
                            <li>nagły wzrost masy ciała</li>
                            <li>niewłaściwie dobrane obuwie</li>
                            <li>choroby skóry</li>
                            <li>zaburzenia pracy tarczycy, a co za tym idzie zmiany hormonalne</li>
                        </ul>
                        <p>Dużym błędem w pielęgnacji pękających pięt jest nadmierne ścieranie zrogowaceń, co doprowadza
                            do przegrzewania naskórka i pogłębia rozpadliny. Nie można lekceważyć tego problemu, gdyż
                            pęknięcia mogą sięgać aż do skóry właściwej i stanowić wrota otwarte do wnikania bakterii i
                            pojawiania się stanów zapalnych i ran.</p>
                    </StyledArticle>
                </StyledDiv>
            </StyledSection>
        );
    }
}

export default Disease;