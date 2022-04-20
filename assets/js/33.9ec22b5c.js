(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{495:function(t,e,s){"use strict";s.r(e);var o=s(23),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"transforms-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-api"}},[t._v("#")]),t._v(" Transforms API")]),t._v(" "),s("p",[t._v("Transforms are helper functions operating on the document. They can be used in defining your own commands.")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/slate/api/transforms.html#node-options"}},[t._v("Node options")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/slate/api/transforms.html#static-methods"}},[t._v("Static methods")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/en/slate/api/transforms.html#node-transforms"}},[t._v("Node transforms")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/slate/api/transforms.html#selection-transforms"}},[t._v("Selection transforms")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/slate/api/transforms.html#text-transforms"}},[t._v("Text transforms")])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/en/slate/api/transforms.html#editor-transforms"}},[t._v("Editor transforms")])],1)])],1)]),t._v(" "),s("h2",{attrs:{id:"node-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-options"}},[t._v("#")]),t._v(" Node options")]),t._v(" "),s("p",[t._v("All transforms support a parameter "),s("code",[t._v("options")]),t._v(". This includes options specific to the transform, and general "),s("code",[t._v("NodeOptions")]),t._v(" to specify which Nodes in the document that the transform is applied to.")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NodeOptions")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  at"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Location\n  match"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("node"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Node"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Location"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n  mode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'highest'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lowest'")]),t._v("\n  voids"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("boolean")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("The "),s("code",[t._v("at")]),t._v(" option selects a "),s("RouterLink",{attrs:{to:"/en/slate/concepts/03-locations.html"}},[t._v("Location")]),t._v(" in the editor. It defaults to the user's current selection. "),s("RouterLink",{attrs:{to:"/en/slate/concepts/04-transforms.html#the-at-option"}},[t._v("Learn more about the "),s("code",[t._v("at")]),t._v(" option")])],1)]),t._v(" "),s("li",[s("p",[t._v("The "),s("code",[t._v("match")]),t._v(" option filters the set of Nodes with a custom function. "),s("RouterLink",{attrs:{to:"/en/slate/concepts/04-transforms.html#the-match-option"}},[t._v("Learn more about the "),s("code",[t._v("match")]),t._v(" option")])],1)]),t._v(" "),s("li",[s("p",[t._v("The "),s("code",[t._v("mode")]),t._v(" option also filters the set of nodes.")])]),t._v(" "),s("li",[s("p",[t._v("When "),s("code",[t._v("voids")]),t._v(" is false, "),s("a",{attrs:{href:"./nodes/editor#schema-specific-instance-methods-to-override"}},[t._v("void Elements")]),t._v(" are filtered out.")])])]),t._v(" "),s("h2",{attrs:{id:"static-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static-methods"}},[t._v("#")]),t._v(" Static methods")]),t._v(" "),s("h3",{attrs:{id:"node-transforms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-transforms"}},[t._v("#")]),t._v(" Node transforms")]),t._v(" "),s("p",[t._v("Transforms that operate on nodes.")]),t._v(" "),s("h4",{attrs:{id:"transforms-insertfragment-editor-editor-fragment-node-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-insertfragment-editor-editor-fragment-node-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.insertFragment(editor: Editor, fragment: Node[], options?)")])]),t._v(" "),s("p",[t._v("Insert of fragment of nodes at the specified location in the document. If no location is specified, insert at the current selection.")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("{at?: Location, hanging?: boolean, voids?: boolean}")])]),t._v(" "),s("h4",{attrs:{id:"transforms-insertnodes-editor-editor-nodes-node-node-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-insertnodes-editor-editor-nodes-node-node-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.insertNodes(editor: Editor, nodes: Node | Node[], options?)")])]),t._v(" "),s("p",[t._v("Atomically inserts "),s("code",[t._v("nodes")]),t._v(" at the specified location in the document. If no location is specified, inserts at the current selection. If there is no selection, inserts at the end of the document.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions & {hanging?: boolean, select?: boolean}")]),t._v(".")]),t._v(" "),s("p",[t._v("For example, to insert at the very end, without replacing the current selection and regardless of block nesting, use")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Transforms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("insertNodes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" targetType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" at"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h4",{attrs:{id:"transforms-removenodes-editor-editor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-removenodes-editor-editor-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.removeNodes(editor: Editor, options?)")])]),t._v(" "),s("p",[t._v("Remove nodes at the specified location in the document. If no location is specified, remove the nodes in the selection.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions & {hanging?: boolean}")])]),t._v(" "),s("h4",{attrs:{id:"transforms-mergenodes-editor-editor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-mergenodes-editor-editor-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.mergeNodes(editor: Editor, options?)")])]),t._v(" "),s("p",[t._v("Merge a node at the specified location with the previous node at the same depth. If no location is specified, use the selection. Resulting empty container nodes are removed.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions & {hanging?: boolean}")])]),t._v(" "),s("h4",{attrs:{id:"transforms-splitnodes-editor-editor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-splitnodes-editor-editor-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.splitNodes(editor: Editor, options?)")])]),t._v(" "),s("p",[t._v("Split nodes at the specified location. If no location is specified, split the selection.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions & {height?: number, always?: boolean}")])]),t._v(" "),s("h4",{attrs:{id:"transforms-wrapnodes-editor-editor-element-element-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-wrapnodes-editor-editor-element-element-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.wrapNodes(editor: Editor, element: Element, options?)")])]),t._v(" "),s("p",[t._v("Wrap nodes at the specified location in the "),s("code",[t._v("element")]),t._v(" container. If no location is specified, wrap the selection.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions & {split?: boolean}")]),t._v(".")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("options.mode")]),t._v(": "),s("code",[t._v("'all'")]),t._v(" is also supported.")]),t._v(" "),s("li",[s("code",[t._v("options.split")]),t._v(" indicates that it's okay to split a node in order to wrap the location. For example, if "),s("code",[t._v("ipsum")]),t._v(" was selected in a "),s("code",[t._v("Text")]),t._v(" node with "),s("code",[t._v("lorem ipsum dolar")]),t._v(", "),s("code",[t._v("split: true")]),t._v(" would wrap the word "),s("code",[t._v("ipsum")]),t._v(" only, resulting in splitting the "),s("code",[t._v("Text")]),t._v(" node. If "),s("code",[t._v("split: false")]),t._v(", the entire "),s("code",[t._v("Text")]),t._v(" node "),s("code",[t._v("lorem ipsum dolar")]),t._v(" would be wrapped.")])]),t._v(" "),s("h4",{attrs:{id:"transforms-unwrapnodes-editor-editor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-unwrapnodes-editor-editor-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.unwrapNodes(editor: Editor, options?)")])]),t._v(" "),s("p",[t._v("Unwrap nodes at the specified location. If necessary, the parent node is split. If no location is specified, use the selection.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions & {split?: boolean}")]),t._v(". For "),s("code",[t._v("options.mode")]),t._v(", "),s("code",[t._v("'all'")]),t._v(" is also supported.")]),t._v(" "),s("h4",{attrs:{id:"transforms-setnodes-editor-editor-props-partial-node-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-setnodes-editor-editor-props-partial-node-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.setNodes(editor: Editor, props: Partial<Node>, options?)")])]),t._v(" "),s("p",[t._v("Set properties of nodes at the specified location. If no location is specified, use the selection.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions & {hanging?: boolean, split?: boolean}")]),t._v(". For "),s("code",[t._v("options.mode")]),t._v(", "),s("code",[t._v("'all'")]),t._v(" is also supported.")]),t._v(" "),s("h4",{attrs:{id:"transforms-unsetnodes-editor-editor-props-string-string-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-unsetnodes-editor-editor-props-string-string-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.unsetNodes(editor: Editor, props: string | string[], options?)")])]),t._v(" "),s("p",[t._v("Unset properties of nodes at the specified location. If no location is specified, use the selection.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions & {split?: boolean}")]),t._v(". For "),s("code",[t._v("options.mode")]),t._v(", "),s("code",[t._v("'all'")]),t._v(" is also supported.")]),t._v(" "),s("h4",{attrs:{id:"transforms-liftnodes-editor-editor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-liftnodes-editor-editor-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.liftNodes(editor: Editor, options?)")])]),t._v(" "),s("p",[t._v("Lift nodes at the specified location upwards in the document tree. If necessary, the parent node is split. If no location is specified, use the selection.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions")]),t._v(". For "),s("code",[t._v("options.mode")]),t._v(", "),s("code",[t._v("'all'")]),t._v(" is also supported.")]),t._v(" "),s("h4",{attrs:{id:"transforms-movenodes-editor-editor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-movenodes-editor-editor-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.moveNodes(editor: Editor, options)")])]),t._v(" "),s("p",[t._v("Move the nodes from an origin to a destination. A destination must be specified in the "),s("code",[t._v("options")]),t._v(". If no origin is specified, move the selection.")]),t._v(" "),s("p",[t._v("Options supported: "),s("code",[t._v("NodeOptions & {to: Path}")]),t._v(". For "),s("code",[t._v("options.mode")]),t._v(", "),s("code",[t._v("'all'")]),t._v(" is also supported.")]),t._v(" "),s("h3",{attrs:{id:"selection-transforms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selection-transforms"}},[t._v("#")]),t._v(" Selection transforms")]),t._v(" "),s("p",[t._v("Transforms that operate on the document's selection.")]),t._v(" "),s("h4",{attrs:{id:"transforms-collapse-editor-editor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-collapse-editor-editor-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.collapse(editor: Editor, options?)")])]),t._v(" "),s("p",[t._v("Collapse the selection to a single point.")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("{edge?: 'anchor' | 'focus' | 'start' | 'end'}")])]),t._v(" "),s("h4",{attrs:{id:"transforms-select-editor-editor-target-location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-select-editor-editor-target-location"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.select(editor: Editor, target: Location)")])]),t._v(" "),s("p",[t._v("Set the selection to a new value specified by "),s("code",[t._v("target")]),t._v(". When a selection already exists, this method is just a proxy for "),s("code",[t._v("setSelection")]),t._v(" and will update the existing value.")]),t._v(" "),s("p",[t._v("For example, to set the selection to the entire contents of the editor:")]),t._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("Transforms"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  anchor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  focus"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("editor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h4",{attrs:{id:"transforms-deselect-editor-editor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-deselect-editor-editor"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.deselect(editor: Editor)")])]),t._v(" "),s("p",[t._v("Unset the selection.")]),t._v(" "),s("h4",{attrs:{id:"transforms-move-editor-editor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-move-editor-editor-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.move(editor: Editor, options?)")])]),t._v(" "),s("p",[t._v("Move the selection's point forward or backward.")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("{distance?: number, unit?: 'offset' | 'character' | 'word' | 'line', reverse?: boolean, edge?: 'anchor' | 'focus' | 'start' | 'end'}")])]),t._v(" "),s("h4",{attrs:{id:"transforms-setpoint-editor-editor-props-partial-point-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-setpoint-editor-editor-props-partial-point-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.setPoint(editor: Editor, props: Partial<Point>, options?)")])]),t._v(" "),s("p",[t._v("Set new properties on one of the selection's points.")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("{edge?: 'anchor' | 'focus' | 'start' | 'end'}")])]),t._v(" "),s("h4",{attrs:{id:"transforms-setselection-editor-editor-props-partial-range"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-setselection-editor-editor-props-partial-range"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.setSelection(editor: Editor, props: Partial<Range>)")])]),t._v(" "),s("p",[t._v("Set new properties on an active selection. Since the value is a "),s("code",[t._v("Partial<Range>")]),t._v(", this method can only handle updates to an existing selection. If there is no active selection the operation will be void. Use "),s("code",[t._v("select")]),t._v(" if you'd like to create a selection when there is none.")]),t._v(" "),s("h3",{attrs:{id:"text-transforms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-transforms"}},[t._v("#")]),t._v(" Text transforms")]),t._v(" "),s("p",[t._v("Transforms that operate on text.")]),t._v(" "),s("h4",{attrs:{id:"transforms-delete-editor-editor-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-delete-editor-editor-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.delete(editor: Editor, options?)")])]),t._v(" "),s("p",[t._v("Delete text in the document.")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("{at?: Location, distance?: number, unit?: 'character' | 'word' | 'line' | 'block', reverse?: boolean, hanging?: boolean, voids?: boolean}")])]),t._v(" "),s("h4",{attrs:{id:"transforms-inserttext-editor-editor-text-string-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-inserttext-editor-editor-text-string-options"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.insertText(editor: Editor, text: string, options?)")])]),t._v(" "),s("p",[t._v("Insert a string of text at the specified location in the document. If no location is specified, insert at the current selection.")]),t._v(" "),s("p",[t._v("Options: "),s("code",[t._v("{at?: Location, voids?: boolean}")])]),t._v(" "),s("h3",{attrs:{id:"editor-transforms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editor-transforms"}},[t._v("#")]),t._v(" Editor transforms")]),t._v(" "),s("h4",{attrs:{id:"transforms-transform-editor-editor-transform-transform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transforms-transform-editor-editor-transform-transform"}},[t._v("#")]),t._v(" "),s("code",[t._v("Transforms.transform(editor: Editor, transform: Transform)")])]),t._v(" "),s("p",[t._v("Transform the "),s("code",[t._v("editor")]),t._v(" by an "),s("code",[t._v("operation")]),t._v(".")])])}),[],!1,null,null,null);e.default=r.exports}}]);