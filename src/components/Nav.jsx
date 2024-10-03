import { useEffect, useRef, useState } from "react"
import Logo from '../assets/header/logo/mahindra-logo-new.svg'

// Avatar Usuário
const AvatarUser = () => {

    const [state, setState] = useState(false)
    const profileRef = useRef()

    const navigation = [
        { title: "Dashboard", path: "/dashboard" },
        { title: "Profile", path: "/profile" },
    ]


    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className="relative border-t lg:border-none z-50">
            <div className="">
                <button ref={profileRef} className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                        className="w-full h-full rounded-full"
                    />
                </button>
            </div>

            {/* Itens */}
            <ul className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li key={idx}>
                            <a className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3" href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }

                {/* Logout */}
                <button className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
                    Logout
                </button>
            </ul>
        </div>
    )
}

// Nav
export const Nav = () => {

    const [state, setState] = useState(false)

    const navigation = [
        { title: "Home", path: "/" },
        { title: "Races", path: "/races" },
        { title: "App Mobile", path: "/app-mobile" },
        { title: "TrackVision", path: "/trackvision" },
    ]



    return (
        <header className="text-base lg:text-sm z-50 bg-black">
            <div className={`bg-black items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${state ? "h-full fixed inset-x-0" : ""}`}>
                <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
                    <a href="">
                        <img
                            src={Logo}
                            width={120}
                            height={50}
                            alt="Float UI logo"
                        />
                    </a>
                    <div className="lg:hidden">
                        <button className="text-white"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                    </svg>

                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${state ? "" : "hidden"}`}>
                    <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0 ">
                        <div className='flex-1 items-center justify-start pb-4 lg:flex lg:pb-0'>
                        
                        </div>

                        {/* Itens Nav */}
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <a href={item.path} className="block text-white uppercase text-xs hover:text-red-600 transition-all">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <AvatarUser />
                    </ul>
                </div>
            </div>
        </header>
    )
}