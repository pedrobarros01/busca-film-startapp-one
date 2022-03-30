
import styled from "styled-components";

export const BoxLista = styled.div`
    height: 60%;
    width: 90%;
    background-color: inherit;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    overflow-y: scroll;
`;

export const CardFilme = styled.div`
    width: 25.3%;
    height: 100%;
    background-color: #C29613;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 5%;
    :hover{
        transition: 1.5s;
        background-color: #755B0C;
    }
`;
export const TituloFilme = styled.h2`
    font-size: 30px;
    font-weight: 600;
    color: white;

`;
export const BoxPoster = styled.div`
    background-color: inherit;
    width: 90%;
    height: 90%;
`;
export const PosterFilme = styled.img`
    width: 100%;
    height: 80%;
`