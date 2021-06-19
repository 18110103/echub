import removeAccents from "./removeAccents"

const searchByKeyword = (keyword, string) => {
    return removeAccents(string).toLowerCase().includes(removeAccents(keyword).toLowerCase())
}

export default searchByKeyword