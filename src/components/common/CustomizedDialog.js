import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";


const CustomizedDialog = ({ children, isOpen, onClose, className }) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={onClose}
        >
            <div className="min-h-screen px-4 flex-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>
                <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                >
                    &#8203;
                </span>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="z-10">
                        {children}
                    </div>
                </Transition.Child>
            </div>
        </Dialog>
    </Transition>
)

export default CustomizedDialog