import {fromTimestampToDate} from './time';

describe('fromTimestampToDate', () => {
  it('should return string', () => {
    const timestamp = new Date().getTime();
    const result = fromTimestampToDate(timestamp);

    expect(typeof result).toBe('string');
  });

  it('should return format mm-dd-yyyy', () => {
    const regex = /^\d{2}\-\d{2}\-\d{4}/;
    const timestamp = new Date().getTime();
    const result = fromTimestampToDate(timestamp);

    expect(result.match(regex)).toBeTruthy();
  });
});
