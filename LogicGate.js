// LogicGate will be the super-class for the other logic gate class
function LogicGate(){
	var inputA = false;
	var inputB = false;
	var output = false;
	
	this.setInputA = function(inA){
		this.inputA = inA;
	}
	
	this.getInputA = function(){
		return this.inputA;
	}
	
	this.setInputB = function(inB){
		this.inputB = inB;
	}
	
	this.getInputB = function(){
		return this.inputB;
	}
	
	this.setOutput = function(out){
		this.output = out;
	}
	
	this.getOutput = function(){
		return this.output;
	}
}

// Logic AND gate class
function LogicAND(inA, inB){
	this.setInputA(inA);
	this.setInputB(inB);
	this.setOutput(this.getInputA() && this.getInputB());
}

// Inherit the LogicGate
LogicAND.prototype = new LogicGate();

// Logic OR gate class
function LogicOR(inA, inB){
	this.setInputA(inA);
	this.setInputB(inB);
	this.setOutput(this.getInputA() || this.getInputB());
}

// Inherit the LogicGate
LogicOR.prototype = new LogicGate();

// Logic XOR gate class
function LogicXOR(inA, inB){
	this.setInputA(inA);
	this.setInputB(inB);
	this.setOutput((this.getInputA() || this.getInputB()) && !(this.getInputA() && this.getInputB()));
}

// Inherit the LogicGate
LogicXOR.prototype = new LogicGate();

// Logic NOT gate class
function LogicNOT(inA){
	this.setInputA(inA);
	this.setOutput(!this.getInputA());
}

// Inherit the LogicGate
LogicNOT.prototype = new LogicGate();