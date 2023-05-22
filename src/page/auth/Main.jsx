import { useParams } from "react-router-dom";
import * as React from 'react';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import {
    Box,
} from "@chakra-ui/react";
import { useAtom } from 'jotai'
import { Account } from 'appwrite'
import { apiAtom } from '../../Providers/appwrite';
import { useAuthForm } from './component/FormData';
import { v4 as uuid } from 'uuid'
import { Style } from "./component/FormStyles";
import FormUI from "./component/FormUi";


export function Auth() {
    const params = useParams()
    const { id } = params
    const ID = uuid()
    const val = useAuthForm()
    const [client] = useAtom(apiAtom)
    const [pswdType, setPswdType] = React.useState({ type: "password", icon: <MdVisibility /> })//password type

    //handling the submit action
    const handleSubmit = (e) => {
        e.preventDefault()
        const account = new Account(client)
        // create account
        if (!val.isError.email && !val.isError.password && !val.isError.name) {
            if (id === 'signup') {
                const promise = account.create(
                    ID,
                    val.inputVal.email,
                    val.inputVal.password,
                    val.inputVal.name,
                )
                promise.then((res) => {
                    console.log(res);
                }, (err) => {
                    console.log(err);
                })
            }
            else if (id === 'login') {
                const promise = account.createEmailSession(
                    val.inputVal.email,
                    val.inputVal.password,
                )
                promise.then((res) => {
                    console.log(res);
                }, (err) => {
                    console.log(err);
                })

            }
        }
    }
    // handling passwordtype change
    const HandlePswdChange = () => {
        if (pswdType.type === 'password') {
            setPswdType({ ...pswdType, type: 'text', icon: <MdVisibilityOff /> })
        } else {
            setPswdType({ ...pswdType, type: 'password', icon: <MdVisibility /> })
        }
    }
    // inputList
    const InputList = [
        {
            label: 'User Name',
            type: 'text',
            name: 'name',
            value: val.inputVal.name,
            isblur: val.handleNameError,
            error: val.inputErr.name
        },
        {
            label: 'Email',
            type: 'email',
            name: 'email',
            value: val.inputVal.email,
            isblur: val.handleEmailError,
            error: val.inputErr.email,
        },
        {
            label: 'Password',
            type: pswdType.type,
            name: 'password',
            value: val.inputVal.password,
            isblur: val.handlePasswordError,
            error: val.inputErr.password,
            icon: pswdType.icon,
            pswdChange: HandlePswdChange
        },
    ]
    //diffrentiating between login and signup
    if (id === 'login') {
        InputList.splice(0, 1)
    } else { InputList }
    return (
        <Box sx={Style.mainBox}>
            <FormUI
                id={id}
                val={val}
                InputList={InputList}
                handleSubmit={handleSubmit} />
        </Box>
    );
}

export default Auth;