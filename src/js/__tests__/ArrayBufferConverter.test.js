import ArrayBufferConverter from '../ArrayBufferConverter';

test('ArrayBufferConverter', () => {
  // создаем экземпляр класса ArrayBufferConverter
  const bufferArr = new ArrayBufferConverter();

  // в load то что получено в getBuffer
  bufferArr.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');

  // в toString выводить строку
  const result = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

  expect(bufferArr.toString()).toEqual(result);
});
