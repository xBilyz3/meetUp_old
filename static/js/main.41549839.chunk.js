(this.webpackJsonpmeetup=this.webpackJsonpmeetup||[]).push([[0],{19:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(18),o=n.n(s),i=(n(24),n(2)),c=n(3),l=n(5),u=n(4),p=n(6),h=n.n(p),d=n(7),m=n(8),v=n.n(m),f=[{created:1598255462e3,duration:54e5,id:"272775522",name:"Lunch&Learn: SUCCESSFUL SELLING IN TECHNOLOGY BUSINESS",date_in_series_pattern:!1,status:"upcoming",time:1600164e6,local_date:"2020-09-15",local_time:"12:00",updated:1598255462e3,utc_offset:72e5,waitlist_count:0,yes_rsvp_count:4,venue:{id:26052503,name:"WERK1",lat:48.12380599975586,lon:11.608254432678223,repinned:!1,address_1:"Atelierstra\xdfe 29",city:"M\xfcnchen",country:"de",localized_country_name:"Germany"},is_online_event:!1,group:{created:1458124246e3,name:"WERK1",id:19716609,join_mode:"open",lat:48.13999938964844,lon:11.579999923706055,urlname:"WERK1munich",who:"movers and shakers",localized_location:"M\xfcnchen, Germany",state:"",country:"de",region:"en_US",timezone:"Europe/Berlin"},link:"https://www.meetup.com/WERK1munich/events/272775522/",description:"Andreas Spechtler, founder and CEO of Silicon Castles, shares practical guidance on the successful selling of your technology into B2B markets.Andreas Spechtler has more than 25 years of experience in the global technology and licensing business, digital entertainment, international marketing, sales and operations all over the world. Andreas worked for American, German and Japanese companies including Real Networks and Sony Corporation and looks back on many years of startup and incubation experience inside and outside of corporations. In his last corporate job, he was an executive at Dolby Laboratories and served as the President of Dolby Laboratories International. End 2016 he left the corporate world and in 2017 he founded Silicon Castles.Silicon Castles is a Technology Business Architect for deep technology businesses with a focus on intellectual property licensing businesses and is based in Salzburg. Silicon Castles focuses on European Diamonds i.e. technology startups with a unique business idea, outstanding intellectual property, and scalable technologies that can solve a global problem. The company Silicon Castles supports startups in various areas; from early-stage investment, set up of a global licensing model, and individual coaching to active participation in global business development and sales via the Silicon Castles global network in Europe, US, and Asia. For more details",visibility:"public",member_pay_fee:!1}];function g(e){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(h.a.mark((function e(t){var n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,E();case 4:if(!(n=e.sent)){e.next=11;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,v.a.get(a);case 9:return r=e.sent,e.abrupt("return",r.data);case 11:return e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t,n){return w.apply(this,arguments)}function w(){return(w=Object(d.a)(h.a.mark((function e(t,n,a){var r,s,o,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",f);case 2:return e.next=4,E();case 4:if(!(r=e.sent)){e.next=15;break}return s="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+r,t&&n&&(s+="&lat="+t+"&lon="+n),a&&(s+="&page="+a),t&&n&&a&&(s+="&lat="+t+"&lon="+n+"&page="+a),e.next=12,v.a.get(s);case 12:return o=e.sent,i=o.data.events,e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?_("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=brun83qi3nl9ngtuq9o1abfl2v&response_type=code&redirect_uri=https://xbilyz3.github.io/meetUp/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:_("renew",localStorage.getItem("refresh_token"))}function _(e,t){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(h.a.mark((function e(t,n){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://w4jbrclgt5.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://w4jbrclgt5.execute-api.eu-central-1.amazonaws.com/dev/api/refreshtoken/"+n),e.next=3,v.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[]},e.handleInputChanged=function(t){var n=t.target.value;e.setState({query:n}),g(n).then((function(t){return e.setState({suggestions:t})}))},e.handleItemClicked=function(t,n,a){e.setState({query:t,suggestions:[]}),e.props.updateEvents(n,a)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)}))))}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={ShownEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({ShownEvents:n})},e}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"NumberOfEvents"},"Show",r.a.createElement("input",{type:"number",className:"number",label:"Number of Events",value:this.state.ShownEvents,onChange:this.handleInputChanged}),"Events")}}]),n}(a.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e.handleShowDetails=function(){!1===e.state.showDetails?e.setState({showDetails:!0}):e.setState({showDetails:!1})},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.state.showDetails,n=this.props.event;return r.a.createElement("div",null,r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"eventDate"},n.local_time," | ",n.local_date),r.a.createElement("div",{className:"eventName"},n.name),r.a.createElement("div",{className:"groupName"},"Group: ",n.group.name),r.a.createElement("div",{className:"going"},this.props.event.yes_rsvp_count," people are going"),r.a.createElement("button",{className:"detailsButton",onClick:function(){return e.handleShowDetails()}},"show details")),t&&r.a.createElement("div",{className:"eventDetails"},r.a.createElement("div",{className:"eventDescription"},n.description),r.a.createElement("div",{className:"eventLink"},n.link)))}}]),n}(a.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(O,{event:e}))})))}}]),n}(a.Component),N=(n(43),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],page:null,defaultCity:"",lat:null,lon:null},e.updateEvents=function(t,n,a){t&&n?y(t,n,e.state.page).then((function(a){return e.setState({events:a,lat:t,lon:n})})):a?y(e.state.lat,e.state.lon,a).then((function(t){return e.setState({events:t,page:a})})):y(e.state.lat,e.state.lon,e.state.page).then((function(t){return e.setState({events:t})}))},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){return e.setState({events:t})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,{updateEvents:this.updateEvents}),r.a.createElement(C,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}),r.a.createElement(j,{events:this.state.events}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.41549839.chunk.js.map