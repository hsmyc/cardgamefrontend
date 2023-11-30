"use server";
import { getRedis } from "@/lib/redis";

export async function setMap(name: string, key: Tile[][]) {
  const keyJ = JSON.stringify(key);
  const redis = await getRedis();
  const res = await redis.call("JSON.SET", name, "$", keyJ);
  console.log(res);

  return true;
}

export async function getMap(name: string) {
  const redis = await getRedis();
  const res = await redis.call("JSON.GET", name);
  console.log(res);
  return res;
}
