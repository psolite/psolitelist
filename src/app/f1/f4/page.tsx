import Link from "next/link";

const F4 = () => {
    return (
        <>
            <div>F4 Page</div>
            <div>
                <Link href="/f1/f3">F3</Link>
                <Link href="/about">About</Link>
            </div>
        </>
        );
}

export default F4;