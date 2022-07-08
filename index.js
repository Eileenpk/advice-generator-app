const quote = document.querySelector('.quote-box')
const id = document.querySelector('h1')
const btn = document.querySelector('button')

const setViewportWidth = () => {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

btn.addEventListener('click', () => {

    fetch('https://api.adviceslip.com/advice')
        .then(res => {
        if (res.ok) {
            return res.json()
        } throw new Error('Request failed!')
        })
        .then(data => {
            setViewportWidth()
            if(viewportWidth < 800) {
                quote.innerHTML = `
                <p>“${data.slip.advice}”</p>
            `
            id.textContent = `#${data.slip.id}`
            } else {
                quote.innerHTML = `
                <p>“${data.slip.advice}”</p>
                `
                id.textContent = `ADVICE #${data.slip.id}`
            }

        })
        .catch((error) => {
            alert(error)
        })
})
