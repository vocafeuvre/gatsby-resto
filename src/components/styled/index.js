import styled from "@emotion/styled"

export const Hero = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

export const HeroTitle = styled.h1`
    font-size: 2.6em;
    text-align: center;
    margin-bottom: 5px;
    background-color: #aa3333;
`

export const HeroSubtitle = styled.h2`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 500;
    background-color: #aa3333;
`

export const HeroContent = styled.div`
    padding: 10px;
    margin-top: 40px;
`

export const SubHero = styled.section`
    position: relative;
    height: 50vh;
    width: 100%;

    display: flex;
    justify-content: space-around;
    padding: 20px;
`

export const SubHeroContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 20px;
    max-width: 450px;
`

export const SubHeroContentTitle = styled.h2`
    margin-bottom: 5px;
`

export const SubHeroContentDetail = styled.p`
    margin-bottom: 5px;
`

export const FormElement = styled.div`
    border-radius: 20px;
    background-color: white;

    & input {
        outline: none;
        padding: 5px 10px;
        border: none;
        border-radius: 20px;
        font: inherit;
        position: relative;
        height: 2em;
        width: 100%;
    }

    & textarea {
        display: block;
        outline: none;
        padding: 5px 15px;
        border: none;
        border-radius: 20px;
        font: inherit;
        position: relative;
        resize: vertical;
        height: 4em;
        width: 100%;
    }
`

export const FormButton = styled.button`
    margin-top: 10px;
    padding: 10px 5px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
`