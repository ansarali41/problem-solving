var intersect = function (nums1, nums2) {
    let temp;
    let intersection = [];
    if (nums1.length > nums2.length) {
        temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                nums2[j] = -1;
                intersection.push(nums1[i]);
                break;
            }
        }
    }

    return intersection;
};

const nums1 = [4, 9, 5],
    nums2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1, nums2));
