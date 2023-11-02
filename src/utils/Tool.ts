// function generateBrowserFingerprint() {
//   // 创建一个空数组来存储浏览器属性值
//   const values = [];

//   // 用户代理字符串
//   values.push(navigator.userAgent);

//   // 屏幕分辨率
//   values.push(`${window.screen.width}x${window.screen.height}`);

//   // 可用屏幕宽度
//   values.push(window.screen.availWidth);

//   // 可用屏幕高度
//   values.push(window.screen.availHeight);

//   // 色深度
//   values.push(window.screen.colorDepth);

//   // 时区偏移
//   values.push(new Date().getTimezoneOffset());

//   // 浏览器插件列表
//   for (let i = 0; i < navigator.plugins.length; i++) {
//     const plugin = navigator.plugins[i];
//     values.push(`${plugin.name}${plugin.description}`);
//   }

//   // 获取本地存储是否可用
//   values.push(!!window.localStorage);

//   // 将所有属性值连接起来
//   const fingerprint = values.join("");

//   // 使用哈希函数来生成唯一标识符
//   const hash = new TextEncoder().encode(fingerprint);
//   return crypto.subtle.digest("SHA-256", hash).then((buffer) => {
//     let hashArray = Array.from(new Uint8Array(buffer));
//     let hashHex = hashArray
//       .map((byte) => byte.toString(16).padStart(2, "0"))
//       .join("");
//     return hashHex;
//   });
// }
