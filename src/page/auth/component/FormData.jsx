import { atom, useAtom } from 'jotai'
import * as React from 'react'

const atomInputVal = atom({ name: '', email: '', password: '' })
const atomInputErr = atom({ name: '', email: '', password: '' })
const atomIsError = atom({ name: false, email: false, password: false })

const AuthContext = React.createContext()

const AuthForm = ({ children }) => {
    const [inputVal, setInputVal] = useAtom(atomInputVal)

    //input err
    const [inputErr, setInputErr] = useAtom(atomInputErr)

    //IsError
    const [isError, setIsError] = useAtom(atomIsError)
    //error handling for name,email,password

    const handleNameError = () => { //handling name error
        if (inputVal.name === '') {
            setInputErr({ ...inputErr, name: "Name is required" })
            setIsError({ ...isError, name: true })
        } else if (inputVal.name !== '') {
            setInputErr({ ...inputErr, name: '' })
            setIsError({ ...isError, name: false })
        }
    }
    const handlePasswordError = () => { //handling name error
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        if (!passwordPattern.test(inputVal.password)) {
            setIsError({ ...isError, password: true })
            setInputErr({ ...inputErr, password: 'password should be a minimum eight characters, at least one letter, one number and one special character' })
        } else if (passwordPattern.test(inputVal.password)) {
            setInputErr({ ...inputErr, password: '' })
            setIsError({ ...isError, password: false })
        }
    }
    const handleEmailError = () => {//handle email error
        const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!emailPattern.test(inputVal.email)) {
            setInputErr({ ...inputErr, email: 'email should be a valid email address' })
            setIsError({ ...isError, email: true })
        } else if (emailPattern.test(inputVal.email)) {
            setInputErr({ ...inputErr, email: '' })
            setIsError({ ...isError, email: false })
        }
    }
    const handleChange = (e) => {
        setInputVal({ ...inputVal, [e.target.name]: e.target.value })
    }
    const value = {
        handleEmailError, handleNameError, handlePasswordError, handleChange,
        inputErr,inputVal,isError
    }
    return (
        <>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export const useAuthForm = () => {
    return React.useContext(AuthContext)
}

export default AuthForm;

//inputval