import getBuffer from './getBuffer';

export default class ArrayBufferConverter {
  constructor(buffer) {
    this.buffer = buffer;
  }

  load(buffer) {
    this.buffer = new Uint8Array(buffer);
  }

  toString() {
    return String.fromCharCode(...this.buffer);
  }
}
/* Легенда
Периодически данные приходят в бинарном формате и
их необходимо преобразовать в какой-либо другой формат,
например, строку json, чтобы потом распарсить в объект.
Для этих манипуляций в том числе можно использовать объекты,
которые предоставляются Web API - File и Blob,
но прямая манипуляция ArrayBuffer будет в разы быстрее и эффективнее.

Описание
У вас есть функция getBuffer(),
которая эмулирует создание объекта типа ArrayBuffer.
Вам необходимо реализовать класс ArrayBufferConverter с методом load(),
который может загружать данные (сигнатура load(buffer)),
и методом toString, который умеет переводить
содержимое загруженного ArrayBuffer в строку. */
