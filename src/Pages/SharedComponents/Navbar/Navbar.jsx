const Navbar = () => {
    return (
        <div  className="flex justify-between px-24 py-8 fixed top-0 left-0 right-0 max-w-[1480px] mx-auto bg-gray-400 bg-opacity-15">
            {/* Logo */}
            <div>
                <h1 className="text-[#2ecc71] text-2xl font-bold">TaskN<span className="text-[#dbebfd]">est</span></h1>
            </div>

            {/* Menues */}
            <div className="flex justify-around items-center gap-6 text-lg font-semibold text-[#dbebfd]">
                <p>Home</p>
                <p>About</p>
                <p>Login</p>
            </div>
        </div>
    );
};

export default Navbar;