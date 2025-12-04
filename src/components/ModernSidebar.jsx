import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { MdArrowForwardIos, MdDoubleArrow } from "react-icons/md";
import { IoIosWallet } from "react-icons/io";

const ModernSidebar = () => {

    const [isDashboardOpen, setIsDashboardOpen] = React.useState(false);
    const [isAccountsOpen, setIsAccountsOpen] = React.useState(false);
    const location = useLocation();

    const toggleDashboard = () => setIsDashboardOpen(!isDashboardOpen);
    const toggleAccounts = () => setIsAccountsOpen(!isAccountsOpen);

    const menuItems = [
        {
            title: "Dashboard",
            icon: <IoMdHome className="h-6 w-6" />,
            isOpen: isDashboardOpen,
            toggle: toggleDashboard,
            navigate: "/dashboard",
            children: [],
        },
        {
            title: "Accounts",
            icon: <IoIosWallet className="h-6 w-6" />,
            isOpen: isAccountsOpen,
            toggle: toggleAccounts,
            navigate: "",
            children: [
            { title: "Total Accounts", icon: <MdDoubleArrow className="h-4 w-4" />, navigate: "/dashboard/account" }
            ]
        }
    ];

    return (
        <aside className="hidden md:block min-w-[250px] bg-white dark:bg-gray-800 text-gray-800 dark:text-slate-200 font-sans">
            
            <div className="h-20 flex items-center justify-center text-xl font-bold">
                DashCode
            </div>

            <div className="uppercase text-sm mx-9 py-3 text-gray-500 dark:text-gray-400">
                Menu
            </div>

            <nav className="mx-6" >
                {menuItems.map((item, index) => (
                    <ul key={index} className='mb-2'>
                        
                        {/* Main Item */}
                        <Link to={item.navigate} className="no-underline">
                        <li
                            onClick={item.toggle}
                            className={`h-12 px-2 ${location.pathname === item.navigate ? "bg-slate-50/20 dark:bg-gray-700" : ""} flex items-center justify-between hover:bg-slate-50/20 dark:hover:bg-gray-700 rounded-md cursor-pointer transition-all duration-200`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`transition-transform duration-300`}>{item.icon}</span>
                                <p>{item.title}</p>
                            </div>

                            <MdArrowForwardIos
                                size={15}
                                className={`transition-transform duration-300 ${
                                    item.isOpen ? "rotate-90" : ""
                                }`}
                            />
                        </li>
                        </Link>

                        {/* Dropdown Items */}
                        {item.isOpen && item.children.map((child, i) => (
                            <Link to={child.navigate} key={i} className="no-underline">
                            <li
                                key={i}
                                className={`h-12 px-6 ${location.pathname === child.navigate ? "border-b-2 bg-slate-50/10" : ""} 
                                flex items-center gap-3 hover:bg-slate-50/20 dark:hover:bg-gray-700 rounded-md cursor-pointer 
                                transition-all duration-300`}
                            >
                                {child.icon}
                                <p>{child.title}</p>
                            </li>
                            </Link>
                        ))}
                    </ul>
                ))}
            </nav>

        </aside>
    );
};

export default ModernSidebar;
