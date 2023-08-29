import { Node } from "@baklavajs/core";

export class SamtoolsNode extends Node {

    type = "ProgramNode";
    name = "Samtools";

    constructor() {
        super();
        this.addInputInterface("Input");
        this.addOutputInterface("Output");
        this.addOption("Operation", "SelectOption", "View", undefined, {
            items: ["View", "Sort", "Index", "Flagstat" ]
        });
    }

    calculate() {
        /*
        const n1 = this.getInterface("Number 1").value;
        const n2 = this.getInterface("Number 2").value;
        const operation = this.getOptionValue("Operation").selected;
        let result;
        if (operation === "Add") {
            result = n1 + n2;
        } else if (operation === "Subtract") {
            result = n1 - n2;
        }
        this.getInterface("Output").value = result;
        */
    }

}