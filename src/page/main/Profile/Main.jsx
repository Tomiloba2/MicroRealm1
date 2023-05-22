
import { Account } from 'appwrite'
import { apiAtom } from '../../../Providers/appwrite';
import { useState } from 'react';
const AccountProfile = () => {
    const [hey, setHey] = useState()
    const account = new Account(apiAtom)
    const currentAccount = account.get()
    currentAccount.then((res) => {
        setHey(res)
    }, (err) => {
        setHey(err);
    })
    return (
        <>
            {hey}
        </>
    );
}

export default AccountProfile;