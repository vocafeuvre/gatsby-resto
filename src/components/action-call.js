import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"

import {
    SubHero,
    SubHeroContent,
    SubHeroContentDetail,
    SubHeroContentTitle,
    FormElement,
    FormButton,
} from "./styled"

const ActionCall = () => (
    <SubHero
        css={css`
            color: #ffffff;
        `}
    >
        <SubHeroContent>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    background-color: #aa3333;
                `}
            >
                <SubHeroContentTitle>
                    Why wait? Reserve now!
                </SubHeroContentTitle>
                <SubHeroContentDetail>
                    We can accommodate reservations for the current day. Please
                    provide your contact number so that we may call you ahead in
                    advance.
                </SubHeroContentDetail>
            </div>
        </SubHeroContent>
        <SubHeroContent>
            <form
                css={css`
                    display: flex;
                    flex-direction: column;
                    background-color: #aa3333;

                    & label {
                        padding: 5px 0px;
                    }
                `}
            >
                <label>
                    Reservation Name
                    <FormElement>
                        <input type="text" />
                    </FormElement>
                </label>
                <label>
                    Contact Number
                    <FormElement>
                        <input type="text" />
                    </FormElement>
                </label>
                <label>
                    Headcount
                    <FormElement>
                        <input type="text" />
                    </FormElement>
                </label>
                <label>
                    Reservation Details (please include arrival time)
                    <FormElement>
                        <textarea />
                    </FormElement>
                </label>
                <FormButton type="submit">Reserve Seats</FormButton>
            </form>
        </SubHeroContent>
    </SubHero>
)

export default ActionCall
