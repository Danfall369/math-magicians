import operate from '../logic/operate';

describe('operate function', () => {
  // Test the addition operation
  it('should add two numbers correctly', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });

  // Test the subtraction operation
  it('should subtract two numbers correctly', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  // Test the multiplication operation
  it('should multiply two numbers correctly', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });

  // Test the division operation
  it('should divide two numbers correctly', () => {
    expect(operate(6, 3, '÷')).toBe('2');
  });

  // Test division by zero
  it('should return an error message when dividing by zero', () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  // Test the modulo operation
  it('should find the modulo correctly', () => {
    expect(operate(7, 3, '%')).toBe('1');
  });

  // Test modulo by zero
  it('should return an error message when finding modulo with divisor zero', () => {
    expect(operate(7, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  // Test unknown operation
  it('should throw an error when an unknown operation is passed', () => {
    expect(() => operate(2, 3, '*')).toThrowError("Unknown operation '*'");
  });
});
