import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setisAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-chamber-server.vercel.app/allUsers/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setisAdmin(data.isAdmin);
                    setIsAdminLoading(false)
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading]

}

export default useAdmin;