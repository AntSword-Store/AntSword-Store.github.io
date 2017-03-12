!function(e){function t(n){if(a[n])return a[n].exports;var o=a[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=a(3),l=n(o);localStorage.getItem("storeLanguage")||localStorage.setItem("storeLanguage","zh"===localStorage.getItem("language")?"zh":"en"),a(2),document.title=LANGUAGE.title,ReactDOM.render(React.createElement(l["default"],null),document.querySelector("#container"))},function(e,t){(function(e){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=e.require("electron").remote.shell,r=function(e){function t(){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return React.createElement("div",{className:"ui "+(this.props.color||"")+" stacked segment card"},React.createElement("div",{className:"content"},React.createElement("div",{className:"header"},this.props.github?React.createElement("div",null,React.createElement("i",{className:"right floated github alternate link icon","data-content":"项目源码",onClick:this.openRepo.bind(this),"data-variation":"mini"}),React.createElement("i",{className:"right floated comment alternate link icon","data-content":"反馈建议",onClick:this.openIssue.bind(this),"data-variation":"mini"})):"",this.props.title),React.createElement("div",{className:"meta"},React.createElement("span",{className:"right floated time"},this.props.update),React.createElement("span",{className:"category"},"@",this.props.author)),React.createElement("div",{className:"description"},this.props.description),React.createElement("div",{className:"ui tag labels mini right floated"},(this.props.scripts||[]).map(function(e){return React.createElement("a",{className:"ui label"},e.toUpperCase())}))),this.props.children)}},{key:"openRepo",value:function(){i.openExternal("https://github.com/"+this.props.github)}},{key:"openIssue",value:function(){i.openExternal("https://github.com/"+this.props.github+"/issues")}}]),t}(React.Component);t["default"]=r}).call(t,function(){return this}())},function(e,t){"use strict";var a={EN:{title:"PlugStore",remote:{title:"Remote Repository",loadTitle:"Wait",loadMessage:"Loading remote repository data..",warnTitle:"Warning",warnMessage:"No remote repository plug-in data!",install:"Install",install_download_msg:"Downloading..",install_progress:"Progress: ",install_msg:"Installing..",install_ok:"Success!",install_no:"Failed!"},local:{title:"Local Repository",loadTitle:"Wait",loadMessage:"Loading local repository data..",warnTitle:"Warning",warnMessage:"No local repository plug-in data!",uninstall:"UnInstall",uninstallIngMsg:"UnInstalling..",uninstallSuccessMsg:"Success!",uninstallFailMsg:"Failed!"},developer:{title:"Developer Repository",loadTitle:"Wait",loadMessage:"Loading developer repository data..",warnTitle:"Warning",warnMessage:"No developer repository plug-in data!",uninstall:"UnInstall",uninstallIngMsg:"UnInstalling..",uninstallSuccessMsg:"Success!",uninstallFailMsg:"Failed!"},setting:{title:"Settings",language:"Display Language",devmode:"Developer Mode",plugPath:"Plugin directory",autoUpdate:"Automatic Updates Plug",save:"Save",message:"Saved! Next time you start to take effect!"}},ZH:{title:"插件中心",remote:{title:"远程仓库",loadTitle:"稍候",loadMessage:"正在获取远程仓库数据。。",warnTitle:"提示",warnMessage:"远程仓库中暂无未安装插件！",install:"安装",install_download_msg:"下载中。。",install_progress:"下载进度：",install_msg:"下载成功！安装中。。",install_ok:"安装成功！",install_no:"安装失败！"},local:{title:"本地仓库",loadTitle:"稍候",loadMessage:"正在加载本地仓库数据。。",warnTitle:"提示",warnMessage:"本地仓库中暂无插件数据！",uninstall:"卸载",uninstallIngMsg:"卸载中。。",uninstallSuccessMsg:"卸载成功！",uninstallFailMsg:"卸载失败："},developer:{title:"开发仓库",loadTitle:"稍候",loadMessage:"正在加载开发仓库数据。。",warnTitle:"提示",warnMessage:"开发仓库中暂无插件数据！",uninstall:"卸载",uninstallIngMsg:"卸载中。。",uninstallSuccessMsg:"卸载成功！",uninstallFailMsg:"卸载失败："},setting:{title:"设置中心",language:"显示语言",devmode:"开发者模式",plugPath:"插件目录",autoUpdate:"自动更新插件",save:"保存",message:"保存设置成功！下次启动生效！"}}};window.LANGUAGE=a["zh"===(localStorage.getItem("storeLanguage")||localStorage.getItem("language"))?"ZH":"EN"]},function(e,t,a){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(5),u=a(8),d=n(u),m=e.require("fs"),p=e.require("path"),f=e.require("process"),g="1"===localStorage.getItem("isDev"),h=localStorage.getItem("dev-plugPath"),v=e.require("electron").ipcRenderer,b=function(e){function t(){o(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.cache={remote:{},local:{}},e.state={local:null,remote:null,developer:null},e}return i(t,e),s(t,[{key:"render",value:function(){var e=this,t=function(e,t){return React.createElement("div",{className:"ui small icon message",style:{width:"50%",margin:"15px auto"}},React.createElement("i",{className:"spinner circle loading icon"}),React.createElement("div",{className:"content"},React.createElement("div",{className:"header"},e," "),React.createElement("p",null,t)))},a=[];if(null===this.state.local)a.push(t(LANGUAGE.local.loadTitle,LANGUAGE.local.loadMessage));else for(var n in this.state.local){var o=this.state.local[n];this.cache.local[o.name]=n,a.push(React.createElement(c.LocalPanel,r({},o,{_id:n,cancelConfirm:function(t){e.state.local[t].loading=e.state.local[t].confirm=!1,e.setState({local:e.state.local})},updateHandle:function(t){var a=e.state.local[t];a.confirm=!0,a.confirmIcon="refresh",a.onConfirm=function(){return function(){a.confirm=!1,a.loading=!0,a.loadingMsg="更新中..",e.setState({local:e.state.local})}}(a),e.setState({local:e.state.local})},uninstallHandle:function(t){var a=e.state.local[t];a.confirm=!0,a.confirmIcon="trash outline",a.onConfirm=function(){return function(){a.confirm=!1,a.loading=!0,a.loadingMsg=LANGUAGE.local.uninstallIngMsg,e.setState({local:e.state.local}),setTimeout(e.uninstallLocalRepoHandler.bind(e,t),500)}}(a),e.setState({local:e.state.local})}})))}var l=[];if(null===this.state.developer)l.push(t(LANGUAGE.developer.loadTitle,LANGUAGE.developer.loadMessage));else for(var i in this.state.developer){var s=this.state.developer[i];l.push(React.createElement(c.DeveloperPanel,r({},s,{_id:i,cancelConfirm:function(t){e.state.developer[t].loading=e.state.developer[t].confirm=!1,e.setState({developer:e.state.developer})},unInstallHandle:function(t){var a=e.state.developer[t];a.confirm=!0,a.confirmIcon="trash outline",a.onConfirm=function(){return function(){a.confirm=!1,a.loading=!0,a.loadingMsg=LANGUAGE.developer.uninstallIngMsg,e.setState({developer:e.state.developer}),setTimeout(e.uninstallDevRepoHandler.bind(e,t),500)}}(a),e.setState({developer:e.state.developer})}})))}var u=[];if(null===this.state.remote)u.push(t(LANGUAGE.remote.loadTitle,LANGUAGE.remote.loadMessage));else for(var m in this.state.remote){var p=this.state.remote[m];this.cache.remote[p.name]=m,u.push(React.createElement(c.RemotePanel,r({},p,{_id:m,"super":this})))}var f=function(e,t){return React.createElement("div",{className:"ui small icon message",style:{width:"50%",margin:"15px auto"}},React.createElement("i",{className:"warning sign icon"}),React.createElement("div",{className:"content"},React.createElement("div",{className:"header"},e),React.createElement("p",null,t)))};return 0===u.length&&u.push(f(LANGUAGE.remote.warnTitle,LANGUAGE.remote.warnMessage)),0===a.length&&a.push(f(LANGUAGE.local.warnTitle,LANGUAGE.local.warnMessage)),0===l.length&&l.push(f(LANGUAGE.developer.warnTitle,LANGUAGE.developer.warnMessage)),React.createElement("div",null,React.createElement("h2",{className:"ui center aligned icon header",style:{paddingTop:"15px"},onContextMenu:location.reload.bind(location)},React.createElement("i",{className:"circular shop icon"})," ",LANGUAGE.title),React.createElement("div",{className:"ui pointing secondary menu"},React.createElement("a",{className:"item active","data-tab":"remote"},React.createElement("i",{className:"cloud download icon"}),LANGUAGE.remote.title,React.createElement("div",{className:"floating ui mini grey label"},(this.state.remote||[]).length)),React.createElement("a",{className:"item","data-tab":"local"},React.createElement("i",{className:"puzzle icon"}),LANGUAGE.local.title,React.createElement("div",{className:"floating ui mini grey label"},(this.state.local||[]).length)),g?React.createElement("a",{className:"item","data-tab":"developer"},React.createElement("i",{className:"code icon"}),LANGUAGE.developer.title,React.createElement("div",{className:"floating ui mini grey label"},(this.state.developer||[]).length)):"",React.createElement("a",{className:"item","data-tab":"setting"},React.createElement("i",{className:"setting icon"})," ",LANGUAGE.setting.title)),React.createElement("div",{className:"ui tab active puzzContent","data-tab":"remote"},React.createElement(c.Panel,null,[].concat(u))),React.createElement("div",{className:"ui tab puzzContent","data-tab":"local"},React.createElement(c.Panel,null,[].concat(a))),React.createElement("div",{className:"ui tab puzzContent","data-tab":"developer"},React.createElement(c.Panel,null,[].concat(l))),React.createElement("div",{className:"ui tab puzzContent","data-tab":"setting"},React.createElement(d["default"],null)))}},{key:"componentDidUpdate",value:function(){$(".right.link.icon").popup()}},{key:"componentDidMount",value:function(){var e=this;$(".menu .item").tab(),this.reloadLocalRepos(),this.reloadRemoteRepos(),g&&this.reloadDevRepos(),v.on("store-download-progress",function(t,a){var n=e.cache.remote[a.file];if(n){var o=e.state.remote;switch(a.type){case"init":break;case"downloading":o[n].loadingMsg=LANGUAGE.remote.install_progress+a.size;break;case"downloaded":"completed"===a.state?o[n].loadingMsg=LANGUAGE.remote.install_msg:o[n].loadingMsg=LANGUAGE.remote.install_no+a.state;break;case"installed":o[n].loadingMsg=LANGUAGE.remote.install_ok,function(t){setTimeout(function(){o.splice(t,1),e.reloadLocalRepos(),e.setState({remote:o})},500)}(n)}o[n].loading=!0,e.setState({remote:o})}})}},{key:"fetchRemotePlugInfos",value:function(){for(var e=this,t=this.state.remote,a=0;a<t.length;a++)!function(a){fetch("https://raw.githubusercontent.com/"+t[a].github+"/master/package.json").then(function(e){return e.json()}).then(function(n){t[a].description=n.description,t[a].name=n.name,t[a].title=n.name,t[a].author=(n.author||{}).name||"AntSword-Store",t[a].scripts=n.scripts||[],t[a].loading=!1,e.setState({remote:t})})}(a)}},{key:"downRemotePlugHandler",value:function(e){var t=this.state.remote;t[e].loading=!0,t[e].loadingMsg=LANGUAGE.remote.install_download_msg,this.setState({remote:t});var a=document.createElement("iframe");a.style.display="none",a.src="https://github.com/"+t[e].github+"/archive/master.zip",document.body.appendChild(a)}},{key:"reloadLocalRepos",value:function(){var e=[],t=p.join(f.env.AS_WORKDIR,"antData","plugins");m.readdirSync(t).map(function(a){var n=p.join(t,a),o=p.join(n,"package.json");if(m.lstatSync(n).isDirectory()&&m.existsSync(o)){var l=JSON.parse(m.readFileSync(o));e.push({name:a.replace(/\-master$/,""),title:l.name,author:(l.author||{}).name||"AntSword-Store",github:"AntSword-Store/"+a.replace(/\-master$/,""),scripts:l.scripts||[],description:l.description,loading:!1,loadingMsg:"Loading..",confirm:!1,confirmIcon:""})}}),this.setState({local:e})}},{key:"reloadDevRepos",value:function(){var e=[],t=h;m.readdirSync(t).map(function(a){var n=p.join(t,a),o=p.join(n,"package.json");if(m.lstatSync(n).isDirectory()&&m.existsSync(o)){var l=JSON.parse(m.readFileSync(o));e.push({name:a,title:l.name,author:(l.author||{}).name||"AntSword-Store",scripts:l.scripts||[],description:l.description,loading:!1,loadingMsg:"Loading..",confirm:!1,confirmIcon:""})}}),this.setState({developer:e})}},{key:"uninstallDevRepoHandler",value:function(e){var t=this,a=this.state.developer,n=v.sendSync("store-uninstall-dev",p.join(h,a[e].name));n===!0?(a[e].loadingMsg=LANGUAGE.developer.uninstallSuccessMsg,function(e){setTimeout(function(){a.splice(e,1),t.setState({developer:a})},500)}(e)):a[e].loadingMsg=LANGUAGE.developer.uninstallFailMsg+n,this.setState({developer:a})}},{key:"reloadRemoteRepos",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];t&&(this.state.remote=[],this.cache.remote={}),fetch("https://api.github.com/users/AntSword-Store/repos").then(function(e){return e.json()}).then(function(t){var a=e.state.remote||[];t.map(function(t){e.cache.local[t.name]||82443757===t.id||a.push({name:t.name,title:t.name,author:t.owner.login,github:t.full_name,update:t.updated_at.split("T")[0],scripts:[],description:t.description,loading:!0,loadingMsg:"Loading..",installHandle:e.downRemotePlugHandler.bind(e)})}),e.setState({remote:a}),e.fetchRemotePlugInfos()})}},{key:"uninstallLocalRepoHandler",value:function(e){var t=this,a=this.state.local;console.log(a);var n=v.sendSync("store-uninstall",a[e].name);n===!0?(a[e].loadingMsg=LANGUAGE.local.uninstallSuccessMsg,function(e){setTimeout(function(){delete t.cache.local[a[e].name],a.splice(e,1),t.setState({local:a}),t.reloadRemoteRepos(!0)},500)}(e)):a[e].loadingMsg=LANGUAGE.local.uninstallFailMsg+n,this.setState({local:a})}}]),t}(React.Component);t["default"]=b}).call(t,function(){return this}())},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(1),c=n(s),u=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),r(t,[{key:"render",value:function(){var e=this;return React.createElement(c["default"],this.props,React.createElement("div",{className:"ui buttons bottom attached"},React.createElement("button",{className:"ui red basic animated fade button",onClick:function(){e.props.unInstallHandle(e.props._id)}},React.createElement("div",{className:"visible content"},React.createElement("i",{className:"trash icon"})),React.createElement("div",{className:"hidden content"},LANGUAGE.developer.uninstall))),this.props.loading?React.createElement("div",{className:"ui active inverted dimmer"},React.createElement("div",{className:"ui text loader"},this.props.loadingMsg)):"",this.props.confirm&&!this.props.loading?React.createElement("div",{className:"ui active inverted dimmer"},React.createElement("div",{className:"content"},React.createElement("div",{className:"center"},React.createElement("h1",{className:"ui  header"},React.createElement("i",{className:(this.props.confirmIcon||"help circle")+" icon"})),React.createElement("button",{className:"circular ui red icon button",onClick:this.props.onConfirm.bind(this,this.props._id)},React.createElement("i",{className:"check outline icon"})),React.createElement("button",{className:"circular ui green icon button",onClick:this.props.cancelConfirm.bind(this,this.props._id)},React.createElement("i",{className:"remove outline icon"}))))):"")}}]),t}(React.Component);t["default"]=u},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Panel=t.DeveloperPanel=t.LocalPanel=t.RemotePanel=void 0;var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(6),c=n(s),u=a(7),d=n(u),m=a(4),p=n(m),f=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),r(t,[{key:"render",value:function(){return React.createElement("div",{className:"ui cards"},this.props.children)}}]),t}(React.Component);t.RemotePanel=d["default"],t.LocalPanel=c["default"],t.DeveloperPanel=p["default"],t.Panel=f},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),l=n(o),i=React.createClass({displayName:"LocalPanel",getInitialState:function(){return{loading:!1,loadingMsg:"",confirm:!1,confirmIcon:"",onConfirm:null}},render:function(){return React.createElement(l["default"],this.props,React.createElement("div",{className:"ui buttons bottom attached"},React.createElement("button",{className:"ui red basic animated fade button",onClick:this.props.uninstallHandle.bind(this,this.props._id)},React.createElement("div",{className:"visible content"},React.createElement("i",{className:"trash outline icon"})),React.createElement("div",{className:"hidden content"},LANGUAGE.local.uninstall))),this.props.loading?React.createElement("div",{className:"ui active inverted dimmer"},React.createElement("div",{className:"ui text loader"},this.props.loadingMsg)):"",this.props.confirm&&!this.props.loading?React.createElement("div",{className:"ui active inverted dimmer"},React.createElement("div",{className:"content"},React.createElement("div",{className:"center"},React.createElement("h1",{className:"ui  header"},React.createElement("i",{className:(this.props.confirmIcon||"help circle")+" icon"})),React.createElement("button",{className:"circular ui red icon button",onClick:this.props.onConfirm.bind(this,this.props._id)},React.createElement("i",{className:"check outline icon"})),React.createElement("button",{className:"circular ui green icon button",onClick:this.props.cancelConfirm.bind(this,this.props._id)},React.createElement("i",{className:"remove outline icon"}))))):"")},updateHandle:function(){var e=this;this.setState({confirm:!0,confirmIcon:"refresh",onConfirm:function(){e.setState({confirm:!1,loading:!0,loadingMsg:"更新中.."})}})},uninstallHandle:function(){this.setState({confirm:!0,confirmIcon:"trash outline",onConfirm:this.props.removeHandle.bind(this,this,this.props._id)})}});t["default"]=i},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(1),l=n(o),i=React.createClass({displayName:"RemotePanel",getInitialState:function(){return{installing:!1,installProgress:"0",installMessage:"Loading..",loading:!0}},render:function(){var e=this;return React.createElement(l["default"],this.props,React.createElement("div",{className:"ui buttons bottom attached"},React.createElement("button",{className:"ui green basic animated fade button",onClick:function(){e.props.installHandle(e.props._id)}},React.createElement("div",{className:"visible content"},React.createElement("i",{className:"cloud download icon"})),React.createElement("div",{className:"hidden content"},LANGUAGE.remote.install))),this.props.loading?React.createElement("div",{className:"ui active inverted dimmer"},React.createElement("div",{className:"ui text loader"},this.props.loadingMsg)):"")},componentDidMount:function(){},installHandle:function(e){this.setState({installing:!0,installProgress:"0",installMessage:"下载源码中.."}),location.href="https://github.com/"+this.props.github+"/archive/master.zip"},listenHandler:function(){}});t["default"]=i},function(e,t){(function(e){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=e.require("path"),r=e.require("process").env,s=e.require("electron").remote.dialog,c=function(e){function t(){a(this,t);var e=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.version="0.1.3",e.state={saved:!1,isDev:localStorage.getItem("isDev")||"0",autoUpdate:localStorage.getItem("autoUpdate")||"0",plugPath:localStorage.getItem("dev-plugPath")||i.join(r.AS_WORKDIR,"antData","plugins-dev"),language:localStorage.getItem("storeLanguage")||"en"},e}return o(t,e),l(t,[{key:"render",value:function(){return React.createElement("div",null,React.createElement("form",{className:"ui form attached fluid segment"},React.createElement("div",{className:"field"},React.createElement("label",null,LANGUAGE.setting.language),React.createElement("select",{className:"ui dropdown",ref:"language"},React.createElement("option",{value:"en",ref:"languageEN"},"English"),React.createElement("option",{value:"zh",ref:"languageZH",selected:"zh"===this.state.language?"selected":null},"简体中文"))),React.createElement("div",{className:"field"},React.createElement("div",{className:"ui toggle checkbox"},React.createElement("input",{type:"checkbox",ref:"toggleDev",onClick:this.toggleDevHandler.bind(this)}),React.createElement("label",null,LANGUAGE.setting.devmode))),"1"===this.state.isDev?React.createElement("div",{className:"ui action input",style:{marginBottom:"10px"}},React.createElement("input",{type:"text",value:this.state.plugPath,ref:"plugPath"}),React.createElement("div",{className:"ui blue right labeled icon button",onClick:this.selectPlugPathHandler.bind(this)},React.createElement("i",{className:"folder outline icon"})," ",LANGUAGE.setting.plugPath)):"",React.createElement("div",{className:"ui basic green button",onClick:this.saveHandler.bind(this)},React.createElement("i",{className:"save icon"})," ",LANGUAGE.setting.save)),this.state.saved?React.createElement("div",{className:"ui bottom attached success message"},React.createElement("i",{className:"icon check"}),LANGUAGE.setting.message):"")}},{key:"componentDidMount",value:function(){$("select.dropdown").dropdown(),"1"===this.state.isDev&&this.refs.toggleDev.setAttribute("checked","checked"),"1"===this.state.autoUpdate&&this.refs.toggleAutoUpdate.setAttribute("checked","checked")}},{key:"saveHandler",value:function(){var e=this;localStorage.setItem("dev-plugPath",this.state.plugPath),localStorage.setItem("isDev",this.state.isDev),localStorage.setItem("autoUpdate",this.state.autoUpdate),localStorage.setItem("storeLanguage",this.refs.language.value),this.setState({saved:!0}),setTimeout(function(){e.setState({saved:!1})},2e3)}},{key:"selectPlugPathHandler",value:function(){var e=s.showOpenDialog({properties:["openDirectory"]});e&&this.setState({plugPath:e})}},{key:"toggleDevHandler",value:function(){this.setState({isDev:"1"===this.state.isDev?"0":"1"})}},{key:"toggleAutoUpdateHandler",value:function(){this.setState({autoUpdate:"1"===this.state.autoUpdate?"0":"1"})}}]),t}(React.Component);t["default"]=c}).call(t,function(){return this}())}]);