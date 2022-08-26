import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
	const [isCancelled, setIsCancelled] = useState(false)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const { dispatch } = useAuthContext()

	const signup = async (email, password, username) => {
		setError(null)
		setIsPending(true)

		try {
			//signup user
			const res = await projectAuth.createUserWithEmailAndPassword(email, password)

			if (!res) {
				throw new Error('Could not complete signup')
			}

			//add username to user
			await res.user.updateProfile({ displayName: username })

			//dispatch login action
			dispatch({ type: 'LOGIN', payload: res.user})

			//update state
			if(!isCancelled) {
				setError(null)
				setIsPending(false)
			}
		}
		catch (err) {
			if(!isCancelled) {
				console.log(err.message)
				setError(err.message)
				setIsPending(false)
			}	
		}
	}

	useEffect(() => {
		return () => {
			setIsCancelled(true)
		}
	}, [])

	return { error, isPending, signup }

}