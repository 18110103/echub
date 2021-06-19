import classNames from "classnames"
import React, { useEffect, useRef, useState } from "react"
import { FiChevronDown } from 'react-icons/fi'
import { Fade } from "react-reveal"
import useOnClickOutside from "../../../hooks/useOnClickOutside"
import searchByKeyword from "../../../util/search"
import { LoadingIcon } from "../Loading"

const SearchSelect = ({ error, data, placeholder, placeholderChoosable, getOptionLabel, setData, isLoading, className, disable }) => {
    const [open, setOpen] = useState(false)
    const [keyword, setKeyword] = useState("")
    const [value, setValue] = useState(null)
    const [cursor, setCursor] = useState(placeholderChoosable ? -1 : 0)
    const [filtered, setFiltered] = useState([])
    const divEl = useRef(null)
    const inputRef = useRef(null)
    const selectRef = useRef(null)
    const listRef = useRef(null)

    const handleClose = () => {
        setOpen(false)
        setKeyword('')
    }

    useOnClickOutside(divEl, handleClose)

    useEffect(() => {
        if (data) {
            let i = 0
            let found = false
            const result = data.filter(e => {
                if (searchByKeyword(keyword, getOptionLabel(e))) {
                    if (!found && e === value) {
                        setCursor(i)
                        found = true
                    }
                    i++;
                    return true
                }
                return false
            })
            setFiltered(result)
            if (!found)
                setCursor(0)
        }
    }, [keyword, data, getOptionLabel, value])

    const onSelect = v => {
        setValue(v)
        setData && setData(v)
        handleClose()
    }

    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            onSelect(filtered[cursor])
        }
        if (e.keyCode === 38) {
            if (cursor > 0) {
                setCursor(cursor - 1)
            }
            if (cursor === 0 && placeholderChoosable) {
                setCursor(-1)
            }
        }
        if (e.keyCode === 40) {
            if (cursor < filtered.length - 1) {
                setCursor(cursor + 1)
            }
        }
    }

    const handleInput = e => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        if (open)
            inputRef.current.focus()
    }, [open, inputRef])

    useEffect(() => {
        if (open && listRef.current && selectRef.current) {
            listRef.current.scrollTop = selectRef.current.offsetTop - listRef.current.clientHeight / 2 + selectRef.current.clientHeight / 2
        }
    }, [open, selectRef, listRef])

    useEffect(() => {
        setValue(null)
        setData && setData(null)
    }, [data])

    return <>
        <div className={classNames('input select-none relative rounded-xl text-sm transition-colors', className, {
            'border-gray-100': !open && !error,
            'border-blue-300': open && !error,
            'error': error
        })}
            ref={divEl}>
            <div onClick={() => { if (!isLoading && !disable) setOpen(!open) }}
                disable={isLoading || disable}
                className={classNames('z-0 p-2 pr-3 flex justify-between relative', {
                    'cursor-not-allowed': isLoading || disable,
                    'cursor-pointer': !isLoading,
                })}>
                <>
                    <span className={classNames('text-sm', {
                        'text-gray-500': !error,
                        'text-red-500': error
                    })}>
                        {value ? getOptionLabel(value) : placeholder}
                    </span>
                    {isLoading ? <LoadingIcon />
                        : <span
                            className={classNames('transform duration-300 transition-transform ' +
                                'absolute right-0 top-0 text-xl h-full flex items-center text-blue-500 mr-1', {
                                "-rotate-180": open
                            })}
                        >
                            <FiChevronDown size="18px" />
                        </span>
                    }
                </>
            </div>
            <Fade in={open} duration={100} unmountOnExit mountOnEnter>
                <div className="z-20 relative">
                    <div onKeyDown={handleKeyDown}
                        className="shadow-lg border rounded-lg overflow-hidden bg-white
                    absolute top-full -left-px w-full box-content transform translate-y-1">
                        <div className="py-2 px-3 shadow-md">
                            <input ref={inputRef}
                                value={keyword}
                                onChange={handleInput}
                                type="text"
                                className="bg-gray-100 rounded-full shadow-sm border-gray-400
                        block w-full focus:outline-none py-2 px-3"
                            />
                        </div>
                        <div className="text-sm">
                            {filtered.length === 0 ? (
                                <div className="px-3 py-2 text-gray-500 text-center">Không tìm thấy kết quả!</div>
                            ) : (<ul ref={listRef} className="relative text-gray-500 max-h-60 overflow-y-scroll">
                                {placeholderChoosable ?
                                    <li
                                        ref={cursor === -1 ? selectRef : null}
                                        onMouseEnter={() => {
                                            setCursor(-1)
                                        }}
                                        className={`${cursor === -1 ? "bg-blue-400 text-white"
                                            : value === null ? "bg-gray-200 text-gray-400" : ""}
                                    px-3 py-1 cursor-pointer`}
                                        onClick={() => {
                                            setValue(null)
                                            setOpen(false)
                                            setData && setData(null)
                                        }}
                                    >
                                        {placeholder}
                                    </li> :
                                    <li className="px-3 py-1">{placeholder}</li>}
                                {filtered.map((v, i) => {
                                    const equal = v === value
                                    return (
                                        <li
                                            key={i}
                                            onMouseEnter={() => {
                                                setCursor(i)
                                            }}
                                            className={`px-3 py-1 cursor-pointer
                                    ${cursor === i ? "bg-blue-400 text-white"
                                                    : equal ? "bg-gray-200 text-gray-400" : ""}`}
                                            onClick={() => onSelect(v)}
                                            ref={equal ? selectRef : null}
                                        >
                                            {getOptionLabel(v)}
                                        </li>
                                    )
                                })}
                            </ul>
                            )}
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
        {error && <div className="text-xs ml-1 text-red-500 font-medium -mb-3">{error}</div>}
    </>
}

export default React.memo(SearchSelect)