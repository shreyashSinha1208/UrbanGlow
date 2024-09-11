

module.exports = (allItems) => {
          originalPrice = 0,discountPrice = 0, finalPrice = 0;;
          let lastItem = allItems.length - 1;
          for (let i = 0; i <= lastItem; i++) {
                    originalPrice += allItems[i].price;
          }
          discountPrice = originalPrice / 10;
          finalPrice = originalPrice - discountPrice + 5;
          return { discountPrice, finalPrice, originalPrice };
}