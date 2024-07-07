import Link from "next/link";

const Product = () => {
    const productId = 100
    return (
        <>
            <h1>Products</h1>
            <h1>
                <Link href="product/1" >
                    Product 1
                </Link>
            </h1 >
            {/* Replace  */}
            <h1>
                <Link href={`product/2`} replace>
                    Product 2
                </Link>
            </h1 >
            <h1>
                <Link href={`product/${productId}`} >
                    Product {productId}
                </Link>
            </h1 >
        </>
    );
}

export default Product;
