export default function tinhTuyen(fromProvince, toProvince, toDistrict) {
    let string = ''
    if (fromProvince.idProvince === toProvince.idProvince) {
        string = string + 'noitinh'
    } else {
        if (fromProvince.regionName === toProvince.regionName) {
            string = string + 'noivung'
        } else {
            string = string + 'lienvung'
        }
    }

    if (toDistrict.centralDistrict) {
        string = string + 'noithanh'
    } else {
        string = string + 'ngoaithanh'
    }
    return string
}