// src/extension.ts

import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    // Register a command to open the main UI
    let disposable = vscode.commands.registerCommand('fiveMVisualScripting.openUI', () => {
        const panel = vscode.window.createWebviewPanel(
            'fiveMVisualScripting',
            'FiveM Visual Scripting',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [
                    vscode.Uri.file(path.join(context.extensionPath, 'src', 'webview'))
                ]
            }
        );

        // Get path to resource on disk
        const indexHtmlPath = path.join(context.extensionPath, 'src', 'webview', 'index.html');

        // Read the HTML content
        let htmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

        // Fix paths to resources
        htmlContent = fixHtmlPaths(htmlContent, panel.webview, context);

        // Set the webview's HTML content
        panel.webview.html = htmlContent;

        // Handle messages from the webview
        panel.webview.onDidReceiveMessage(
            message => {
                switch (message.command) {
                    case 'submitFeedback':
                        handleFeedback(message.feedback);
                        return;
                    case 'getSettings':
                        sendSettings(panel.webview);
                        return;
                    // Handle other commands if necessary
                }
            },
            undefined,
            context.subscriptions
        );
    });

    context.subscriptions.push(disposable);
}

function fixHtmlPaths(html: string, webview: vscode.Webview, context: vscode.ExtensionContext): string {
    return html.replace(/(src|href)="(.+?)"/g, (match, p1, p2) => {
        const onDiskPath = vscode.Uri.file(
            path.join(context.extensionPath, 'src', 'webview', p2)
        );
        const webviewUri = webview.asWebviewUri(onDiskPath);
        return `${p1}="${webviewUri}"`;
    });
}

function handleFeedback(feedback: string) {
    // Handle feedback, e.g., save to a file or display a notification
    vscode.window.showInformationMessage('Feedback received. Thank you!');
    // Optionally, write feedback to a file
    const feedbackFile = path.join(__dirname, 'feedback.txt');
    fs.appendFileSync(feedbackFile, `Feedback: ${feedback}\n`);
}

function sendSettings(webview: vscode.Webview) {
    const config = vscode.workspace.getConfiguration('fiveMVisualScripting');
    const settings = {
        theme: config.get('theme'),
        textSize: config.get('textSize')
    };
    webview.postMessage({ command: 'settings', settings: settings });
}

export function deactivate() {}
