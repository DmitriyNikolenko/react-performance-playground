export const delayTask = (ms) => {
    const end = Date.now() + ms;
    while (Date.now() < end) continue;
    return Math.random() * ms
}