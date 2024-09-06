import ace from 'ace-builds';
import modeHtmlUrl from 'ace-builds/src-noconflict/mode-html?url';
import modeJavascriptUrl from 'ace-builds/src-noconflict/mode-javascript?url';
import modeJsonUrl from 'ace-builds/src-noconflict/mode-json?url';
import themeChromeUrl from 'ace-builds/src-noconflict/theme-chrome?url';
import themeGithubUrl from 'ace-builds/src-noconflict/theme-github?url';
import themeMonokaiUrl from 'ace-builds/src-noconflict/theme-monokai?url';
import themeOneDarkUrl from 'ace-builds/src-noconflict/theme-one_dark?url';
import themeTmrnUrl from 'ace-builds/src-noconflict/theme-tomorrow_night_eighties?url';
import workerBaseUrl from 'ace-builds/src-noconflict/worker-base?url';
import workerHtmlUrl from 'ace-builds/src-noconflict/worker-html?url';
import workerJavascriptUrl from 'ace-builds/src-noconflict/worker-javascript?url';
import workerJsonUrl from 'ace-builds/src-noconflict/worker-json?url';

ace.config.setModuleUrl('ace/mode/json', modeJsonUrl);
ace.config.setModuleUrl('ace/mode/javascript', modeJavascriptUrl);
ace.config.setModuleUrl('ace/mode/html', modeHtmlUrl);
ace.config.setModuleUrl('ace/theme/github', themeGithubUrl);
ace.config.setModuleUrl('ace/theme/chrome', themeChromeUrl);
ace.config.setModuleUrl('ace/theme/monokai', themeMonokaiUrl);
ace.config.setModuleUrl('ace/theme/one_dark', themeOneDarkUrl);
ace.config.setModuleUrl('ace/theme/tomorrow_night_eighties', themeTmrnUrl);
ace.config.setModuleUrl('ace/mode/base', workerBaseUrl);
ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl);
ace.config.setModuleUrl('ace/mode/javascript_worker', workerJavascriptUrl);

ace.config.setModuleUrl('ace/mode/html_worker', workerHtmlUrl);
