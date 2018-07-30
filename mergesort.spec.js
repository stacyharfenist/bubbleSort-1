describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
      // your code here 
      expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
      expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
      expect(split([1,2])).toEqual([[1],[2]]);
    });
  });

  describe('Merge function', function(){
      it('is able to merge two sorted arrays into one sorted array', function () {
          expect(merge([[1,2,3],[5,6,7]])).toEqual([1,2,3,5,6,7])
          expect(merge([[3,7,10], [1,2,5,25,30,45]])).toEqual([1,2,3,5,7,10,25,30,45])
      })
  })

describe('the dreaded mergeSort function', function (){
    it('splits an array into halves over and over again, then merges it back together, sorted', function (){
        expect(mergeSort([3,2])).toEqual([2,3]);
        expect(mergeSort([9,7,15,4,11])).toEqual([4,7,9,11,15])
    })
})


//   it('handles an empty array', function(){
//     expect( bubbleSort([]) ).toEqual( [] );
//   });

//   it('sorts the single array', function() {
//     expect(bubbleSort([15])).toEqual([15])
//   });

//   it('sorts the array', function() {
//       expect(bubbleSort([6,10,4,15])).toEqual([4,6,10,15])
//       // expect(compare).toHaveBeenCalledTimes(6);
//       // expect(swap).toHaveBeenCalledTimes(2);
//   });