import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { BASE_FONT_SIZE_PX } from "../../utils/typography"

const ERROR_COLOR = "#cc6666"
const SUCCESS_COLOR = "#007740"
const MAIN_COLOR = "#aa3333"

export const breakpoints = {
    mobile: {
        max: 749,
        min: 0,
    },
    tablet: {
        max: 960,
        min: 750,
    },
}

export const mediaQuery = screen => {
    return `@media (max-width: ${
        breakpoints[screen].max
    }px) and (min-width: ${breakpoints[screen].min}px)`
}

export const Hero = styled.section`
    position: relative;
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    ${mediaQuery("tablet")} {
        padding: 10px
    }

    ${mediaQuery("mobile")} {
        padding: 10px
    }
`

export const HeroTitle = styled.h1`
    font-size: 2.6em;
    text-align: center;
    margin-bottom: 5px;

    ${mediaQuery("mobile")} {
        font-size: 2em;
        margin-bottom: 5px;
    }
`

export const HeroSubtitle = styled.h2`
    font-size: 1.4em;
    text-align: center;
    margin-bottom: 5px;
    font-weight: 500;

    ${mediaQuery("mobile")} {
        font-size: 1.2em;
        margin-bottom: 5px;
    }
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

    ${mediaQuery("mobile")} {
        height: 100vh;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
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

const FormElementBase = styled.div`
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

export const FormElement = ({ error = false, children }) => (
    <FormElementBase
        css={
            error &&
            css`
                background-color: ${ERROR_COLOR};
                & input,
                textarea {
                    background-color: ${ERROR_COLOR};
                }
            `
        }
    >
        {children}
    </FormElementBase>
)

export const FormButton = styled.button`
    margin-top: 10px;
    padding: 10px 5px;
    border: none;
    outline: none;
    border-radius: 20px;
    cursor: pointer;
`
const NOTIF_PADDING_PX = 15
export const NOTIF_HEIGHT_PX = BASE_FONT_SIZE_PX * 3 + NOTIF_PADDING_PX * 2
export const NOTIF_DIST_TO_EDGE = 20

const Notification = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    right: ${NOTIF_DIST_TO_EDGE}px;
    color: #ffffff;
    z-index: 101;
    width: 400px;
    height: ${NOTIF_HEIGHT_PX}px;
    padding: ${NOTIF_PADDING_PX}px;
    font-size: 0.9em;
    overflow: scroll;
    animation: pop 100ms ease-out;

    @keyframes pop {
        0% {
            transform: scale(0.2);
        }

        100% {
            transform: scale(1);
        }
    }

    ${mediaQuery("mobile")} {
        width: 320px;
    }
`

export const DefaultNotification = ({ text, position }) => (
    <Notification
        css={css`
            background-color: ${MAIN_COLOR};
            bottom: ${position}px;
        `}
    >
        {text}
    </Notification>
)

export const SuccessNotification = ({ text, position }) => {
    return (
        <Notification
            css={css`
                background-color: ${SUCCESS_COLOR};
                bottom: ${position}px;
            `}
        >
            {text}
        </Notification>
    )
}

export const ErrorNotification = ({ text, position }) => (
    <Notification
        css={css`
            background-color: ${ERROR_COLOR};
            bottom: ${position}px;
        `}
    >
        {text}
    </Notification>
)
