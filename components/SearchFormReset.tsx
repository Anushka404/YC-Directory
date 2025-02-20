/*In Next.js, components are Server Components by default. 
This means they are rendered on the server and do not have access to the browser's document object. 
However, the SearchFormReset component uses document.querySelector, which is a browser API that is only available on the client side. */

"use client"

import Link from "next/link";
import {X} from "lucide-react";

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if(form) form.reset();
    }

    return (
        <button type="reset" onClick={reset}>
            <Link href="/" className="search-btn text-white">
                <X className="size-5" />
            </Link>
        </button>
    )
}
export default SearchFormReset