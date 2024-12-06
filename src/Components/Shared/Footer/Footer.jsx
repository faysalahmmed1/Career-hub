import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white fixed bottom-0 left-0 w-full'>
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;