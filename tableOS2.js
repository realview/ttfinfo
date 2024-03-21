import { offset } from './table';

const VERSION_OFFSET = 0;
const WEIGHT_CLASS_OFFSET = 4;

export default function getOS2Info(data) {
  const o = offset(data, 'OS/2');
  return {
    version: data.readUInt16BE(o + VERSION_OFFSET),
    weightClass: data.readUInt16BE(o + WEIGHT_CLASS_OFFSET)
  };
}