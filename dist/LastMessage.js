function h(o){window.enmity.plugins.registerPlugin(o)}function m(o,c,s){return window.enmity.utilities.findInReactTree(o,c,s)}function F(o){return window.enmity.patcher.create(o)}var p="LastMessage",w="0.0.1",v="Gets Channel Info",g=[{name:"burnt",id:"349651287610097672"}],S={name:p,version:w,description:v,authors:g};const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl,e.ScrollView,e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const T=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio,e.FormRow,e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;const l=F("dashless"),y=new RegExp("-","g"),b={...S,onStart(){const o=l.after(T,"render",(c,s,d)=>{const u=m(d,n=>{var a,t,r,i;return((t=(a=n==null?void 0:n.props)==null?void 0:a.channel)==null?void 0:t.name)&&((i=(r=n==null?void 0:n.props)==null?void 0:r.hasOwnProperty)==null?void 0:i.call(r,"isRulesChannel"))});!u||(l.after(u.type,"type",(n,a,t)=>{const r=m(t,i=>typeof(i==null?void 0:i.children)=="string");if(r)return r.children=r.children.replace(y," "),t}),o())})},onStop(){l.unpatchAll()}};h(b);
