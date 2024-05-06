export default function PageNotFound() {
    return (
        <>
            <div className="flex flex-col justify-center h-screen bg-gray-950">
                <div className="flex justify-center text-white p-2 ">
                    <div>
                        <span className="text-red-600 text-lg">
                            404 Error
                        </span> Page Not Found
                    </div>
                </div>
            </div>
        </>
    )
}
