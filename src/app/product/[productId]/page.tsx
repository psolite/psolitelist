"use client";
function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}
const ProductDetails = ({ params }: { params: { productId: string } }) => {
    const random = getRandomInt(2)

    if (random === 1){
        throw new Error("Error loading review")
    }
    return (
        <h1>Details about product {params.productId}</h1>
    );
}

export default ProductDetails;