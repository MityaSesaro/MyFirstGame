if (typeof navigator.serviceWorker !== 'undefined') {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Успешно'))
        .catch(() => console.log('Ошибка'))
}