(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(t,e,a){},174:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),i=a(53),r=a.n(i),s=(a(61),a(7)),o=a(8),l=a(10),u=a(9),d=a(11),m=(a(63),a(1)),h=a.n(m),p=a(54),y=a.n(p),f=(a(84),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).sendPricePusher=function(t){h.a.post("/prices/new",{prices:t}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},a.state={btcAmount:"",ethAmount:"",ltcAmount:""},a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentWillMount",value:function(){this.pusher=new y.a("6abcd4a00181368360ec",{cluster:"ap2",encrypted:!0}),this.prices=this.pusher.subscribe("coin-prices")}},{key:"componentDidMount",value:function(){var t=this;navigator.onLine||(this.setState({btcprice:localStorage.getItem("BTC")}),this.setState({ethprice:localStorage.getItem("ETH")}),this.setState({ltcprice:localStorage.getItem("LTC")})),setInterval(function(){h.a.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD").then(function(e){t.sendPricePusher(e.data)}).catch(function(t){console.log(t)})},1e4),this.prices.bind("prices",function(e){t.setState({btcAmount:e.prices.BTC.USD}),localStorage.setItem("BTC",e.prices.BTC.USD),t.setState({ethAmount:e.prices.ETH.USD}),localStorage.setItem("ETH",e.prices.ETH.USD),t.setState({ltcAmount:e.prices.LTC.USD}),localStorage.setItem("LTC",e.prices.LTC.USD)},this)}},{key:"render",value:function(){var t=this.state,e=t.btcAmount,a=t.ethAmount,n=t.ltcAmount;return c.a.createElement("div",{className:"today-container"},c.a.createElement("div",{className:"today-btc-container"},c.a.createElement("div",{className:"today-btc-data-container"},c.a.createElement("div",{className:"today-amount-container"},"$",e),c.a.createElement("div",{className:"today-unit-container"}," 1 BTC"))),c.a.createElement("div",{className:"today-eth-container"},c.a.createElement("div",{className:"today-eth-data-container"},c.a.createElement("div",{className:"today-amount-container"},"$",a),c.a.createElement("div",{className:"today-unit-container"}," 1 ETH"))),c.a.createElement("div",{className:"today-ltc-container"},c.a.createElement("div",{className:"today-ltc-data-container"},c.a.createElement("div",{className:"today-amount-container"},"$",n),c.a.createElement("div",{className:"today-unit-container"}," 1 LTC"))))}}]),e}(n.PureComponent)),g=a(12),v=a(3),T=a.n(v),E=a(55),b=a.n(E),C=(a(172),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).getETHPrices=function(t){return h.a.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts="+t)},a.getBTCPrices=function(t){return h.a.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts="+t)},a.getLTCPrices=function(t){return h.a.get("https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts="+t)},a.getTodayPrice=function(){var t=a.state.historyList,e=T()().unix();h.a.all([a.getETHPrices(e),a.getBTCPrices(e),a.getLTCPrices(e)]).then(h.a.spread(function(e,n,c){t.push({date:T()().format("DD MMM YYYY"),eth:e.data.ETH.USD,btc:n.data.BTC.USD,ltc:c.data.LTC.USD}),a.setState({historyList:Object(g.a)(t)})}))},a.getYesterdayPrice=function(){var t=a.state.historyList,e=T()().subtract(1,"days").unix();h.a.all([a.getETHPrices(e),a.getBTCPrices(e),a.getLTCPrices(e)]).then(h.a.spread(function(e,n,c){t.push({date:T()().subtract(1,"days").format("DD MMM YYYY"),eth:e.data.ETH.USD,btc:n.data.BTC.USD,ltc:c.data.LTC.USD}),a.setState({historyList:Object(g.a)(t)})}))},a.getTwoDaysPrice=function(){var t=T()().subtract(2,"days").unix(),e=a.state.historyList;h.a.all([a.getETHPrices(t),a.getBTCPrices(t),a.getLTCPrices(t)]).then(h.a.spread(function(t,n,c){e.push({date:T()().subtract(2,"days").format("DD MMM YYYY"),eth:t.data.ETH.USD,btc:n.data.BTC.USD,ltc:c.data.LTC.USD}),a.setState({historyList:Object(g.a)(e)})}))},a.getThreeDaysPrice=function(){var t=a.state.historyList,e=T()().subtract(3,"days").unix();h.a.all([a.getETHPrices(e),a.getBTCPrices(e),a.getLTCPrices(e)]).then(h.a.spread(function(e,n,c){t.push({date:T()().subtract(3,"days").format("DD MMM YYYY"),eth:e.data.ETH.USD,btc:n.data.BTC.USD,ltc:c.data.LTC.USD}),a.setState({historyList:Object(g.a)(t)})}))},a.getFourDaysPrice=function(){var t=a.state.historyList,e=T()().subtract(4,"days").unix();h.a.all([a.getETHPrices(e),a.getBTCPrices(e),a.getLTCPrices(e)]).then(h.a.spread(function(e,n,c){t.push({date:T()().subtract(4,"days").format("DD MMM YYYY"),eth:e.data.ETH.USD,btc:n.data.BTC.USD,ltc:c.data.LTC.USD}),a.setState({historyList:Object(g.a)(t)})}))},a.state={historyList:[]},a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentWillMount",value:function(){this.getTodayPrice(),this.getYesterdayPrice(),this.getTwoDaysPrice(),this.getThreeDaysPrice(),this.getFourDaysPrice()}},{key:"render",value:function(){var t=this.state.historyList;return console.log("History LIst",t),c.a.createElement("div",{className:"history-container"},t&&t.length&&b()(t,function(t,e){return c.a.createElement("div",{key:e,className:"history-date-data-container"},c.a.createElement("div",{className:"history-btc-container"},c.a.createElement("div",{className:"history-date-container"},t.date),c.a.createElement("div",{className:"history-data-container"},"1 BTC = $",t.btc)),c.a.createElement("div",{className:"history-eth-container"},c.a.createElement("div",null,"1 ETH = $",t.eth)),c.a.createElement("div",{className:"history-ltc-container"},c.a.createElement("div",null,"1 LTC = $",t.ltc)))}))}}]),e}(n.PureComponent)),S=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"top-header"},c.a.createElement("div",{className:"top-header-name"},"Pusher Coins"),c.a.createElement("div",{className:"top-header-link"},c.a.createElement("a",{className:"top-header-link-name",href:"https://pusher.com",target:"_blank",rel:"noopener noreferrer"},"Pusher.com"))),c.a.createElement("div",{className:"page-content-container"},c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"main-content-data"},c.a.createElement("div",{className:"main-content-heading"},"PusherCoins is a realtime price information about ",c.a.createElement("br",null),"BTC, ETH and LTC"),c.a.createElement("div",{className:"current-price-text"},"Current price"),c.a.createElement(f,null),c.a.createElement("div",{className:"history-text"},"History (Past 5 days)"),c.a.createElement(C,null)))))}}]),e}(n.PureComponent),D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var a=t.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}r.a.render(c.a.createElement(S,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");D?(function(t,e){fetch(t).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):P(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):P(e,t)})}}()},56:function(t,e,a){t.exports=a(174)},61:function(t,e,a){},63:function(t,e,a){},84:function(t,e,a){}},[[56,2,1]]]);
//# sourceMappingURL=main.a08aae2f.chunk.js.map