module.exports = {
	node: function (data) {
		return function Node(data, next) {
			this.data = data;
			this.next = next;
		} 
	}
}