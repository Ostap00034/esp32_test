'use client'
import { useState } from 'react'

export default function Home() {
	const [ledState, setLedState] = useState(false)

	const toggleLed = async () => {
		setLedState(!ledState)

		// Отправка запроса на App Router
		const response = await fetch('/api/switch', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ state: ledState ? 'off' : 'on' }),
		})

		const data = await response.json()
		console.log(data)
	}

	return (
		<div>
			<button onClick={toggleLed}>
				{ledState ? 'Turn LED Off' : 'Turn LED On'}
			</button>
		</div>
	)
}
