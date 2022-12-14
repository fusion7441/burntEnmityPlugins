import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import manifest from '../manifest.json';
import { registerCommands } from "enmity/api/commands";
import { React, Toasts } from 'enmity/metro/common';
import { create } from 'enmity/patcher';
import { bulk, filters } from 'enmity/metro';
import { FormRow } from 'enmity/components';
import { getIDByName } from 'enmity/api/assets';

const [
   LazyActionSheet,
   Members,
   Channels,
   getLastSelectedGuildId,
   getLastSelectedChannelId,
   Clipboard,
   Profile
] = bulk(
   filters.byProps('openLazy', 'hideActionSheet'),
   filters.byProps('getMember'),
   filters.byProps('getChannel'),
   filters.byProps('getLastSelectedGuildId'),
   filters.byProps('getLastSelectedChannelId'),
   filters.byProps('setString'),
   filters.byProps('showPlatformUserProfile')
)

const Patcher = create('copy-role-colors');

const LongPresser: Plugin = {
   ...manifest,

   onStart() {
      const unpatcher = Patcher.before(LazyActionSheet, 'openLazy', ({ hideActionSheet }, [component, sheet]) => {
        if (sheet.startsWith('ChannelLongPress', 0)){
        Toasts.open({ content: sheet, source: getIDByName('ic_selection_checked_24px') });

        } else {
         Toasts.open({ content: sheet, source: getIDByName('StatusDND') });         
        }
 

      });
   },

   onStop() {
      Patcher.unpatchAll();
   },
};

registerPlugin(LongPresser);