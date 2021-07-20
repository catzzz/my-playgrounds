import { FaUser } from "react-icons/fa"
import {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import Layout from "@/components/Layout";

import AuthContext from "@/context/AuthContext";
import {
    AuthStyles,
    AuthTitle
}from '../auth.module'




export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error} = useContext(AuthContext)

    // useEffect(()=>error && toast.error(error))

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log('submit')
        login({email, password})
    }
    return (
        <Layout title='User Login'>
            <AuthStyles >
                <AuthTitle>
                    <FaUser /> 
                    <span>Log In</span>
                </AuthTitle>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <input type="submit" value="login" className="btn" />
                </form>
                <p>
                    Don&apos;t have an account? <Link href='/account/register'><a >Register</a></Link>
                </p>
            </AuthStyles>
        </Layout>
    )
}