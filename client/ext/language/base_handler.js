define(function(require, exports, module) {

var BaseLanguageHandler = exports.BaseLanguageHandler = function() {
};

(function() {
    
    this.path = null;
    
    // OVERRIDABLE METHODS

    /**
     * Returns whether this language handler should be enabled for the given file
     * @param path the file path of the file
     */
    this.handlesPath = function(path) {
        return false;
    };

    /**
     * If the language handler implements parsing, this function should take
     * the source code and turn it into an AST (in treehugger format)
     * @param code code to parse
     * @return treehugger AST or null if not implemented
     */
    this.parse = function(doc) {
        return null;
    };
    
    /**
     * Whether this language handler relies on continuous parsing (on an interval basis).
     * This will result in `onParse` being invoked after every successful parse
     */
    this.requiresContinuousParsing = function() {
        return false;
    };
    
    /**
     * Invoked on a successful parse
     * @param ast the resulting AST in treehugger format
     */
    this.onParse = function(ast) {
    };
    
    /**
     * Invoked when the document has been updated (possibly after a certain interval)
     * @param doc the document object
     */
    this.onUpdate = function(doc) {
    };
    
    this.onDocumentOpen = function(path, doc, oldPath) {
    };
    
    this.onDocumentClose = function(path) {
    };
    
    /**
     * Invoked when an outline is required
     * @return a JSON outline structure or null if not supported
     */
    this.outline = function(ast) {
        return null;
    };
    
    /**
     * Returns whether the completion engine requires an AST representation of the code
     */
    this.completionRequiresParsing = function() {
        return false;
    };
    
    /**
     * Performs code completion for the user based on the current cursor position
     * @param doc the entire source code as string
     * @param fullAst the entire AST of the current file
     * @param cursorPos the current cursor position (object with keys 'row' and 'column')
     * @param currentNode the AST node the cursor is currently at
     */
    this.complete = function(doc, fullAst, cursorPos, currentNode) {
        return null;
    };
    
}).call(BaseLanguageHandler.prototype);

});