import React, { createContext, useState } from 'react'

export const context = createContext({})

export function ContextProvider({ children }) {
	// console.log(props)
	const [count, setCount] = useState(10)
	const val = {
		count,
		setCount,
		add: () => {
			console.log(0)
			setCount(count + 1)
		},
		reduce: () => {
			setCount(count - 1)
		}
    }
    console.log(val)
	return <context.Provider value={val}>{children}</context.Provider>
}
