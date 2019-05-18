import React, { useEffect } from "react"
import { css } from "@emotion/core"
import Recaptcha from "react-recaptcha"

import useForm from "./hooks/useCaptchaForm"
import {
    SubHero,
    SubHeroContent,
    SubHeroContentDetail,
    SubHeroContentTitle,
    FormElement,
    FormButton,
    mediaQuery,
} from "./styled"

const validate = values => {
    const errors = {}

    if (!values.reservationName) {
        errors.reservationName = "Please provide a name for the reservation."
    }
    if (!values.contactNumber) {
        errors.contactNumber =
            "Please provide a contact number (preferably mobile)."
    }
    if (!values.headcount) {
        errors.headcount =
            "Please provide headcount. How many persons are coming?"
    }
    if (!values.details) {
        errors.details = "Please provide details of your reservation."
    }
    if (!values.captcha) {
        errors.captcha = "Please set the CAPTCHA and prove you are not a robot."
    }

    return errors
}

const formSubmit = (values, notifySuccess, notifyError) => {
    let req = new XMLHttpRequest()
    const message = `A new reservation is made: Reservation Name is ${
        values.reservationName
    }, with contact number of ${values.contactNumber}. Headcount is ${
        values.headcount
    }. More details: ${values.details}`

    req.open("POST", process.env.GATSBY_SLACK_APP_ENDPOINT, true)

    req.onreadystatechange = ev => {
        if (req.readyState === 4) {
            if (req.status) {
                notifySuccess(
                    "Reservation has been sent! You will be called shortly."
                )
            } else {
                notifyError("Reservation has not been sent. Please try again.")
            }
        }
    }

    req.onerror = ev => {
        notifyError("Reservation has not been sent. Please try again.")
    }

    req.send(
        JSON.stringify({
            text: message,
        })
    )
}

const ActionCall = ({ notifySuccess, notifyError }) => {
    const { values, handleChange, handleSubmit, setCaptcha, errors } = useForm(
        values => formSubmit(values, notifySuccess, notifyError),
        validate
    )

    const onloadCaptcha = () => {
        setCaptcha(null)
    }

    const successCaptcha = response => {
        setCaptcha(response)
    }

    const resetCaptcha = () => {
        setCaptcha(null)
    }

    useEffect(() => {
        const errorKey = Object.keys(errors)[0]

        if (errorKey) {
            notifyError(errors[errorKey])
        }
    }, [errors])

    return (
        <SubHero
            css={css`
                color: #ffffff;
                height: 70vh;

                ${mediaQuery("mobile")} {
                    height: 130%;
                }
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
                        We can accommodate reservations for the current day.
                        Please provide your contact number so that we may call
                        you ahead in advance.
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
                        Reservation Name *
                        <FormElement error={!!errors.reservationName}>
                            <input
                                type="text"
                                name="reservationName"
                                value={values.reservationName || ""}
                                onChange={handleChange}
                            />
                        </FormElement>
                    </label>
                    <label>
                        Contact Number *
                        <FormElement error={!!errors.contactNumber}>
                            <input
                                type="text"
                                name="contactNumber"
                                value={values.contactNumber || ""}
                                onChange={handleChange}
                            />
                        </FormElement>
                    </label>
                    <label>
                        Headcount *
                        <FormElement error={!!errors.headcount}>
                            <input
                                type="text"
                                name="headcount"
                                value={values.headcount || ""}
                                onChange={handleChange}
                            />
                        </FormElement>
                    </label>
                    <label>
                        Reservation Details * (please include arrival time)
                        <FormElement error={!!errors.details}>
                            <textarea
                                name="details"
                                value={values.details || ""}
                                onChange={handleChange}
                            />
                        </FormElement>
                    </label>
                    <div
                        css={css`
                            margin: 7.5px;
                        `}
                    >
                        <Recaptcha
                            sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
                            render="explicit"
                            onloadCallback={onloadCaptcha}
                            expiredCallback={resetCaptcha}
                            verifyCallback={successCaptcha}
                        />
                    </div>
                    <FormButton type="button" onClick={handleSubmit}>
                        Reserve Seats
                    </FormButton>
                </form>
            </SubHeroContent>
        </SubHero>
    )
}

export default ActionCall
