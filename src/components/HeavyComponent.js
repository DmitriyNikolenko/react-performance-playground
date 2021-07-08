export function HeavyComponent({ delay = 1000 }) {
    ;(ms => {
        const end = Date.now() + ms
        while (Date.now() < end) continue
    })(delay)
    console.log("HeavyComponent rendered")

    return "I'm heavy!"
}