function numberWithCommas(x) {
    if (x === 0) return 0
    return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : null;
}

export default numberWithCommas