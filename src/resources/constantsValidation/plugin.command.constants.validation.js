/**
 * @file plugin.command.constants.validation.js
 * @module plugin.command.constants.validation
 * @description Contains all validations for named plugin command constants.
 * @requires module:plugin.command.constants
 * @author Seth Hollingsead
 * @date 2023/01/27
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_cmd from '../../constants/plugin.command.constants.js';

/**
 * @function pluginCommandConstantsValidation
 * @description Initializes the plugin command constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/01/27
 */
export const pluginCommandConstantsValidation = [
  // ********************************
  // pluginThreeCommands commands in order
  // ********************************
  {Name: 'cpluginThreeCommand01', Actual: plg_cmd.cpluginThreeCommand01, Expected: 'pluginThreeCommand01'},
  {Name: 'cpluginThreeCommand02', Actual: plg_cmd.cpluginThreeCommand02, Expected: 'pluginThreeCommand02'}
];