function d(o){window.enmity.plugins.registerPlugin(o)}var w="LongPresser",l="0.0.3",y="WIP plugin to add attribute to channel presser",c=[{name:"burnt",id:"349651287610097672"}],r={name:w,version:l,description:y,authors:c};window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const i=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function a(o){return window.enmity.patcher.create(o)}const e={byProps:(...o)=>window.enmity.modules.filters.byProps(...o),byName:(o,n)=>window.enmity.modules.filters.byName(o,n),byTypeName:(o,n)=>window.enmity.modules.filters.byTypeName(o,n),byDisplayName:(o,n)=>window.enmity.modules.filters.byDisplayName(o,n)};function u(...o){return window.enmity.modules.bulk(...o)}window.enmity.modules.common;function t(o){return window.enmity.assets.getIDByName(o)}const[p,b,h,P,S,N,f]=u(e.byProps("openLazy","hideActionSheet"),e.byProps("getMember"),e.byProps("getChannel"),e.byProps("getLastSelectedGuildId"),e.byProps("getLastSelectedChannelId"),e.byProps("setString"),e.byProps("showPlatformUserProfile")),s=a("copy-role-colors"),g={...r,onStart(){s.before(p,"openLazy",({hideActionSheet:o},[n,m])=>{m.startsWith("ChannelLongPress",0)?i.open({content:m,source:t("ic_selection_checked_24px")}):i.open({content:m,source:t("StatusDND")})})},onStop(){s.unpatchAll()}};d(g);
