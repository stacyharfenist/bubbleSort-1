describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('sorts the single array', function() {
    expect(bubbleSort([15])).toEqual([15])
  });

  it('sorts the array', function() {
      expect(bubbleSort([6,10,4,15])).toEqual([4,6,10,15])
  });



});
