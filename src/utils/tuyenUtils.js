export const tuyenList = [{
    value: 'noitinhnoithanh',
    name: 'Nội tỉnh nội thành'
}, {
    value: 'noitinhngoaithanh',
    name: 'Nội tỉnh ngoại thành'
}, {
    value: 'noivungnoithanh',
    name: 'Nội vùng nội thành'
}, {
    value: 'noivungngoaithanh',
    name: 'Nội vùng ngoại thành'
}, {
    value: 'lienvungnoithanh',
    name: 'Liên vùng nội thành'
}, {
    value: 'lienvungngoaithanh',
    name: 'Liên vùng ngoại thành'
},]

export const getTuyenById = (value) => {
    return tuyenList.find(tuyen => tuyen.value === value).name
}

export const getTuyenIdByName = name => {
    return tuyenList.find(tuyen => tuyen.name === name).value
}