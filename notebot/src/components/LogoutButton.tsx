"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from "sonner"
import { useRouter } from 'next/navigation'

const LogoutButton = () => {

    const router = useRouter()


    const [loading, setloading] = useState(false)

    const handlelogout =async ()=>{

        setloading(true)

        await new Promise((resolve)=>setTimeout(resolve,2000));

        const errormessage = null;

        if (!errormessage) {
            toast.success("Logout successful")
        router.push("/")

        }else{
            toast.error("this is the error "+errormessage)
        }

        setloading(false)



    }


  return (

    <Button
    className='w-24'
    variant="outline"
    onClick={handlelogout}
    disabled={loading}

    >
        {
            loading ? <Loader2 className='animate-spin'></Loader2> : "Logout"
        }
    </Button>
  )
}

export default LogoutButton     