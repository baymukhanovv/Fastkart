export const usePrice = (productPrice, productDiscount) => {
    const calculatePriceWithDiscount = (productPrice, productDiscount) => {
        return (productPrice - (productPrice * (productDiscount / 100))).toFixed(2)
    }

    const priceWithDiscount = calculatePriceWithDiscount(productPrice, productDiscount)

    return {priceWithDiscount, productPrice, productDiscount, calculatePriceWithDiscount}
}
