import React from 'react';

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
    if (!isOpen) return null;

    return (
        <>
            <div
                className="bg-[#363636e6] fixed inset-0 z-40"
                onClick={onClose}
            ></div>

            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="bg-gray-200 p-4 rounded w-[310px] relative">
                    {children}
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    >
                        ✕
                    </button>
                </div>
            </div>
        </>
    );
}
