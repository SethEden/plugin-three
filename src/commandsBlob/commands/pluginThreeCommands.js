/**
 * @file pluginThreeCommands.js
 * @module pluginThreeCommands
 * @description Contains all of the commands for the pluginThree plugin.
 * @requires module:plugin.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/01/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg from '../../constants/plugin.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, num, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-three.commandsBlob.commands.pluginThreeCommands.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + sys.ccommandsBlob + bas.cDot +
  wrd.ccommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function pluginThreeCommand01
 * @description Outputs pluginThreeCommand01,
 * to verify that the command has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginThreeCommands.pluginThreeCommand01".
 * @author Seth Hollingsead
 * @date 2023/01/26
 */
async function pluginThreeCommand01(inputData, inputMetaData) {
  let functionName = pluginThreeCommand01.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = wrd.cplugin + num.cThree + wrd.cCommand + num.c01;
  console.log(namespacePrefix + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function pluginThreeCommand02
 * @description Outputs pluginThreeCommand02,
 * to verify that the command has been loaded when the plugin was loaded.
 * @param {string} inputData Not used for this business rule.
 * @param {string} inputMetaData Not used for this business rule.
 * @return {string} The string "pluginThreeCommands.pluginThreeCommand02".
 * @author Seth Hollingsead
 * @date 2023/01/26
 */
async function pluginThreeCommand02(inputData, inputMetaData) {
  let functionName = pluginThreeCommand02.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = '';
  returnData = wrd.cplugin + num.cThree + wrd.cCommand + num.c02;
  console.log(namespacePrefix + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  pluginThreeCommand01,
  pluginThreeCommand02
};