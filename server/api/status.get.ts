

export default defineEventHandler(async (event) => {
    return {
        body: 'Hello World',
        currentTime: new Date().toISOString()
    }
})
