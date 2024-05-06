import Navbar from "../Components/Navbar"
import myImage from "/placeholder.svg"
export default function Home() {
    return (
        <>
            <section className="bg-gradient-to-tr from-dark-blue from-10% via-gradient-blue via-85% to-light-blue sm:w-screen ">
                <Navbar />
                <div className="flex flex-col justify-center h-screen ">
                    <div className="flex justify-center ">
                        <div className="text-white  text-center px-4 sm:px-6 md:px-8	">
                            <div className="text-4xl py-2 tracking-tighter font-bold  md:text-5xl lg:text-6xl/none">
                                Empowering the Future of Networking
                            </div>
                            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                Our deep network startup provides cutting-edge training programs and state-of-the-art lab facilities
                                to help individuals excel in the field of networking.
                            </p>

                            <div className="flex flex-col py-6 gap-10 min-[400px]:flex-row justify-center">
                                <button
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Explore Programs
                                </button>
                                <button
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-600  px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-600 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section - 2 */}
            <section className="bg-gradient-to-tl from-dark-blue via-gradient-blue to-light-blue h-screen flex justify-center items-center">
                <div className="container py-20 px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                        <img
                            alt="Training Programs"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            height="600"
                            src={myImage}
                            width="550"
                        />
                        <div className="flex flex-col justify-center space-y-4 text-white">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg px-3 py-1 text-sm">Training Programs</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Elevate Your Networking Skills</h2>
                                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our comprehensive training programs cover the latest advancements in networking, equipping you with
                                    the knowledge and practical skills to excel in the field.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                                <button
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Explore Programs
                                </button>
                                <button
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-600  px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-600 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section - 3 */}
            <section className="bg-gradient-to-tr from-dark-blue via-gradient-blue to-light-blue h-screen flex justify-center items-center">
                <div className="container py-20 px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-4 text-white">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg px-3 py-1 text-sm">Lab Facilities</div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hands-On Learning in State-Of-the-Art Labs</h2>
                                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Our cutting-edge lab facilities provide a dynamic environment for you to apply your networking knowledge and hone your practical skills.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                                <button
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                                >
                                    Explore Labs
                                </button>
                                <button
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-600  px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-600 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                                >
                                    About Us
                                </button>
                            </div>
                        </div>

                        <img
                            alt="Training Programs"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            height="600"
                            src={myImage}
                            width="550"
                        />
                    </div>
                </div>
            </section>

            {/* Section - 4 */}
            <section className="bg-gradient-to-tl from-dark-blue from-20% via-gradient-blue via-65% to-light-blue">
                <div className="flex flex-col justify-center h-screen ">
                    <div className="flex justify-center">
                        <div className="container px-4 md:px-6 text-white">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <div className="inline-block rounded-lg  px-3 py-1 text-sm">For Students</div>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                            Build a Solid Networking Foundation
                                        </h2>
                                        <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Our tutorial section provides a comprehensive introduction to networking fundamentals, equipping
                                            students with the knowledge and skills to excel in the field.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <div className="inline-block rounded-lg  px-3 py-1 text-sm">For Researchers</div>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                            Accelerate Your Networking Research
                                        </h2>
                                        <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Researchers can leverage our development ecosystem to spin up their own testing environments for P4
                                            architectures, accelerating their research and innovation.
                                        </p>
                                    </div>

                                </div>
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <div className="inline-block rounded-lg  px-3 py-1 text-sm">For Professionals</div>
                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simulate NGNs in Production</h2>
                                        <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                            Architect novel approaches guided by academic research. Test, verify and incorporate the
                                            architecture that enhances your production systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-950">
                <p className="text-xs text-gray-400">© 2024 Open Lab Networks. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <button className="text-xs text-gray-50 hover:underline underline-offset-4" >
                        Terms of Service
                    </button>
                    <button className="text-xs  text-gray-50  hover:underline underline-offset-4">
                        Privacy Policy
                    </button>
                </nav>
            </footer>
        </>

    )
}