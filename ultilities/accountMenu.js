import { faRegistered, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const accountMenu = [
    {
        name: "Login",
        icon: <FontAwesomeIcon icon={faSignIn} className="h-[20px] w-[20px]"/>,
        path: <Link href="/account/login">Login</Link>
    },
    {   
        name: "Register",
        icon: <FontAwesomeIcon icon={faRegistered} className="h-[20px] w-[20px]"/>,
        path: <Link href="/account/register">register</Link>
    }
]


export default accountMenu;