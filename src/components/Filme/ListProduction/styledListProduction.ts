import styled from "styled-components";


export const BoxList = styled.div`
    
    height: 75%;
    border-radius: 30px;
    width: 25%;
    background-color:#000;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @media only screen and (max-width: 600px){
        width: 80%;
        margin-bottom: 4%;
    }
`;



export const TituloBox = styled.h2`
    color: white;
    font-size: 20px;
    text-align: center;
    @media only screen and (max-height: 400px){
        font-size: 15px;
    }
`;

export const ListaTexto = styled.div`
    width: 100%;
    background-color: inherit;
    border-radius: 30px;
    
    
`;

export const Texto = styled.p`
    color: white;
    padding: 1.5px;
    font-size: 16px;
    text-align: center;
    @media only screen and (max-height: 400px){
        font-size: 12px;
    }
`;