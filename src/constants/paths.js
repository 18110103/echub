const adminPaths = {
    HOME: "/admin",
	get SHOW_ORDERS() { return `${this.HOME}/orders` },
    get SHOW_PARTNERS() { return `${this.HOME}/partners` },
    get SHOW_CUSTOMERS() { return `${this.HOME}/customers` },
    get SHOW_STATISTIC() { return `${this.HOME}/statistic` },
    get ACCOUNT_SETTING() { return `${this.HOME}/settings` },
	get LOGOUT() { return `${this.HOME}/logout` },
}

export {
    adminPaths
}