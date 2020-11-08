/* A better HTML5 template that gives you a solid starting point to work from.
 * Code will be inserted at the cursor position in the active document.
 * Code edited by William Garrity for a class at MCLA
 * The extention can be found in the menu under: "Edit > Insert HTML Template"
 *
 * Author: William Garrity + William Larsson
 * Date: 2019-09-22
 * Williams Additions: 2020-11-08
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

define(function (require, exports, module) {
    "use strict";

    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus");

    // When the menu item is clicked:
    function betterHtml() {
        var editor = EditorManager.getFocusedEditor();
        if (editor) {
            var html = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n\n" +
                "<head>\n" +
                "\t<meta charset=\"utf-8\">\n" +
                "\t<title></title>\n" +
                "</head>\n\n" +
                "<body>\n" +
                "</body>\n\n" +
                "</html>";

            var pos = editor.getCursorPos();
            editor.document.replaceRange(html, pos);
        }
    }

    var COMMAND_ID = "bracketshtmltemplate.williamgarrity"; // package-style naming to avoid collisions
    CommandManager.register("Insert HTML Template", COMMAND_ID, betterHtml);

    // Create a menu item
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuDivider();
    menu.addMenuItem(COMMAND_ID);
    menu.addMenuDivider();
});
