import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function Header() {
    const { data: session } = useSession();
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="flex-1 pl-5 text-3xl font-bold">
                {session?.user.name ? `Notes for ${session?.user.name}` : "Notes"}

            </div>
            <div className="flex-none gap-2">
                <div className="dropdown-end dropdown">
                    {session?.user
                        ? (
                            <>
                            <label
                                tabIndex={0}
                                className="btn-ghost btn-circle avatar btn"
                            >
                                <div className="w-10 rounded-full">
                                    {session?.user.image &&
                                        <img src={session?.user.image} alt="profile" />}
                                </div>
                            </label>
                                <ul tabIndex={0} className="dropdown-content rounded bg-white w-52 menu p-2 shadow"  >
                                    <li>
                                        <button onClick={()=>void signOut()} className="btn btn-danger">Sign out</button>
                                    </li>
                                </ul>
                            </>
                        )
                        : (
                            <button onClick={()=>void signIn()} className="btn btn-ghost rounded-btn ">
                                Sign in
                            </button>
                        )}
                </div>
            </div>
        </div>
    );
}

export default Header;
