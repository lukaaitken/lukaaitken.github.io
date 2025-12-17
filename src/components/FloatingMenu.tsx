
import { useState } from "react";
import { navLinks } from "@/constants";

export const FloatingMenu = () => {
    const [active, setActive] = useState('#hero');

    return (
        <div className="fixed">
            {navLinks.map((link) => {
                const Icon = link.icon;

                return (
                    <a href="" className="">
                        <Icon className='size-5' />
                    </a>
                )
            })}
        </div>
    );
}