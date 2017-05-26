describe('The greet function', function(){

    it('should greet Thembeka in English correctly', function(){
        assert.equal(generateGreeting('Thembeka', 'english'), 'Hello, Thembeka');
    });
    it('should greet Thembeka in Sesotho correctly', function(){
        assert.equal(generateGreeting('Thembeka', 'sesotho'), 'Dumela, Thembeka');
    });
    it('should greet Thembeka in Xhosa correctly', function(){
        assert.equal(generateGreeting('Thembeka', 'xhosa'), 'Molo, Thembeka');
    });
});
