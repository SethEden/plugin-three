/**
 * @file chiefCommander.js
 * @module chiefCommander
 * @description Contains all of the top-level functions to manage the commands for the plugin.
 * @requires module:commandBroker
 * @requires module:plugin.constants
 * @requires module:chiefData
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/01/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import commandBroker from '../brokers/commandBroker.js';
import * as plg from '../constants/plugin.constants.js';
import chiefData from './chiefData.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-three.controllers.chiefCommander.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + wrd.ccontrollers + bas.cDot + baseFileName + bas.cDot;

