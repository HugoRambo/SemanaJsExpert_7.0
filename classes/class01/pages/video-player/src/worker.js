onmessage = ({data}) => {
    console.log('worker!', data)
    postMessage({
        'ok': 'ok'
    })
} 