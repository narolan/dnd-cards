import {useEffect} from "react";

function Coffee() {
    useEffect(() => {
        const script = document.createElement('script')
        const coffeeElement = document.getElementById('buyMeCoffee')

        script.setAttribute('src', 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js')
        script.setAttribute('data-name', 'BMC-Widget')
        script.setAttribute('data-cfasync', 'false')
        script.setAttribute('data-id', 'dndcards')
        script.setAttribute('data-description', 'Support me on Buy me a coffee!')
        script.setAttribute(
            'data-message',
            'Loving the custom DnD cards? Buy me a coffee to help bring even more cards to life! Your support keeps the creativity flowing. Thanks for being awesome!',
        )
        script.setAttribute('data-color', '#FF5F5F')
        script.setAttribute('data-position', 'Right')
        script.setAttribute('data-x_margin', '10')
        script.setAttribute('data-y_margin', '10')

        script.onload = () => {
            const evt = document.createEvent('Event')
            evt.initEvent('DOMContentLoaded', false, false)
            window.dispatchEvent(evt)
        }

        if (coffeeElement) {
            coffeeElement.appendChild(script)
        } else {
            console.error('Coffee could not find its element.')
        }
    }, [])

    return <article id='buyMeCoffee'></article>
}

export default Coffee;