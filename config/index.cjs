/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {
  USE_PASSAGE: 'push-plus',
  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx3a72cccedb23cc22',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '2f8e11c5b5220d61bb454a4d391dc165',

  PROVINCE: '浙江',
  CITY: '绍兴',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oAEa85_xx9JW6ke_QFiuWNWIFV4o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MbwEaFRA8yadmsO76C9AVQoL5qPh9WEnmd0zspynivw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '囡囡宝儿', year: '1993', date: '08-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '囡囡宝儿', year: '1993', date: '10-05',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '10-02',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-11-10' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2020-11-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'O56h3i8saq1PdTa7_pk7Kk7RMUFynKeFhQWlr69gejM',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oAEa85_xx9JW6ke_QFiuWNWIFV4o',
    }
  ],

}

module.exports = USER_CONFIG

