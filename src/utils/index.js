export const inBrowser = typeof window !== 'undefined'
export const UA = inBrowser && window.navigator.userAgent.toLowerCase()
export const isIE = UA && /msie|trident/.test(UA)
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0
export const isEdge = UA && UA.indexOf('edge/') > 0
export const isAndroid = (UA && (/android/i).test(UA))
export const isIOS = (UA && (/iphone|ipad|ipod|ios/i).test(UA))
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
export const inNative = UA && (/FusionKit/i).test(UA)
export const inDidiApp = inNative && (/didi\.passenger/i).test(UA)
export const inCustomerApp = inNative && (/soda\.customer/i).test(UA)
export const inEmbedCustomerApp = inNative && (/soda\.embedcustomer/i).test(UA)
export const inSoda = inNative && (/soda\./i).test(UA)
export const inMerchantApp = inNative && (/soda\.merchant/i).test(UA)
export const inRiderApp = inNative && (/soda\.rider/i).test(UA)
export const inBDApp = inNative && (/soda\.manager/i).test(UA)
export const inMechantPC = UA && (/soda\.PCMerchant/i).test(UA)

export const inAlipay = !inNative && (/Alipay/i).test(UA)
export const inWechat = !inNative && (/MicroMessenger/i).test(UA)
export const inQQ = !inNative && (/QQ/i).test(UA)

export const inSystemBrowser = inBrowser && !inNative && !inAlipay && !inWechat && !inQQ
