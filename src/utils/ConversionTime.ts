export function CovTime(utcTimeStr: string) {
  // 创建一个Date对象并解析时间字符串
  const utcTime = new Date(utcTimeStr);

  // 添加8小时的偏移量，以得到北京时间
  utcTime.setHours(utcTime.getHours() + 8);

  // 获取北京时间的各个部分
  const year = utcTime.getUTCFullYear();
  const month = utcTime.getUTCMonth() + 1; // 月份从0开始，所以要加1
  const day = utcTime.getUTCDate();
  const hours = utcTime.getUTCHours();
  const minutes = utcTime.getUTCMinutes();
  // const seconds = utcTime.getUTCSeconds();
  // const milliseconds = utcTime.getUTCMilliseconds();
  return year + "-" + month + "-" + day + "   " + hours + ":" + minutes;
}
