///////////////////////////////////////////////////////////////////////////
// Copyright © 2017 Jon Lynch
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
  'dojo/_base/declare',
  'jimu/BaseWidgetSetting',
  './codemirror',
  'jimu/utils',
  './css',
  './closebrackets',
  './matchbrackets'
],
  function(
    declare,
    BaseWidgetSetting,
    CodeMirror,
    utils) {
    return declare([BaseWidgetSetting], {
      // these two properties is defined in the BaseWidget
      baseClass: 'jimu-widget-customcss-setting',
      codemirror: null,
      codeMirrorHeight: 330,

      startup: function() {
        this.inherited(arguments);
        if (!this.config.css) {
          this.config.css = '';
        }
        utils.loadStyleLink('codemirrorstyle', this.folderUrl + 'setting/css/codemirror.css');
        utils.loadStyleLink('codemirrortheme', this.folderUrl + 'setting/css/eclipse.css');
        this.setConfig(this.config);
      },

      setConfig: function(config) {
        this.config = config;
        this.codemirror = CodeMirror.fromTextArea(document.getElementById('css-textarea'), {
          lineNumbers: false,
          mode: 'text/css',
          theme: 'eclipse',
          matchBrackets: true,
          autoCloseBrackets: true
        });
        this.codemirror.setSize(null, this.codeMirrorHeight);
      },

      getConfig: function() {
        this.codemirror.toTextArea();
        this.config.css = this.cssTextArea.value;
        return this.config;
      }

    });
  });
