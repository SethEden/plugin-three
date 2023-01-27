/**
 * @file plugin.business.constants.validation.js
 * @module plugin.business.constants.validation
 * @description Contains all validations for named plugin business rule constants.
 * @requires module:plugin.business.constants
 * @author Seth Hollingsead
 * @date 2023/01/27
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as plg_biz from '../../constants/plugin.business.constants.js';

/**
 * @function pluginBusinessConstantsValidation
 * @description Initializes the plugin business rules constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/01/27
 */
export const pluginBusinessConstantsValidation = [
  // ********************************
  // pluginThreeRules rules in order
  // ********************************
  {Name: 'cpluginThreeRule01', Actual: plg_biz.cpluginThreeRule01, Expected: 'pluginThreeRule01'},
  {Name: 'cpluginThreeRule02', Actual: plg_biz.cpluginThreeRule02, Expected: 'pluginThreeRule02'}
];