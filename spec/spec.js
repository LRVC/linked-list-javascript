var yourCode = require('../source');

function Node(data, next) {
	this.data = data;
	this.next = next;
}

describe('#node', function() {
	it('returns nil when there is no next Node', function() {
		var testNode = yourCode.node('data');
		expect(testNode.next).toEqual(undefined);
	});

	it('returns the next Node when one has been set'), function() {
		var testNode = yourCode.node('data');
		var nextNode = yourCode.node('next data');
		testNode.next = nextNode;

		expect(testNode.next).toEqual(nextNode);
	}
});









// describe('#compact', function() {
//   it('returns a new array with all provided undefined values removed', function() {
//     var input = [undefined, 1,2,3, null, 'foo', 'bar'];
//     expect(yourCode.compact(input)).toEqual([1,2,3, null, 'foo', 'bar']);
//   });

//   it('returns an empty array if all provided values are undefined', function() {
//     var input = [undefined, undefined, undefined];
//     expect(yourCode.compact(input)).toEqual([]);
//   });
// });