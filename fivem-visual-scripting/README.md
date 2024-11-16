# FiveM Visual Scripting

An inclusive visual scripting tool for FiveM with accessibility features, designed to simplify the development process and make scripting accessible to everyone, including individuals with ADHD and learning disabilities.

---

## Features

- **Visual Scripting with Blockly**: Create scripts using a drag-and-drop interface powered by Blockly, eliminating the need to write code manually.
- **Accessibility Options**:
  - **Themes**: Choose from Light, Dark, or High Contrast themes to suit your preferences.
  - **Adjustable Text Size**: Customize the text size for better readability (16px, 18px, 20px).
- **Interactive Tutorials**: Step-by-step guides to help you get started with the visual scripting tool and understand how to generate Lua code for FiveM.
- **Feedback Mechanism**: Provide feedback directly within the extension to help improve future versions.
- **Settings Management**: Easily access and modify your preferences through the settings interface.

---

## Installation

### Via VS Code Marketplace

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X` (`Cmd+Shift+X` on Mac).
3. Search for `"FiveM Visual Scripting"`.
4. Click **Install** to install the extension.
5. After installation, reload Visual Studio Code if prompted.

### Manual Installation

1. Download the latest `.vsix` file from the [Releases](https://github.com/your-repo/five-m-visual-scripting/releases) page.
2. In Visual Studio Code, go to the Extensions view.
3. Click on the three-dot menu (...) in the top-right corner and select **Install from VSIX...**.
4. Browse to the downloaded `.vsix` file and select it to install.
5. Reload Visual Studio Code if prompted.

---

## Usage

### Opening the Extension

- Press `Ctrl+Shift+P` (`Cmd+Shift+P` on Mac) to open the Command Palette.
- Type `Open FiveM Visual Scripting` and select the command to launch the extension.

### Main Menu

From the main menu, you have access to:

- **Open Visual Scripting Tool**: Launch the Blockly-based visual scripting interface.
- **Settings**: Customize themes and text size to suit your preferences.
- **Feedback**: Provide feedback to the development team.
- **Start Tutorial**: Begin an interactive tutorial to learn how to use the extension.

### Visual Scripting with Blockly

1. **Launching the Tool**:

   - Click on **Open Visual Scripting Tool** from the main menu.

2. **Creating Scripts**:

   - Use the toolbox on the left to drag and drop blocks into the workspace.
   - Snap blocks together to define logic and control flow.

3. **Generating Lua Code**:

   - Once your script is ready, click on **Generate Code**.
   - The generated Lua code will appear in the textarea below.
   - You can copy this code for use in your FiveM `client.lua` or `server.lua` scripts.

4. **Exporting Scripts**:

   - Copy the generated code and paste it into your FiveM resource files.

### Settings

- **Accessing Settings**:

  - Click on **Settings** from the main menu or the navigation bar.

- **Customizing Theme**:

  - Select your preferred theme from the dropdown menu (Light, Dark, High Contrast).
  - The theme will change immediately to reflect your choice.

- **Adjusting Text Size**:

  - Choose the desired text size from the options provided.
  - Text throughout the extension will adjust accordingly.

- **Saving Settings**:

  - Click **Save Settings** to apply and persist your preferences.

### Interactive Tutorials

- **Starting a Tutorial**:

  - Click on **Start Tutorial** from the main menu.
  - Follow the on-screen instructions to learn how to use the extension's features.

- **Navigating the Tutorial**:

  - Click **Next** to proceed through each step.
  - The tutorial covers essential functions like opening the visual scripting tool and generating code.

### Providing Feedback

- **Accessing the Feedback Form**:

  - Click on **Feedback** from the main menu.

- **Submitting Feedback**:

  - Enter your comments or suggestions in the textarea provided.
  - Click **Submit Feedback** to send your input to the development team.
  - A confirmation message will appear upon successful submission.

---

## Extension Settings

This extension contributes the following settings, accessible via the VS Code Settings (`Ctrl+,` or `Cmd+,` on Mac):

- **fiveMVisualScripting.theme**:

  - **Type**: `string`
  - **Default**: `"light"`
  - **Options**: `"light"`, `"dark"`, `"contrast"`
  - **Description**: Sets the theme for the extension interface.

- **fiveMVisualScripting.textSize**:

  - **Type**: `string`
  - **Default**: `"16px"`
  - **Options**: `"16px"`, `"18px"`, `"20px"`
  - **Description**: Adjusts the text size within the extension.

---

## Commands and Keybindings

- **Open FiveM Visual Scripting**:

  - **Command Palette**: `Open FiveM Visual Scripting`
  - **Default Keybinding**: `Ctrl+Shift+F` (`Cmd+Shift+F` on Mac)
  - **Description**: Launches the main interface of the extension.

---

## Contributing

Contributions are welcome! If you'd like to contribute to the development of this extension:

- **Report Issues**: Use the [GitHub Issues](https://github.com/your-repo/five-m-visual-scripting/issues) page to report bugs or suggest features.
- **Pull Requests**: Submit pull requests with improvements or fixes.

---

## FAQ

**Q: How do I integrate the generated Lua code into my FiveM server?**

**A:** Copy the generated code from the visual scripting tool and paste it into your `client.lua` or `server.lua` file within your FiveM resource. Ensure that you have a valid `fxmanifest.lua` in your resource folder to define the scripts.

**Q: Are the accessibility features compatible with all versions of VS Code?**

**A:** The accessibility features should work with Visual Studio Code version 1.60.0 and above. If you encounter issues, please update VS Code to the latest version.

**Q: Can I customize the blocks available in the visual scripting tool?**

**A:** Currently, the blocks provided cover basic scripting needs. Future updates may include the ability to customize or add new blocks. Contributions are welcome!

---

## Known Issues

- **Web Speech API Limitations**: Due to restrictions in the VS Code Webview environment, some features like text-to-speech and speech recognition may not function as intended.

---

## Release Notes

### 1.0.0

- Initial release of FiveM Visual Scripting.
- Features:
  - Visual scripting with Blockly.
  - Accessibility options (themes, text size).
  - Interactive tutorials.
  - Feedback mechanism.
  - Settings management.

---

## License

This extension is licensed under the [MIT License](https://github.com/your-repo/five-m-visual-scripting/blob/main/LICENSE).

---

## Support

If you need help or have questions:

- **Email**: <support@yourdomain.com>
- **GitHub Issues**: [Submit an issue](https://github.com/your-repo/five-m-visual-scripting/issues)

---

## Acknowledgements

- **Blockly**: Thanks to the Blockly project for providing the visual programming library used in this extension.
- **Community**: Appreciation to all beta testers and contributors who helped make this extension possible.

---

**Enjoy creating scripts for FiveM with ease and accessibility!**
