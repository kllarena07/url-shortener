const form = document.querySelector('form')
const input = document.querySelector('input')
const a = document.querySelector('a')

form.addEventListener('submit', async (evt) => {
	evt.preventDefault()

	const data = {
		identity_url: input.value.startsWith("https://") ? input.value : `https://${input.value}`
	}

	const response = await fetch('http://localhost:5173/submit', {	
		method: "POST",
		headers: {
				"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	})

	const json = await response.json()

	a.textContent = `http://localhost:5173/${json.shortened_url}`
	a.href = json.shortened_url
})
