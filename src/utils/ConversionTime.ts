//2024-1-15 3:32
export function convertUTCToBeijingTime(utcTimeStr: string) {
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
  return year + "-" + month + "-" + day + "   " + hours + ":" + minutes;
}

export function timeAgo(time: string): string {
  if (!time) {
    throw new Error("Invalid time");
  }

  const currentTime = new Date();
  const pastTime = new Date(time);

  if (isNaN(pastTime.getTime())) {
    throw new Error("Invalid time format");
  }

  const diffInMilliseconds = currentTime.getTime() - pastTime.getTime();

  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInSeconds < 60) {
    return "刚刚";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}分钟前`;
  } else if (diffInHours < 24) {
    return `${diffInHours}小时前`;
  } else if (diffInDays < 7) {
    return `${diffInDays}天前`;
  } else {
    return convertUTCToBeijingTime(time);
  }
}

export function formatDateToChinese(time: string): string {
  const utcTime = new Date(time);

  // 使用 'zh-CN' 语言环境和选项来获取日期
  const options: Intl.DateTimeFormatOptions = {
    month: "2-digit",
    day: "2-digit",
  };
  const formattedTime = utcTime.toLocaleDateString("zh-CN", options);

  const dateParts = formattedTime.split("/").map((item, index) => {
    return index === 0 ? `${item}月` : `${item}日`;
  });
  return dateParts.join("");
}

export function formatDateTime(dateTimeStr: string): string {
  const date = new Date(dateTimeStr);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return date.toLocaleDateString("zh-CN", options).replace("上午", "中午");
}
