import { NodeBuilder } from "@baklavajs/core";

export const OutputNode = new NodeBuilder("OutputNode")
    .setName("Output")
    .addInputInterface("Output")
    .onCalculate((n) => {
        console.log("need to pass through a dictionary or something here");
    })
    .build();