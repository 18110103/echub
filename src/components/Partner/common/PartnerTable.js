import styled from "styled-components"
import { Menu, Transition } from '@headlessui/react'
import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const TH = styled.th`
    text-align: left;
    &:first-child{
        padding: 10px 0 10px 16px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    &:last-child{
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
`

const TD = styled.td`
border-top: 1px solid gray;
border-bottom: 1px solid gray;
&:first-child{
    border-left: 1px solid gray;
    padding: 10px 0 10px 16px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
}
&:last-child{
    border-right: 1px solid gray;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    padding: 0 10px;
}
`

const PartnerTable = ({ rows, cols, options }) => {

    return (
        <table style={{ borderSpacing: "0px 15px" }} className="w-full border-separate">
            <thead>
                <tr className="text-white bg-blue-400 font-semibold text-sm">
                    {cols.map(col => (
                        <TH key={col.id} width={col.width}>{col.name}</TH>
                    ))}
                    {options && <TH width="150px"></TH>}
                </tr>
            </thead>
            <tbody>
                {rows?.map((row, rowI) => (
                    <tr key={`row${rowI}`} className="border">
                        {cols.map(col => (
                            <TD>{row[col.id]}</TD>
                        ))}
                        {options &&
                            <TD>
                                <Menu as="div" className="relative">
                                    <Menu.Button className="border border-gray-400 py-2 px-4 hover:bg-blue-500 bg-blue-400 text-white text-sm font-medium rounded-full">
                                        Tùy chọn
                                        <AiFillCaretDown className="inline-block ml-2" />
                                    </Menu.Button>
                                    <Transition
                                        className="z-50 relative"
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute left-0 border border-gray-400
                                    mt-2 origin-top-right bg-blue-400 text-white divide-y divide-gray-100 rounded-md shadow-lg ring-1
                                    ring-black ring-opacity-5 focus:outline-none divide-gray-700">
                                            {options.map(option => (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            className="text-sm block w-full text-left py-2 px-3 hover:bg-blue-500 font-semibold"
                                                            onClick={() => option.onClick(row)}>
                                                            {option.name}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </TD>
                        }
                    </tr>
                ))}
            </tbody>
        </table >
    )
}

export default PartnerTable