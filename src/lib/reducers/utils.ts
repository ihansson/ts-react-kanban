export function reorderArray(arr, currentPosition, newPosition) {
    if (newPosition !== 0 && newPosition <= arr.length) {
        arr = arr.slice().map(_obj => {
            const obj = {..._obj}
            if (obj.order === currentPosition) {
                obj.order = newPosition
            } else if (obj.order === newPosition) {
                obj.order = currentPosition
            }
            return obj
        })
    }
    return arr
}

export function filterReorder(_arr, matchFn, currentPosition, newPosition) {
    let length = _arr.filter(matchFn).length
    return _arr.slice().map(_obj => {
        const obj = {..._obj}
        if (matchFn(obj)) {
            if (newPosition !== 0 && newPosition <= length) {
                if (obj.order === currentPosition) {
                    obj.order = newPosition
                } else if (obj.order === newPosition) {
                    obj.order = currentPosition
                }
            }
        }
        return obj
    })
}