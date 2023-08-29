import { NodeBuilder } from "@baklavajs/core";

export const InputNode = new NodeBuilder("InputNode")
    .setName("Input")
    .addOutputInterface("Input")
    .onCalculate((n) => {
        console.log("need to pass through a dictionary or something here");
    })
    .build();