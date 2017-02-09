/**
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define(['require', 'lodash', 'jquery', 'log', './compound-statement-view'],
    function (require, _, $, log, CompoundStatementView) {

        /**
         * The view to represent a If statement which is an AST visitor.
         * @param {Object} args - Arguments for creating the view.
         * @param {IfStatement} args.model - The If statement model.
         * @param {Object} args.container - The HTML container to which the view should be added to.
         * @param {Object} args.parent - Parent Statement View, which in this case the if-else statement
         * @param {Object} [args.viewOptions={}] - Configuration values for the view.
         * @constructor
         */
        var IfStatementView = function (args) {
            _.set(args, "viewOptions.title.text", "If");
            CompoundStatementView.call(this, args);
        };

        IfStatementView.prototype = Object.create(CompoundStatementView.prototype);
        IfStatementView.prototype.constructor = IfStatementView;

        IfStatementView.prototype.canVisitIfStatement = function(){
            return true;
        };

        return IfStatementView;
    });