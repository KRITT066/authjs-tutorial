"use client";

import { useFormStatus } from "react-dom";
import React from 'react'

export const LoginButton = () => {

  const {pending} = useFormStatus()

return (
  <button
      type="submit"
      disabled={pending}
      className="w-full bg-blue-500 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-5 rounded-lg
        text-center uppercase"
    >
      {pending ? "Authenticating..." : "Sign In"}
    </button>
)
}

export const RegisterButton = () => {

    const {pending} = useFormStatus()

  return (
    <button
        type="submit"
        disabled={pending}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg
          text-center uppercase"
      >
        {pending ? "Registering..." : "Register"}
      </button>
  )
}
