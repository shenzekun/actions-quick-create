"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "actions-quick-create" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.actionQuick', () => {
        // The code you place here will be executed every time your command is executed
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        let selection = editor.selection;
        let text = editor.document.getText(selection);
        if (!text) {
            vscode.window.showInformationMessage('选中的文本不能为空');
            return;
        }
        editor.edit(function (editBuilder) {
            let out = `export const ${text.toUpperCase()}_REQUEST = '${text.toUpperCase()}_REQUEST';
export const ${text.toUpperCase()}_REQUEST_SUCCESS = '${text.toUpperCase()}_REQUEST_SUCCESS';
export const ${text.toUpperCase()}_REQUEST_FAIL = '${text.toUpperCase()}_REQUEST_FAIL';`;
            editBuilder.replace(selection, out);
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map