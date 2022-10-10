import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { findInReactTree } from 'enmity/utilities';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import { View } from 'enmity/components';

const Patcher = create('dashless');

const dashRegExp = new RegExp('-', 'g');

const Dashless: Plugin = {
   ...manifest,

   onStart() {

      var parseSnowflake = function(snowflake: string) {
         try {
            const id = parseInt(snowflake);
            const binary = id.toString(2).padStart(64, '0');
            const excerpt = binary.substring(0, 42);
            const decimal = parseInt(excerpt, 2);
            const unix = decimal + 1420070400000;
            return new Date(unix).toLocaleString();
         } catch (e) {
            console.error(e);
            return '(Failed to get date)';
         }
      }

      const unpatchView = Patcher.after(View, 'render', (_ctx, _args, res) => {
         const textChannel: any = findInReactTree(res, r => r?.props?.channel?.name && r?.props?.hasOwnProperty?.('isRulesChannel'));
         if (!textChannel) return;

         Patcher.after(textChannel.type, 'type', (_ctx, _args, res) => {
            const textChannelName: any = findInReactTree(res, r => typeof r?.children === 'string');
            if (!textChannelName) return;

            //textChannelName.children = textChannelName.children.replace(dashRegExp, res.props.channel.lastMessageId);
            textChannelName.children = textChannelName.children.replace(dashRegExp, ' ');
            return res;
         });
         unpatchView();
      });
   },

   onStop() {
      Patcher.unpatchAll();
   },

   
};

registerPlugin(Dashless);