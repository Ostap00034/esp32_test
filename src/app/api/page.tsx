// файл: pages/api/switch.ts
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		// Обработка POST запроса
		const { state } = req.body
		// Тут логика для изменения состояния светодиода
		console.log(`Switch state is set to: ${state}`)
		res.status(200).json({ status: 'success', state })
	} else {
		// Обработка для других методов, например, GET
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
	}
}
