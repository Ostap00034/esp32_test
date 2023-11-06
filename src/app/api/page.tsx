import { createNextApiHandler } from '@next/api'

export default createNextApiHandler({
	async GET(req, res) {
		const { state } = req.query
		// Здесь ваша логика для чтения состояния светодиода
		res.json({ state: state || 'off' })
	},
	async POST(req, res) {
		const { state } = req.body
		// Здесь ваша логика для установки состояния светодиода
		res.json({ status: 'success', state })
	},
})
