import React, {useState} from 'react';
import { usetheme } from '../context/ThemeContext';
import { ChevronDown, Laptop2, Moon, Sun } from 'lucide-react';
const ThemeToggle = () => {
    const {theme, setTheme} = usetheme();
    const [open, setOpen] = useState(false);

    const themes = [
        {id:"light", label:"Light", icon:<Sun size={12} className='mr-1'/>},
        {id:"dark", label:"Dark", icon:<Moon size={12} className='mr-1'/>},
      /*   {id:"system", label:"System", icon:<Laptop2 size={10} className='mr-1'/>}, */
    ];

    const currentTheme = themes.find((t) => t.id === theme);
    const toggleDropdown = () => setOpen((prev) => !prev);

    const selectTheme = (selected) => {
        setTheme(selected);
        setOpen(false)
    }
    return (
        <div className='relative'>
            <button onClick={toggleDropdown} 
            className='flex items-center text-green-500 dark:text-green-400 p-2 border border-green-300
             dark:border-green-600 rounded-md hover:bg-green-50 dark:hover:bg-green-900 transition'>
                {currentTheme?.icon}
                <span>{currentTheme?.label}</span>
                <ChevronDown size={16} className='ml-2'/>
            </button>

            {open && (
                <ul className='absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 
                dark:border-gray-700 rounded-md shadow-lg z-50 w-30 md:w-36'>
                    {themes.map((item) => (
                        <li key={item.id}>
                            <button onClick={() => selectTheme(item.id)}
                            className={`w-full flex items-center px-2 py-1 md:px-3 md:py-2 text-sm hover:bg-green-100 
                                dark:hover:bg-green-900${theme === item.id ? "font-semibold text-green-600 dark:text-green-400": "text-gray-800 dark:text-gray-300"}`}>
                                {item.icon}
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ThemeToggle;