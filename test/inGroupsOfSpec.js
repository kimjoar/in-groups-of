var nums = [1,2,3,4,5,6,7,8,9,10];

describe('inGroupsOf(arr, n)', function(){
    it('should return array in groups of N', function(){
        expect(inGroupsOf(nums, 5)).toEqual([[1,2,3,4,5], [6,7,8,9,10]]);

        expect(inGroupsOf(nums, 4)).toEqual([[1,2,3,4], [5,6,7,8], [9,10]]);

        expect(inGroupsOf(nums, 2)).toEqual([[1,2], [3,4], [5,6], [7,8], [9,10]]);

        expect(inGroupsOf([], 1)).toEqual([]);
        expect(inGroupsOf([], 5)).toEqual([]);
    })
})
