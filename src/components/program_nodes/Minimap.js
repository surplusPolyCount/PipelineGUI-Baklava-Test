import { NodeBuilder } from "@baklavajs/core";

export const MinimapNode = new NodeBuilder("MinimapNode")
    .setName("Minimap")
    .addInputInterface("fq file")
    .addOption("Operation", "SelectOption", "---", undefined, {
        items: [ "gff2bed ", "splice ", "ava-pb", "ava-ont", "sr", "---" ]
    })
    .addOption("reference", "InputOption")
    .addOption("a", "CheckboxOption")
    .addOption("x", "CheckboxOption")
    .addOutputInterface("Output")
    .onCalculate((n) => {
        console.log("need to pass through a dictionary or something here");
    })
    .build();