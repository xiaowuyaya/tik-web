export const logoUrl = "http://qiniu.eiko.ren/serendipity.png"
export const showImg = {
  index: "http://qiniu.lol-tool.com/imgs/home.png",
  gamePanel: "http://qiniu.lol-tool.com/imgs/game_panel_in_progress.png",
  gamePanel2: "http://qiniu.lol-tool.com/imgs/game_panel_select_champion.png",
  history: "http://qiniu.lol-tool.com/imgs/history.png",
  func: "http://qiniu.lol-tool.com/imgs/func.png",
  send_setting: "http://qiniu.lol-tool.com/imgs/send_setting.png",
  black_list: "http://qiniu.lol-tool.com/imgs/black_list.png",
  black_notice: "http://qiniu.lol-tool.com/imgs/black_notice.png",
  
  
}
export const qa = [
  {
    q:"使用Serendipity是否会造成封号",
    a:"这里再次声明： 本工具不存在对游戏文件或内存信息进行修改的操作，不存在tp检测的问题。本工具所有功能均为合法调用拳头公布的League Client Update API，完全遵守英雄联盟的用户使用协议。如果发生封号情况请联系我，并提供相应的日志文件，分析原因。*注，如果封三年请不用联系我，自己心里有数。"
  },
  {
    q:"一键发送没有反应",
    a:"在确保面板有完整的显示内容后，如果遇到按快捷键无法发送的问题一般是以下两种原因。1. 快捷键冲突，尝试在设置中通过自定义快捷键的方式更改其他快捷键，可以为单个按键或组合键（一起按），需要注意对快捷发送相关的设置需要重启软件后才能生效。2. Windows 10/11 x64/x32 需要Visual C++ Runtime Redistributable 的相关依赖，大家可以自行在网上下载，或者加群下载群文件。"
  },
  {
    q:"发送内容缺失",
    a:"当前版本可能会遇到发送条数确实，比如5个人可能只发送了3个人，或者是发送的内容信息有字符缺少的问题。这属于当前软件的bug，还在定位当中。"
  },
  {
    q:"5v5训练模式无法启动",
    a:"因为腾讯服务器的限制，当前国服创建的5v5训练模式无法邀请好友加入游戏，只能通过添加电脑的方式实现10人游戏，此功能外服不受影响。"
  },
  {
    q:"选人界面时，“对局面板”的队友信息显示不全",
    a:`在进入选人界面时，“对局面板”显示的数据不完全，主要是因为，程序是在进选人界面时开始获取当前房间的队友信息，这个信息主要是从聊天框中获取到的，如果有人并没有在第一时间进入Chat，那么就会导致这个问题。不过这个问题也提供了一个选择方案，如果队友的显示数量小于5个的时候，在右下角会出现一个“重新获取”的按钮，可以手动点击按钮来重新获取数据。在大多数情况下，在进入房间3秒后重新获取可以得到完整的队友数据。
    `
  }
]