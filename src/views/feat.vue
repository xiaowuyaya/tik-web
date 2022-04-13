<template>
  <div class="feat-container">
        <!-- 回到顶部 -->
    <el-backtop right="20"></el-backtop>
    <div class="typora-export-content">
      <div id="write" class="">
<!--        <h1 id="serendipity英雄联盟对局助手-使用介绍">-->
<!--          <span>Serendipity英雄联盟对局助手 使用介绍</span>-->
<!--        </h1>-->
        <p>
          <img
              src="http://qiniu.eiko.ren/serendipity.png"
              alt="img"
              style="zoom: 25%"
          />
        </p>
        <blockquote>
          <p>
            <strong><span>声明：</span></strong>
            <span
            >本工具不存在对游戏文件或内存信息进行修改的操作，不存在tp检测的问题。
            </span>
            <span>本工具所有功能均为合法调用拳头公布的</span
            ><strong
          ><a href="https://developer.riotgames.com/docs/lol"
          ><span>League Client Update API</span></a
          ></strong
          ><span>，完全遵守英雄联盟的用户使用协议。</span>
          </p>
          <p>
            <strong
            ><span
            >本软件承诺，永久免费，择期开源。开发不易，请多支持。</span
            ></strong
            >
          </p>
        </blockquote>
        <p>&nbsp;</p>
        <h2 id="介绍"><span>介绍</span></h2>
        <p>
          <span>和大多同类型软件一样，</span
          ><strong><span>Serendipity英雄联盟对局助手</span></strong
        ><span>的主要功能是通过</span
        ><u><span>获取当前对局中所有玩家的历史对局数据</span></u
        ><span
        >（默认最近20把游戏对局，包括但不限于，胜负情况，kda，多杀记录以及分均经济情况），</span
        ><u
        ><span
        >对历史对局的数据进行算法分析，依照算法得出每个人的分值。</span
        ></u
        >
        </p>
        <p>
          <span
          >根据评分结果，得出每位玩家最近的大致游戏水平，玩家可以通过数据结果在游戏中做出针对性的判断结果。</span
          >
        </p>
        <p>
          <span
          >当然也包括其他附加功能，以下对应用中的各个功能进行详细说明。</span
          >
        </p>
        <p>&nbsp;</p>
        <h2 id="功能-1"><span>功能</span></h2>
        <blockquote>
          <p>
            <span
            >本程序目前主要划分为7个模块，分别为：首页，对局面板，战绩查询，发送设置，功能，黑名单以及帮助页面。</span
            >
          </p>
          <p>
            <strong
            ><span
            >需要注意的是，如开头声明所示，本程序是通过调用lcuapi进行开发，所以程序中基本上所有功能都需要在游戏客户端先启动的情况下才能正常运行。</span
            ></strong
            >
          </p>
        </blockquote>
        <p>&nbsp;</p>
        <h3 id="首页"><span>首页</span></h3>
        <p>
          <span>主要显示当前游戏客户端所登入账号的</span><code>基本信息</code
        ><span
        >，包括头像，游戏名，排位情况，当前游戏状态等。如果未登入游戏客户端，则会提示先登入游戏。</span
        >
        </p>
        <ul>
          <li>
            <p>
              <span> 当进行英雄选择阶段时，应用会自动跳转到</span
              ><code>对局面板</code><span>，展示当前队友的计算信息。 </span>
            </p>
          </li>
          <li>
            <p>
              <span>
                当游戏开始时，应用会重新计算当前对局所有人的信息，一般在游戏开始之后5秒内即可看到结果。
              </span>
            </p>
          </li>
          <li>
            <p>
              <span
              >在英雄选择界面时，在聊天框中可以看到关于队友的数据计算结果。</span
              >
            </p>
            <ul>
              <li>
                <span> 通过按下快捷键</span><code>PageUp</code
              ><span>可以在聊天框中发送结果给大家，或是在应用中查看。 </span>
              </li>
            </ul>
          </li>
          <li>
            <p><span>在游戏开始时，可以得到对局中所有玩家的计算结果。</span></p>
            <ul>
              <li>
                <span>
                  当结果计算完成时，应用会自动跳转到对局面板界面，即可切出查看
                </span>
              </li>
              <li>
                <span> 通过按下快捷键</span><code>PageUp</code
              ><span>可以在聊天框中发送</span
              ><strong><span>友方</span></strong
              ><span>的结果 </span>
              </li>
              <li>
                <span> 通过按下快捷键</span><code>PageDown</code
              ><span>可以在聊天框中发送</span
              ><strong><span>敌方</span></strong
              ><span>的结果 </span>
              </li>
            </ul>
          </li>
        </ul>
        <p>&nbsp;</p>
        <p>
          <img
              src="http://qiniu.lol-tool.com/imgs/start_notice.png"
              referrerpolicy="no-referrer"
          />
        </p>
        <p>
          <img
              src="http://qiniu.lol-tool.com/imgs/home.png"
              referrerpolicy="no-referrer"
          />
        </p>
        <p>&nbsp;</p>
        <h3 id="对局面板"><span>对局面板</span></h3>
        <p>
          <span
          >对局面板模块主要显示当前对局中玩家的信息情况，是本程序的主要内容。显示的内容为，称号、评分、游戏名、kd信息、历史对局其中称号可以在</span
          ><code>发送设置</code
        ><span
        >中进行修改。历史对局中，着重色字体显示的是胜场，白色为负场。</span
        >
        </p>
        <p>
          <span>该模块在</span><code>选择英雄阶段</code
        ><span>显示当前队友的信息，在</span><code>游戏中</code
        ><span>可以看到所有玩家的信息。</span>
        </p>
        <p>
          <span
          >当对局面板有显示内容时，即可通过快捷键在聊天框中发送当前对局内容。</span
          >
        <p>&nbsp;</p>
          <img
              src="http://qiniu.lol-tool.com/imgs/game_panel_in_progress.png"
              referrerpolicy="no-referrer"
          />
        </p>
        <p>
          <img
              src="http://qiniu.lol-tool.com/imgs/game_panel_select_champion.png"
              referrerpolicy="no-referrer"
          />
        </p>
        <p>&nbsp;</p>
        <h3 id="战绩查询"><span>战绩查询</span></h3>
        <p>
          <span
          >由于WeGame客户端近期推出的隐私功能，导致大多玩家对自己的账号设置了不可搜索的权限，但是抵不住大多玩家好奇的心理，所以程序中附带了战绩搜索的功能。该模块通过客户端搜索可以获取最近20把的战绩情况，无视WeGame的权限设置。</span
          >
        </p>
        <p>
          <span>为了方便搜索，可以在</span><code>对局面板</code
        ><span>模块中通过</span><strong><span>点击游戏名</span></strong
        ><span
        >快速搜索该玩家。当然在搜索结果中也可以通过同样的方式进行操作。</span
        >
        <p>&nbsp;</p>
          <img
              src="http://qiniu.lol-tool.com/imgs/history.png"
              referrerpolicy="no-referrer"
          />
        </p>
        <h3 id="发送设置"><span>发送设置</span></h3>
        <p>
          <span>发送设置中目前主要设置的是在</span><code>对局面板</code
        ><span>中以及快捷键发送显示的称号，</span>
          <img
              src="http://qiniu.lol-tool.com/imgs/send_setting.png"
              referrerpolicy="no-referrer"
          />
        </p>
        <h3 id="功能-2"><span>功能</span></h3>
        <p><span>当前功能模块包含以下内容。</span></p>
        <ul>
          <li><span>自动接受对局 （建议开启，十分好用！）</span></li>
          <li><span>自动禁用英雄</span></li>
          <li><span>自动选择英雄</span></li>
          <li><span>更改游戏段位（好友可见）</span></li>
          <li><span>更改游戏状态（在线，离线，离开，手机在线）</span></li>
          <li><span>一键创建5V5训练模式</span></li>
          <li>
            <span>通过游戏名一件观战玩家（可非好友，需要正在游戏中）</span>
            <p>&nbsp;</p>
            <img
                src="http://qiniu.lol-tool.com/imgs/func.png"
                referrerpolicy="no-referrer"
            />
          </li>
        </ul>
        <h3 id="黑名单"><span>黑名单</span></h3>
        <blockquote>
          <p>
            <span>该模块类似于早年</span
            ><a
              href="https://baike.baidu.com/item/%E9%BB%91%E5%BA%97%E7%99%BE%E5%9C%B0/23638171?fr=aladdin"
          ><span>黑店百地</span></a
          ><span>的</span><strong><span>死亡笔记</span></strong
          ><span>。可以记录历史对局中遇到的消极玩家。</span>
          </p>
        </blockquote>
        <p>
          <span>可以通过</span><code>对局面板</code
        ><span
        >中点击英雄头像的方式，将该玩家添加到黑名单，或者是在黑名单模块中，通过输入游戏名的方式添加黑名单。</span
        >
        </p>
        <p>
          <span
          >当再次遇到黑名单中的玩家为队友时，会在聊天界面发送消息进行提示。</span
          >
        </p>
        <p>
          <span
          >发送的提示可以选择仅自己可见（黄色字体），或队友可见（白色字体）。</span
          >
        <p>&nbsp;</p>
          <img
              src="http://qiniu.lol-tool.com/imgs/black_list.png"
              referrerpolicy="no-referrer"
          />
        </p>
        <p>
          <img
              src="http://qiniu.lol-tool.com/imgs/go_black.png"
              referrerpolicy="no-referrer"
          />
        </p>
        <p>
          <img
              src="http://qiniu.lol-tool.com/imgs/black_notice.png"
              referrerpolicy="no-referrer"
          />
        </p>
        <h3 id="帮助"><span>帮助</span></h3>
        <p>
          <span
          >跳转至官网，在官网可以找到当前版本常见问题以及解答。在最下方可以通过留言反馈的方式告知开发者。</span
          >
        </p>
        <p>&nbsp;</p>
        <h2 id="终"><span>终</span></h2>
        <p>
          <span
          >以上为Serendipity英雄联盟对局助手的介绍内容，如有疑问可以通过官网的联系方式与我联系。</span
          >
        </p>
        <p>
          <span>免费开发维护不易，如果喜欢，请和朋友一起推广，支持作者。</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { logoUrl } from "../config/index";
import { onMounted } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(()=>{
  // console.log(router.query);
  // console.log(document.getElementById("sourceRules").scrollIntoView())
})

</script>

<style scoped>
.feat-container {
  height: 100%;
  width: 100%;
}
a:active,
a:hover {
  outline: 0px;
}
.in-text-selection,
::selection {
  background: rgb(181, 214, 252);
  text-shadow: none;
}
/*#write {*/
/*  margin: 0px auto;*/
/*  height: auto;*/
/*  width: inherit;*/
/*  word-break: normal;*/
/*  word-wrap: break-word;*/
/*  position: relative;*/
/*  padding-bottom: 70px;*/
/*  white-space: pre-wrap;*/
/*  overflow-x: visible;*/
/*}*/
.for-image #write {
  padding-left: 8px;
  padding-right: 8px;
}
body.typora-export {
  padding-left: 30px;
  padding-right: 30px;
}
@media screen and (max-width: 500px) {
  body.typora-export {
    padding-left: 0px;
    padding-right: 0px;
  }
  .CodeMirror-sizer {
    margin-left: 0px !important;
  }
  .CodeMirror-gutters {
    display: none !important;
  }
}
.typora-export #write {
  margin: 0px auto;
}
#write > p:first-child,
#write > ul:first-child,
#write > ol:first-child,
#write > pre:first-child,
#write > blockquote:first-child,
#write > div:first-child,
#write > table:first-child {
  margin-top: 30px;
}
#write li > table:first-child {
  margin-top: -20px;
}
img {
  max-width: 100%;
  vertical-align: middle;
}
input,
button,
select,
textarea {
  color: inherit;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
}
input[type="checkbox"],
input[type="radio"] {
  line-height: normal;
  padding: 0px;
}
::before,
::after,
* {
  box-sizing: border-box;
}
#write p,
#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6,
#write div,
#write pre {
  width: inherit;
}
#write p,
#write h1,
#write h2,
#write h3,
#write h4,
#write h5,
#write h6 {
  position: relative;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.8rem;
}
h3 {
  font-size: 1.6rem;
}
h4 {
  font-size: 1.4rem;
}
h5 {
  font-size: 1.2rem;
}
h6 {
  font-size: 1rem;
}
p {
  -webkit-margin-before: 1rem;
  -webkit-margin-after: 1rem;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}
.typora-export p {
  white-space: normal;
}
.mathjax-block {
  margin-top: 0px;
  margin-bottom: 0px;
  -webkit-margin-before: 0rem;
  -webkit-margin-after: 0rem;
}
.hidden {
  display: none;
}
.md-blockmeta {
  color: rgb(204, 204, 204);
  font-weight: bold;
  font-style: italic;
}
a {
  cursor: pointer;
}
sup.md-footnote {
  padding: 2px 4px;
  background-color: rgba(238, 238, 238, 0.7);
  color: rgb(85, 85, 85);
  border-radius: 4px;
}
#write input[type="checkbox"] {
  cursor: pointer;
  width: inherit;
  height: inherit;
  margin: 4px 0px 0px;
}
figure {
  max-width: 100%;
  overflow-x: auto;
  margin: 0px;
}
tr {
  break-inside: avoid;
  break-after: auto;
}
thead {
  display: table-header-group;
}
table {
  border-collapse: collapse;
  border-spacing: 0px;
  width: 100%;
  overflow: auto;
  break-inside: auto;
  text-align: left;
}
table.md-table td {
  min-width: 80px;
}
.CodeMirror-gutters {
  border-right: 0px;
  background-color: inherit;
}
.CodeMirror {
  text-align: left;
}
.CodeMirror-placeholder {
  opacity: 0.3;
}
.CodeMirror pre {
  padding: 0px 4px;
}
.CodeMirror-lines {
  padding: 0px;
}
div.hr:focus {
  cursor: none;
}
pre {
  white-space: pre-wrap;
}
.CodeMirror-gutters {
  margin-right: 4px;
}
.md-fences {
  font-size: 0.9rem;
  display: block;
  break-inside: avoid;
  text-align: left;
  overflow: visible;
  white-space: pre;
  background: var(--code-block-bg-color);
  position: relative !important;
}
.md-diagram-panel {
  width: 100%;
  margin-top: 10px;
  text-align: center;
  padding-top: 0px;
  padding-bottom: 8px;
  overflow-x: auto;
}
.md-fences .CodeMirror.CodeMirror-wrap {
  top: -1.6em;
  margin-bottom: -1.6em;
}
.md-fences.mock-cm {
  white-space: pre-wrap;
}
.show-fences-line-number .md-fences {
  padding-left: 0px;
}
.show-fences-line-number .md-fences.mock-cm {
  padding-left: 40px;
}
.CodeMirror-line {
  break-inside: avoid;
}
.footnotes {
  opacity: 0.8;
  font-size: 0.9rem;
  padding-top: 1em;
  padding-bottom: 1em;
}
.footnotes + .footnotes {
  margin-top: -1em;
}
.md-reset {
  margin: 0px;
  padding: 0px;
  border: 0px;
  outline: 0px;
  vertical-align: top;
  background: transparent;
  text-decoration: none;
  text-shadow: none;
  float: none;
  position: static;
  width: auto;
  height: auto;
  white-space: nowrap;
  cursor: inherit;
  -webkit-tap-highlight-color: transparent;
  line-height: normal;
  font-weight: normal;
  text-align: left;
  box-sizing: content-box;
  direction: ltr;
}
li div {
  padding-top: 0px;
}
blockquote {
  margin: 1rem 0px;
}
li p,
li .mathjax-block {
  margin: 0.5rem 0px;
}
li {
  margin: 0px;
  position: relative;
}
blockquote > :last-child {
  margin-bottom: 0px;
}
blockquote > :first-child {
  margin-top: 0px;
}
.footnotes-area {
  color: rgb(136, 136, 136);
  margin-top: 0.714rem;
  padding-bottom: 0.143rem;
}
@media print {
  html,
  body {
    border: 1px solid transparent;
    height: 99%;
    break-after: avoid;
    break-before: avoid;
  }
  .typora-export * {
    -webkit-print-color-adjust: exact;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    break-after: avoid-page;
    orphans: 2;
  }
  p {
    orphans: 4;
  }
  html.blink-to-pdf {
    font-size: 13px;
  }
  .typora-export #write {
    padding-left: 1cm;
    padding-right: 1cm;
    padding-bottom: 0px;
    break-after: avoid;
  }
  .typora-export #write::after {
    height: 0px;
  }
  @page {
    margin: 20mm 0mm;
  }
}
.footnote-line {
  margin-top: 0.714em;
  font-size: 0.7em;
}
a img,
img a {
  cursor: pointer;
}
pre.md-meta-block {
  font-size: 0.8rem;
  min-height: 2.86rem;
  white-space: pre-wrap;
  background: rgb(204, 204, 204);
  display: block;
  overflow-x: hidden;
}
p > img:only-child {
  display: block;
  margin: auto;
}
p .md-image:only-child {
  display: inline-block;
  width: 100%;
  text-align: center;
}
#write .MathJax_Display {
  margin: 0.8em 0px 0px;
}
.mathjax-block {
  white-space: pre;
  overflow: hidden;
  width: 100%;
}
p + .mathjax-block {
  margin-top: -1.143rem;
}
.mathjax-block:not(:empty)::after {
  display: none;
}
[contenteditable="true"]:active,
[contenteditable="true"]:focus {
  outline: none;
  box-shadow: none;
}
.task-list {
  list-style-type: none;
}
.task-list-item {
  position: relative;
  padding-left: 1em;
}
.task-list-item input {
  position: absolute;
  top: 0px;
  left: 0px;
}
.math {
  font-size: 1rem;
}
.md-toc {
  min-height: 3.58rem;
  position: relative;
  font-size: 0.9rem;
  border-radius: 10px;
}
.md-toc-content {
  position: relative;
  margin-left: 0px;
}
.md-toc::after,
.md-toc-content::after {
  display: none;
}
.md-toc-item {
  display: block;
  color: rgb(65, 131, 196);
}
.md-toc-item a {
  text-decoration: none;
}
.md-toc-inner:hover {
}
.md-toc-inner {
  display: inline-block;
  cursor: pointer;
}
.md-toc-h1 .md-toc-inner {
  margin-left: 0px;
  font-weight: bold;
}
.md-toc-h2 .md-toc-inner {
  margin-left: 2em;
}
.md-toc-h3 .md-toc-inner {
  margin-left: 4em;
}
.md-toc-h4 .md-toc-inner {
  margin-left: 6em;
}
.md-toc-h5 .md-toc-inner {
  margin-left: 8em;
}
.md-toc-h6 .md-toc-inner {
  margin-left: 10em;
}
@media screen and (max-width: 48em) {
  .md-toc-h3 .md-toc-inner {
    margin-left: 3.5em;
  }
  .md-toc-h4 .md-toc-inner {
    margin-left: 5em;
  }
  .md-toc-h5 .md-toc-inner {
    margin-left: 6.5em;
  }
  .md-toc-h6 .md-toc-inner {
    margin-left: 8em;
  }
}
a.md-toc-inner {
  font-size: inherit;
  font-style: inherit;
  font-weight: inherit;
  line-height: inherit;
}
.footnote-line a:not(.reversefootnote) {
  color: inherit;
}
.md-attr {
  display: none;
}
.md-fn-count::after {
  content: ".";
}
.md-tag {
  opacity: 0.5;
}
.md-comment {
  color: rgb(162, 127, 3);
  opacity: 0.8;
  font-family: monospace;
}
code {
  text-align: left;
}
h1 .md-tag,
h2 .md-tag,
h3 .md-tag,
h4 .md-tag,
h5 .md-tag,
h6 .md-tag {
  font-weight: initial;
  opacity: 0.35;
}
a.md-print-anchor {
  border-width: initial !important;
  border-style: none !important;
  border-color: initial !important;
  display: inline-block !important;
  position: absolute !important;
  width: 1px !important;
  right: 0px !important;
  outline: none !important;
  background: transparent !important;
  text-decoration: initial !important;
  text-shadow: initial !important;
}
.md-inline-math .MathJax_SVG .noError {
  display: none !important;
}
.mathjax-block .MathJax_SVG_Display {
  text-align: center;
  margin: 1em 0em;
  position: relative;
  text-indent: 0px;
  max-width: none;
  max-height: none;
  min-height: 0px;
  min-width: 100%;
  width: auto;
  display: block !important;
}
.MathJax_SVG_Display,
.md-inline-math .MathJax_SVG_Display {
  width: auto;
  margin: inherit;
  display: inline-block !important;
}
.MathJax_SVG .MJX-monospace {
  font-family: monospace;
}
.MathJax_SVG .MJX-sans-serif {
  font-family: sans-serif;
}
.MathJax_SVG {
  display: inline;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  zoom: 90%;
  text-indent: 0px;
  text-align: left;
  text-transform: none;
  letter-spacing: normal;
  word-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  float: none;
  direction: ltr;
  max-width: none;
  max-height: none;
  min-width: 0px;
  min-height: 0px;
  border: 0px;
  padding: 0px;
  margin: 0px;
}
.MathJax_SVG * {
  transition: none;
}
.md-diagram-panel > svg {
  max-width: 100%;
}
[lang="flow"] svg,
[lang="mermaid"] svg {
  max-width: 100%;
}

:root {
  --side-bar-bg-color: #fafafa;
  --control-text-color: #777;
}
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  src: local("Open Sans Regular"), url("./github/400.woff") format("woff");
}
@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: normal;
  src: local("Open Sans Italic"), url("./github/400i.woff") format("woff");
}
@font-face {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;
  src: local("Open Sans Bold"), url("./github/700.woff") format("woff");
}
@font-face {
  font-family: "Open Sans";
  font-style: italic;
  font-weight: bold;
  src: local("Open Sans Bold Italic"), url("./github/700i.woff") format("woff");
}
html {
  font-size: 16px;
}
body {
  font-family: "Open Sans", "Clear Sans", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  color: rgb(51, 51, 51);
  line-height: 1.6;
}
#write {
  max-width: 960px;
  margin: 0px auto;
  padding: 20px 30px 100px;
}
#write > ul:first-child,
#write > ol:first-child {
  margin-top: 30px;
}
body > :first-child {
  margin-top: 0px !important;
}
body > :last-child {
  margin-bottom: 0px !important;
}
a {
  color: rgb(65, 131, 196);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.4;
  cursor: text;
}
h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor {
  text-decoration: none;
}
h1 tt,
h1 code {
  font-size: inherit;
}
h2 tt,
h2 code {
  font-size: inherit;
}
h3 tt,
h3 code {
  font-size: inherit;
}
h4 tt,
h4 code {
  font-size: inherit;
}
h5 tt,
h5 code {
  font-size: inherit;
}
h6 tt,
h6 code {
  font-size: inherit;
}
h1 {
  padding-bottom: 0.3em;
  font-size: 2.25em;
  line-height: 1.2;
  border-bottom: 1px solid rgb(238, 238, 238);
}
h2 {
  padding-bottom: 0.3em;
  font-size: 1.75em;
  line-height: 1.225;
  border-bottom: 1px solid rgb(238, 238, 238);
}
h3 {
  font-size: 1.5em;
  line-height: 1.43;
}
h4 {
  font-size: 1.25em;
}
h5 {
  font-size: 1em;
}
h6 {
  font-size: 1em;
  color: rgb(119, 119, 119);
}
p,
blockquote,
ul,
ol,
dl,
table {
  margin: 0.8em 0px;
}
li > ol,
li > ul {
  margin: 0px;
}
hr {
  height: 4px;
  padding: 0px;
  margin: 16px 0px;
  background-color: rgb(231, 231, 231);
  border-width: 0px 0px 1px;
  border-style: none none solid;
  border-top-color: initial;
  border-right-color: initial;
  border-left-color: initial;
  border-image: initial;
  overflow: hidden;
  box-sizing: content-box;
  border-bottom-color: rgb(221, 221, 221);
}
body > h2:first-child {
  margin-top: 0px;
  padding-top: 0px;
}
body > h1:first-child {
  margin-top: 0px;
  padding-top: 0px;
}
body > h1:first-child + h2 {
  margin-top: 0px;
  padding-top: 0px;
}
body > h3:first-child,
body > h4:first-child,
body > h5:first-child,
body > h6:first-child {
  margin-top: 0px;
  padding-top: 0px;
}
a:first-child h1,
a:first-child h2,
a:first-child h3,
a:first-child h4,
a:first-child h5,
a:first-child h6 {
  margin-top: 0px;
  padding-top: 0px;
}
h1 p,
h2 p,
h3 p,
h4 p,
h5 p,
h6 p {
  margin-top: 0px;
}
li p.first {
  display: inline-block;
}
ul,
ol {
  padding-left: 30px;
}
ul:first-child,
ol:first-child {
  margin-top: 0px;
}
ul:last-child,
ol:last-child {
  margin-bottom: 0px;
}
blockquote {
  border-left: 4px solid rgb(221, 221, 221);
  padding: 0px 15px;
  color: rgb(119, 119, 119);
}
blockquote blockquote {
  padding-right: 0px;
}
table {
  padding: 0px;
  word-break: initial;
}
table tr {
  border-top: 1px solid rgb(204, 204, 204);
  margin: 0px;
  padding: 0px;
}
table tr:nth-child(2n) {
  background-color: rgb(248, 248, 248);
}
table tr th {
  font-weight: bold;
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  margin: 0px;
  padding: 6px 13px;
}
table tr td {
  border: 1px solid rgb(204, 204, 204);
  text-align: left;
  margin: 0px;
  padding: 6px 13px;
}
table tr th:first-child,
table tr td:first-child {
  margin-top: 0px;
}
table tr th:last-child,
table tr td:last-child {
  margin-bottom: 0px;
}
.CodeMirror-gutters {
  border-right: 1px solid rgb(221, 221, 221);
}
.md-fences,
code,
tt {
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(248, 248, 248);
  border-radius: 3px;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
  padding: 2px 4px 0px;
  font-size: 0.9em;
}
.md-fences {
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 8px 1em 6px;
}
.task-list {
  padding-left: 0px;
}
.task-list-item {
  padding-left: 32px;
}
.task-list-item input {
  top: 3px;
  left: 8px;
}
@media screen and (min-width: 914px) {
}
@media print {
  html {
    font-size: 13px;
  }
  table,
  pre {
    break-inside: avoid;
  }
  pre {
    word-wrap: break-word;
  }
}
.md-fences {
  background-color: rgb(248, 248, 248);
}
#write pre.md-meta-block {
  padding: 1rem;
  font-size: 85%;
  line-height: 1.45;
  background-color: rgb(247, 247, 247);
  border: 0px;
  border-radius: 3px;
  color: rgb(119, 119, 119);
  margin-top: 0px !important;
}
.mathjax-block > .code-tooltip {
  bottom: 0.375rem;
}
#write > h3.md-focus::before {
  left: -1.5625rem;
  top: 0.375rem;
}
#write > h4.md-focus::before {
  left: -1.5625rem;
  top: 0.285714rem;
}
#write > h5.md-focus::before {
  left: -1.5625rem;
  top: 0.285714rem;
}
#write > h6.md-focus::before {
  left: -1.5625rem;
  top: 0.285714rem;
}
.md-image > .md-meta {
  border: 1px solid rgb(221, 221, 221);
  border-radius: 3px;
  font-family: Consolas, "Liberation Mono", Courier, monospace;
  padding: 2px 4px 0px;
  font-size: 0.9em;
  color: inherit;
}
.md-tag {
  color: inherit;
}
.md-toc {
  margin-top: 20px;
  padding-bottom: 20px;
}
.sidebar-tabs {
  border-bottom: none;
}
#typora-quick-open {
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(248, 248, 248);
}
#typora-quick-open-item {
  background-color: rgb(250, 250, 250);
  border-color: rgb(254, 254, 254) rgb(229, 229, 229) rgb(229, 229, 229)
    rgb(238, 238, 238);
  border-style: solid;
  border-width: 1px;
}
#md-notification::before {
  top: 10px;
}
.on-focus-mode blockquote {
  border-left-color: rgba(85, 85, 85, 0.12);
}
header,
.context-menu,
.megamenu-content,
footer {
  font-family: "Segoe UI", Arial, sans-serif;
}
.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state {
  visibility: visible;
}
.mac-seamless-mode #typora-sidebar {
  background-color: var(--side-bar-bg-color);
}
.md-lang {
  color: rgb(180, 101, 77);
}
</style>
