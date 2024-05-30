export const usePrice = (productPrice, productDiscount) => {
    const priceWithDiscount = (productPrice - (productPrice * (productDiscount / 100))).toFixed(2)

    return {priceWithDiscount, productPrice, productDiscount}
}
