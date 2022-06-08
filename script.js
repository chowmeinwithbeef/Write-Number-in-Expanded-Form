function expandedForm(num) {
    let arr = Array.from(String(num), Number)
    let len = arr.length-1
    let ans = []

    for (let i = 0; i<arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = (arr[i]*Math.pow(10,len-i))
            ans.push(temp)
        }
    }
    ans.map(String)
    ans = ans.toString()
    ans = ans.split(",").join(' + ')
    return ans
}

// 6!
