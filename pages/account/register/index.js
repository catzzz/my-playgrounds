
import { FaUser } from "react-icons/fa";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";

import AuthContext from "@/context/AuthContext";
import {
  AuthStyles,
  AuthTitle
}from '../auth.module'



export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [passwordConfrim, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");

const {register, error} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("submit");
    if(password !== passwordConfrim){
        toast.error('Passwords do not match')
        return
    }
    register({username,email, password})
  };


  return (
    <Layout title="User Registration">
      <AuthStyles>
        <AuthTitle>
          <FaUser /> Register
        </AuthTitle>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              id="passwordConfirm"
              value={passwordConfrim}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <input type="submit" value="login" className="btn" />
        </form>
        <p>
          Already have an account?{" "}
          <Link href="/account/login">
            <a>Login</a>
          </Link>
        </p>
      </AuthStyles>
    </Layout>
  );
}