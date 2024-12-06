import { NavLink } from "react-router-dom";


const Header = () => {
    const Link = <>
        <li><NavLink to='/statistics'>Statistics</NavLink></li>
        <li><NavLink to='/jobs'>Applied Jobs</NavLink></li>
        <li><NavLink to='/blogs'>Blog</NavLink></li>
    </>
    return (
        <div className="bg-base-100 justify-between flex">
            <div className="">
                <a href="/" className="btn btn-ghost text-xl">Jobs</a>
            </div>
            <div className="">
                <ul className=" flex gap-5 ">
                    {Link}
                </ul>
            </div>
            <div className="">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;