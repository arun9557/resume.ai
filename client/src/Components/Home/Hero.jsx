import React from 'react'

const Hero = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const logos = [
        'https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg',
        'https://saasly.prebuiltui.com/assets/companies-logo/framer.svg',
        'https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg',
        'https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg',
        'https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg',
    ]
    return (
        <>
            <div className="min-h-screen pb-20">
                {/* Navbar */}
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    <a href="https://prebuiltui.com">
                        <svg width="157" height="40" viewBox="0 0 157 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M47.904 28.28C46.8773 28.28 45.9627 28.0653 45.16 27.636C44.3573 27.188 43.7227 26.5813 43.256 25.816C42.808 25.0507 42.584 24.1827 42.584 23.212V19.348C42.584 18.3773 42.8173 17.5093 43.284 16.744C43.7507 15.9787 44.3853 15.3813 45.188 14.952C45.9907 14.504 46.896 14.28 47.904 14.28C49.1173 14.28 50.2093 14.5973 51.18 15.232C52.1693 15.848 52.944 16.688 53.504 17.752C54.0827 18.7973 54.372 19.9827 54.372 21.308C54.372 22.6147 54.0827 23.8 53.504 24.864C52.944 25.9093 52.1693 26.74 51.18 27.356C50.2093 27.972 49.1173 28.28 47.904 28.28ZM40.708 33.6V14.56H43.788V18.172L43.256 21.448L43.788 24.696V33.6H40.708ZM47.4 25.368C48.1467 25.368 48.8 25.2 49.36 24.864C49.9387 24.5093 50.3867 24.024 50.704 23.408C51.04 22.792 51.208 22.0827 51.208 21.28C51.208 20.4773 51.04 19.768 50.704 19.152C50.3867 18.536 49.9387 18.06 49.36 17.724C48.8 17.3693 48.1467 17.192 47.4 17.192C46.6533 17.192 45.9907 17.3693 45.412 17.724C44.8333 18.06 44.3853 18.536 44.068 19.152C43.7507 19.768 43.592 20.4773 43.592 21.28C43.592 22.0827 43.7507 22.792 44.068 23.408C44.3853 24.024 44.8333 24.5093 45.412 24.864C45.9907 25.2 46.6533 25.368 47.4 25.368ZM56.9502 28V14.56H60.0302V28H56.9502ZM60.0302 20.524L58.9662 19.992C58.9662 18.2933 59.3395 16.9213 60.0862 15.876C60.8515 14.812 61.9995 14.28 63.5302 14.28C64.2022 14.28 64.8089 14.4013 65.3502 14.644C65.8915 14.8867 66.3955 15.2787 66.8622 15.82L64.8462 17.892C64.6035 17.6307 64.3329 17.444 64.0342 17.332C63.7355 17.22 63.3902 17.164 62.9982 17.164C62.1395 17.164 61.4302 17.4347 60.8702 17.976C60.3102 18.5173 60.0302 19.3667 60.0302 20.524ZM74.1864 28.28C72.8424 28.28 71.629 27.9813 70.5464 27.384C69.4824 26.768 68.633 25.928 67.9984 24.864C67.3824 23.8 67.0744 22.6053 67.0744 21.28C67.0744 19.9547 67.3824 18.7693 67.9984 17.724C68.6144 16.66 69.445 15.82 70.4904 15.204C71.5544 14.588 72.7304 14.28 74.0184 14.28C75.269 14.28 76.3704 14.5693 77.3224 15.148C78.293 15.7267 79.049 16.52 79.5904 17.528C80.1504 18.536 80.4304 19.684 80.4304 20.972C80.4304 21.196 80.4117 21.4293 80.3744 21.672C80.3557 21.896 80.3184 22.148 80.2624 22.428H69.2304V19.908H78.6664L77.5184 20.916C77.481 20.0947 77.3224 19.404 77.0424 18.844C76.7624 18.284 76.361 17.8547 75.8384 17.556C75.3344 17.2573 74.709 17.108 73.9624 17.108C73.1784 17.108 72.497 17.276 71.9184 17.612C71.3397 17.948 70.8917 18.424 70.5744 19.04C70.257 19.6373 70.0984 20.356 70.0984 21.196C70.0984 22.036 70.2664 22.7733 70.6024 23.408C70.9384 24.0427 71.4144 24.5373 72.0304 24.892C72.6464 25.228 73.3557 25.396 74.1584 25.396C74.849 25.396 75.4837 25.2747 76.0624 25.032C76.6597 24.7893 77.1637 24.4347 77.5744 23.968L79.5344 25.956C78.881 26.7213 78.0877 27.3 77.1544 27.692C76.221 28.084 75.2317 28.28 74.1864 28.28ZM90.0954 28.28C89.0687 28.28 88.1541 28.0653 87.3514 27.636C86.5487 27.188 85.9141 26.5813 85.4474 25.816C84.9994 25.0507 84.7754 24.1827 84.7754 23.212V19.348C84.7754 18.3773 85.0087 17.5093 85.4754 16.744C85.9421 15.9787 86.5767 15.3813 87.3794 14.952C88.1821 14.504 89.0874 14.28 90.0954 14.28C91.3087 14.28 92.4007 14.5973 93.3714 15.232C94.3607 15.848 95.1354 16.688 95.6954 17.752C96.2741 18.7973 96.5634 19.9827 96.5634 21.308C96.5634 22.6147 96.2741 23.8 95.6954 24.864C95.1354 25.9093 94.3607 26.74 93.3714 27.356C92.4007 27.972 91.3087 28.28 90.0954 28.28ZM82.8994 28V7.84H85.9794V17.864L85.4474 21.112L85.9794 24.388V28H82.8994ZM89.5914 25.368C90.3381 25.368 90.9914 25.2 91.5514 24.864C92.1301 24.5093 92.5781 24.024 92.8954 23.408C93.2314 22.792 93.3994 22.0827 93.3994 21.28C93.3994 20.4773 93.2314 19.768 92.8954 19.152C92.5781 18.536 92.1301 18.06 91.5514 17.724C90.9914 17.3693 90.3381 17.192 89.5914 17.192C88.8447 17.192 88.1821 17.3693 87.6034 17.724C87.0247 18.06 86.5767 18.536 86.2594 19.152C85.9421 19.768 85.7834 20.4773 85.7834 21.28C85.7834 22.0827 85.9421 22.792 86.2594 23.408C86.5767 24.024 87.0247 24.5093 87.6034 24.864C88.1821 25.2 88.8447 25.368 89.5914 25.368ZM104.658 28.28C103.519 28.28 102.502 28.028 101.606 27.524C100.728 27.02 100.038 26.3293 99.5336 25.452C99.0483 24.556 98.8056 23.5293 98.8056 22.372V14.56H101.886V22.232C101.886 22.8853 101.988 23.4453 102.194 23.912C102.418 24.36 102.735 24.7053 103.146 24.948C103.575 25.1907 104.079 25.312 104.658 25.312C105.554 25.312 106.235 25.0507 106.702 24.528C107.187 23.9867 107.43 23.2213 107.43 22.232V14.56H110.51V22.372C110.51 23.548 110.258 24.584 109.754 25.48C109.268 26.3573 108.587 27.048 107.71 27.552C106.832 28.0373 105.815 28.28 104.658 28.28ZM113.634 28V14.56H116.714V28H113.634ZM115.174 12.096C114.652 12.096 114.213 11.9187 113.858 11.564C113.522 11.2093 113.354 10.7707 113.354 10.248C113.354 9.72533 113.522 9.28667 113.858 8.932C114.213 8.57733 114.652 8.4 115.174 8.4C115.716 8.4 116.154 8.57733 116.49 8.932C116.826 9.28667 116.994 9.72533 116.994 10.248C116.994 10.7707 116.826 11.2093 116.49 11.564C116.154 11.9187 115.716 12.096 115.174 12.096ZM120.169 28V7.84H123.249V28H120.169ZM128.721 28V8.96H131.801V28H128.721ZM125.501 17.36V14.56H135.021V17.36H125.501ZM142.775 28.28C141.636 28.28 140.619 28.028 139.723 27.524C138.845 27.02 138.155 26.3293 137.651 25.452C137.165 24.556 136.923 23.5293 136.923 22.372V14.56H140.003V22.232C140.003 22.8853 140.105 23.4453 140.311 23.912C140.535 24.36 140.852 24.7053 141.263 24.948C141.692 25.1907 142.196 25.312 142.775 25.312C143.671 25.312 144.352 25.0507 144.819 24.528C145.304 23.9867 145.547 23.2213 145.547 22.232V14.56H148.627V22.372C148.627 23.548 148.375 24.584 147.871 25.48C147.385 26.3573 146.704 27.048 145.827 27.552C144.949 28.0373 143.932 28.28 142.775 28.28ZM151.752 28V14.56H154.832V28H151.752ZM153.292 12.096C152.769 12.096 152.33 11.9187 151.976 11.564C151.64 11.2093 151.472 10.7707 151.472 10.248C151.472 9.72533 151.64 9.28667 151.976 8.932C152.33 8.57733 152.769 8.4 153.292 8.4C153.833 8.4 154.272 8.57733 154.608 8.932C154.944 9.28667 155.112 9.72533 155.112 10.248C155.112 10.7707 154.944 11.2093 154.608 11.564C154.272 11.9187 153.833 12.096 153.292 12.096Z" fill="#020618"/>
                            <path d="M8.75 11.2991L15.5 15.1839L22.25 11.2991M8.75 34.5783V26.8236L2 22.9387M29 22.9387L22.25 26.8236V34.5783M2.405 15.4081L15.5 22.9536L28.595 15.4081M15.5 38V22.9387M29 28.9154V16.962C28.9995 16.4379 28.8606 15.9233 28.5973 15.4696C28.334 15.0159 27.9556 14.6391 27.5 14.3771L17 8.40036C16.5439 8.13808 16.0266 8 15.5 8C14.9734 8 14.4561 8.13808 14 8.40036L3.5 14.3771C3.04439 14.6391 2.66597 15.0159 2.40269 15.4696C2.13941 15.9233 2.00054 16.4379 2 16.962V28.9154C2.00054 29.4395 2.13941 29.9541 2.40269 30.4078C2.66597 30.8615 3.04439 31.2383 3.5 31.5003L14 37.477C14.4561 37.7393 14.9734 37.8774 15.5 37.8774C16.0266 37.8774 16.5439 37.7393 17 37.477L27.5 31.5003C27.9556 31.2383 28.334 30.8615 28.5973 30.4078C28.8606 29.9541 28.9995 29.4395 29 28.9154Z" stroke="#4F39F6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>

                    <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                        <a href="#" className="hover:text-indigo-600 transition">Home</a>
                        <a href="#features" className="hover:text-indigo-600 transition">Features</a>
                        <a href="#testimonials" className="hover:text-indigo-600 transition">Testimonials</a>
                        <a href="#cta" className="hover:text-indigo-600 transition">Contact</a>
                    </div>

                    <div className="flex gap-2">
                        <a href="" className="hidden md:block px-6 py-2 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition-all rounded-full text-white">
                            Get started
                        </a>
                        <a href="" className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" >
                            Login
                        </a>
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu" >
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
                    <a href="/" className="text-white">Home</a>
                    <a href="/products" className="text-white">Products</a>
                    <a href="/stories" className="text-white">Stories</a>
                    <a href="/pricing" className="text-white">Pricing</a>
                    <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-md flex" >
                        X
                    </button>
                </div>

                {/* Hero Section */}
                <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
                    <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-indigo-300 blur-[100px] opacity-30"></div>

                    {/* Avatars + Stars */}
                    <div className="flex items-center mt-24">
                        <div className="flex -space-x-3 pr-3">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]" />
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="user1" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="user2" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200" alt="user3" className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]" />
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="user5" className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]" />
                        </div>

                        <div>
                            <div className="flex ">
                                {Array(5).fill(0).map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star text-transparent fill-indigo-600" aria-hidden="true"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                                ))}
                            </div>
                            <p className="text-sm text-gray-700">
                                Used by 10,000+ users
                            </p>
                        </div>
                    </div>

                    {/* Headline + CTA */}
                    <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
                        Build stunning websites with <span className=" bg-gradient-to-r from-indigo-700 to-indigo-600 bg-clip-text text-transparent text-nowrap">PrebuiltUI </span> Components.
                    </h1>

                    <p className="max-w-md text-center text-base my-7">Explore a growing library of over 320+ beautifully crafted, customizable components.</p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4 ">
                        <a href='/' className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-indigo-400 flex items-center transition-colors">
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                        </a>
                        <button className="flex items-center gap-2 border border-slate-400 hover:bg-indigo-50 transition rounded-full px-7 h-12 text-slate-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video size-5" aria-hidden="true"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect x="2" y="6" width="14" height="12" rx="2"></rect></svg>
                            <span>Try demo</span>
                        </button>
                    </div>

                    <p className="py-6 text-slate-600 mt-14">Trusting by leading brands, including</p>

                    <div className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4" id="logo-container">
                        {logos.map((logo, index) => <img key={index} src={logo} alt="logo" className="h-6 w-auto max-w-xs" />)}
                    </div>
                </div>
            </div>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
            </style>
        </>
    )
}

export default Hero