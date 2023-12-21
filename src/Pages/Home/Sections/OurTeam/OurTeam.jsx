const OurTeam = () => {
    return (
        <div className="px-24 py-16 mb-16">
            <h2 className="uppercase text-3xl font-bold mb-20">Meet The Team</h2>
            {/* 1st Row */}
            <div className="flex justify-center gap-16 mb-14">
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-3 object-cover" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h4 className="font-bold text-lg">Elina Nex</h4>
                    <p className="text-xs font-medium">UI UX Designer</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-3 object-cover"  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h4 className="font-bold text-lg">Simon Rebbon</h4>
                    <p className="text-xs font-medium">Front End Developer</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-3 object-cover"  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h4 className="font-bold text-lg">Raj Sharmani</h4>
                    <p className="text-xs font-medium">Back End Developer</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-3 object-cover"  src="https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h4 className="font-bold text-lg">Mario Pagani</h4>
                    <p className="text-xs font-medium">Product Manager</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-3 object-cover"  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h4 className="font-bold text-lg">Maria Saleh</h4>
                    <p className="text-xs font-medium">Analyst</p>
                </div>
            </div>

            {/* 2nd Row */}
            <div className="flex justify-center gap-16">
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-3 object-cover" src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h4 className="font-bold text-lg">Nitin Khajotia</h4>
                    <p className="text-xs font-medium">Front End Developer</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-3 object-cover"  src="https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h4 className="font-bold text-lg">Hayma Jahan</h4>
                    <p className="text-xs font-medium">Front End Developer</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-3 object-cover"  src="https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h4 className="font-bold text-lg">Min Ann</h4>
                    <p className="text-xs font-medium">Back End Developer</p>
                </div>
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 rounded-full mb-3 object-cover"  src="https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h4 className="font-bold text-lg">Dalila Dalprat</h4>
                    <p className="text-xs font-medium">UI UX Designer</p>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;