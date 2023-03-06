

export default function currt(fn, ...a) {
    return a.length >= fn.length ? fn(a) : (...b) => currt(fn, ...a, ...b)
}