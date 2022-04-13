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
    a:"这里再次声明： 本工具不存在对游戏文件或内存信息进行修改的操作，不存在tp检测的问题。本工具所有功能均为合法调用拳头公布的League Client Update API，完全遵守英雄联盟的用户使用协议。因为当前版本并不能在游戏内发送排名信息（详见：Q：为什么会在快捷发送只能在选人界面使用，游戏里面不行？），不会因为言语的不合规导致封号。如果发生封号情况请联系我，并提供相应的日志文件，分析原因。*注，如果封三年请不用联系我，自己心里有数。"
  },
  {
    q:"为什么软件使用体验不好？",
    a:"主要是因为当前的软件版本为beta版本，类似于公测阶段。单独开发过程中很难发现那你会出现问题，所以希望在这段时间里，如果遇到问题可以多多反馈。"
  },
  {
    q:"为什么会在“对局面板”界面卡死？”",
    a:"这是目前我说已知的一个问题：当进入英雄选择时，软件会自动跳转到“对局面板”方便大家查阅，但是菜单的索引并没有跟着变化，导致如果在这个情况下用户再次点击“对局面板”会导致渲染进程卡死，这时候就需要手动开任务管理器来杀死进程，来重启软件了。"
  },
  {
    q:"为什么会在快捷发送只能在选人界面使用，游戏里面不行？",
    a:"在开发阶段经过多次测试发现。在进入游戏时，快捷键发送文本信息大多数情况下只会发送一条，因为暂时没有解决思路，把游戏内快捷发送关闭了，但在选人界面还是可以用的"
  },
  {
    q:"选人界面时，“对局面板”的队友信息显示不全",
    a:`在进入选人界面时，“对局面板”显示的数据不完全，主要是因为，程序是在进选人界面时开始获取当前房间的队友信息，这个信息主要是从聊天框中获取到的，如果有人并没有在第一时间进入Chat，那么就会导致这个问题。不过这个问题也提供了一个选择方案，如果队友的显示数量小于5个的时候，在右下角会出现一个“重新获取”的按钮，可以手动点击按钮来重新获取数据。在大多数情况下，在进入房间3秒后重新获取可以得到完整的队友数据。
    `
    
  }
]