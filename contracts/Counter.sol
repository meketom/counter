pragma solidity ^0.8.13;

contract Counter {

	uint32 public counter;

	constructor() {
		counter = 0;
	}

	function increment() external {
		counter++;
	}

	function getCounter() public view returns(uint) {
		return counter;
	}
}
