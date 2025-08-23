const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-center">
            <div>
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <h2 className="text-2xl mt-4 font-semibold">Page Not Found</h2>
                <p className="mt-2 text-gray-600">Sorry, the page you're looking for doesn't exist.</p>
            </div>
        </div>
    );
};

export default NotFound;
