function productExceptSelf(nums: number[]): Array<number> {
    const arr: number[] = []
    let product: number = 1

    for(let i = 0; i < nums.length; i++){
        arr[i] = product
        product *= nums[i]
    }

    product = 1

    for(let i = nums.length - 1; i >= 0; --i){
        arr[i] *= product
        product *= nums[i]
    }
    return arr
}
