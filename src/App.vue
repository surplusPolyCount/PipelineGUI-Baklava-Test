<template>
<div style="width:98vw;height:95vh">
    <baklava-editor :plugin="viewPlugin"></baklava-editor>
</div>
</template>

<script>

import { Editor } from "@baklavajs/core";
import { ViewPlugin } from "@baklavajs/plugin-renderer-vue";
import { OptionPlugin } from "@baklavajs/plugin-options-vue";
import { Engine } from "@baklavajs/plugin-engine"
import { DisplayNode } from "./DisplayNode";
import { MathNode } from "./MathNode.js";

export default {
    data() {
        return {
            editor: new Editor(),
            viewPlugin: new ViewPlugin(),
			engine: new Engine(true)
        }
    },
    created() {
        this.editor.use(this.viewPlugin);
		this.editor.use(new OptionPlugin());
		this.editor.use(this.engine);
        // register your nodes, node options, node interface types, ...
		this.editor.registerNodeType("Display", DisplayNode);
		this.editor.registerNodeType("Math", MathNode);

	},
	methods: {
	
		
	}
}
</script>

