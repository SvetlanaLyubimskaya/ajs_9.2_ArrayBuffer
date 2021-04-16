import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load(buffer) {
    this.buffer = new Uint16Array(buffer);
  }

  toString() {
    return String.fromCharCode(...this.buffer);
  }
}