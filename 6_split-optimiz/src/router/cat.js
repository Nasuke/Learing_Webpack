

export default function curry(...a) {
    const res = a.reduce((pre,cur) => pre + cur)

    const _cur = (...b) => curry(res, ...b)
    _cur.toString = () => {
        return res
    }

    return _cur
}