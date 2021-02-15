(async function () {
    const url = 'https://picsum.photos/3840/2160'
    z = []

    async function y() {
        await fetch(url)
            .then(data => {
                x = data.url
                z.push(x)

            })
    }

    for (let index = 0; index < 10; index++) {
        y()
    }

    setTimeout(() => {
        let index = 0
        console.log(z.length);
        const sliderContainer = document.querySelector('#sliderContainer')
        setInterval(() => {
            console.log(index + ' src ' + z[index])
            const img = z[index]
            sliderContainer.style.transition = 'all 1s ease-in-out'
            sliderContainer.style.background = `url(${img})`
            sliderContainer.style.width = '100vw !important'
            sliderContainer.style.height = '100vh !important'
            sliderContainer.style.backgroundSize = 'cover'
            sliderContainer.style.backgroundRepeat = 'no-repeat'
            sliderContainer.style.backgroundPosition = 'center center'
            sliderContainer.style.backgroundAttachment = 'fixed'
            index += 1
            if (index == z.length) {
                index = 0
            }
        }, 3000);
    }, 2000)


})()