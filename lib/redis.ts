import { Redis } from "ioredis";
const redis = new Redis();

export async function getRedis() {
  return redis;
}
