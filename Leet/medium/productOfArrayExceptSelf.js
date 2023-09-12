function productExceptSelf(nums) {
    var arr = [];
    var product = 1;
    for (var i = 0; i < nums.length; i++) {
        arr[i] = product;
        product *= nums[i];
    }
    product = 1;
    for (var i = nums.length - 1; i >= 0; --i) {
        arr[i] *= product;
        product *= nums[i];
    }
    return arr;
}
