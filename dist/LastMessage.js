function h(o){window.enmity.plugins.registerPlugin(o)}function m(o,s,c){return window.enmity.utilities.findInReactTree(o,s,c)}function F(o){return window.enmity.patcher.create(o)}var p="LastMessage",w="0.0.1",g="Gets Channel Info",v=[{name:"burnt",id:"349651287610097672"}],S={name:p,version:w,description:g,authors:v};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const T=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio,e.FormRow,e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const l=F("dashless"),y=new RegExp("-","g"),b={...S,onStart(){const o=l.after(T,"render",(s,c,d)=>{const u=m(d,t=>{var a,n,r,i;return((n=(a=t==null?void 0:t.props)==null?void 0:a.channel)==null?void 0:n.name)&&((i=(r=t==null?void 0:t.props)==null?void 0:r.hasOwnProperty)==null?void 0:i.call(r,"isRulesChannel"))});!u||(l.after(u.type,"type",(t,a,n)=>{const r=m(n,i=>typeof(i==null?void 0:i.children)=="string");if(r)return r.children=r.children.replace(y,n.props.channel.lastMessageId),n}),o())})},onStop(){l.unpatchAll()}};h(b);
