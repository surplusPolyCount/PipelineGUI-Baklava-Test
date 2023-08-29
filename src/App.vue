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

//UTILITY
import { InputNode } from "./components/utility_nodes/Input"; 
import { OutputNode } from "./components/utility_nodes/Output"; 

//PROGRAMS
import { NanofiltNode } from "./components/program_nodes/Nanofilt";
import { SamtoolsNode } from "./components/program_nodes/Samtools";
import { MinimapNode } from "./components/program_nodes/Minimap";

//import { DisplayNode } from "./DisplayNode";
//import { MathNode } from "./MathNode.js";

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
		//this.editor.registerNodeType("Display", DisplayNode);
		//this.editor.registerNodeType("Math", MathNode);

        //UTILITY
        this.editor.registerNodeType("Input", InputNode);
        this.editor.registerNodeType("Output", OutputNode);

        //PROGRAMS
        this.editor.registerNodeType("Nanofilt", NanofiltNode);
        this.editor.registerNodeType("Samtools", SamtoolsNode);
        this.editor.registerNodeType("Minimap", MinimapNode);

	},
	methods: {
	
		
	}
}
</script>

