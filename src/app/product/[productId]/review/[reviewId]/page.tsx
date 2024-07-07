"use client";
import { notFound } from "next/navigation";
// import { Metadata } from "next";

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

// export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
//     const titleP = await new Promise(
//         resolve => {
//             setTimeout(() => {
//                 resolve(`Psolite ${params.productId}`)
//             })
//         }
//     )
//     const titleR = await new Promise(
//         resolve => {
//             setTimeout(() => {
//                 resolve(` ${params.reviewId}`)
//             })
//         }
//     )
//     return {
//         title: `Product ${titleP} and Review ${titleR}`
//     }
// }

type Props = {
    params: {
        productId: string,
        reviewId: string
    };
};

const Review = ({ params }: Props) => {
    const random = getRandomInt(2)

    if (random === 1){
        throw new Error("Error loading review")
    }
    if (parseInt(params.reviewId) > 1000) {
        notFound();
    }
    return (
        <h1>Review of {params.reviewId} product {params.productId}</h1>
    );
}

export default Review;