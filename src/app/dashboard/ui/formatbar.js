import React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatIndentIncreaseIcon from '@mui/icons-material/FormatIndentIncrease';
import AddLinkRoundedIcon from '@mui/icons-material/AddLinkRounded';

function Heading1Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 12h8" />
            <path d="M4 18V6" />
            <path d="M12 18V6" />
            <path d="m17 12 3-2v8" />
        </svg>
    )
}
function Heading2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 12h8" />
            <path d="M4 18V6" />
            <path d="M12 18V6" />
            <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
        </svg>
    )
}

const Formatbar = ({ editText }) => {
    return (
        <div className="flex gap-1">
            <button onClick={() => editText('BOLD')} className="bg-white hover:bg-opacity-20 bg-opacity-0 rounded-md flex justify-center items-center p-1" title="pogrubienie tekstu"><FormatBoldIcon className="text-white"/></button>
            <button onClick={() => editText('UNDERLINE')} className="bg-white hover:bg-opacity-20 bg-opacity-0 rounded-md flex justify-center items-center p-1" title="podkreślenie tekstu"><FormatUnderlinedIcon className="text-white group-hover:text-custom-gray-700" /></button>
            <button onClick={() => editText('ITALIC')} className="bg-white hover:bg-opacity-20 bg-opacity-0 rounded-md flex justify-center items-center p-1" title="pochylenie tekstu"><FormatItalicIcon className="text-white group-hover:text-custom-gray-700" /></button>
            <button onClick={() => editText('header-one')} className="bg-white hover:bg-opacity-20 bg-opacity-0 rounded-md flex justify-center items-center p-1" title="nagłówek h1"><Heading1Icon className="text-white group-hover:text-custom-gray-700" /></button>
            <button onClick={() => editText('header-two')} className="bg-white hover:bg-opacity-20 bg-opacity-0 rounded-md flex justify-center items-center p-1" title="nagłówek h2"><Heading2Icon className="text-white group-hover:text-custom-gray-700" /></button>
            <button onClick={() => editText('unordered-list-item')} className="bg-white hover:bg-opacity-20 bg-opacity-0 rounded-md flex justify-center items-center p-1" title="lista nienumerowana"><FormatListBulletedIcon className="text-white group-hover:text-custom-gray-700" /></button>
            <button onClick={() => editText('ordered-list-item')} className="bg-white hover:bg-opacity-20 bg-opacity-0 rounded-md flex justify-center items-center p-1" title="list numerowana"><FormatListNumberedIcon className="text-white group-hover:text-custom-gray-700" /></button>
            <button onClick={() => editText('blockquote')} className="bg-white hover:bg-opacity-20 bg-opacity-0 rounded-md flex justify-center items-center p-1" title="dodaj wcięcie"><FormatIndentIncreaseIcon className="text-white group-hover:text-custom-gray-700"/></button>
        </div>
    );
};

export default Formatbar;
