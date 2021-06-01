import { sleep } from './time/sleep';
async function output() {
  console.log('开始...休息3秒');
  await sleep(3000);
  console.log('继续工作');
}
output();
