import { NodeBuilder } from "@baklavajs/core";

//src: https://github.com/wdecoster/nanofilt

export const NanofiltNode = new NodeBuilder("NanofiltNode")
    .setName("Nanofilt")
    .addInputInterface("Input (fastq)")
	  .addOption("length", "NumberOption")
    .addOption("maxlength", "NumberOption")
    .addOption("quality", "NumberOption")
    .addOption("minGC", "NumberOption")
    .addOption("maxGC", "NumberOption")
    .addOption("headcrop", "NumberOption")
    .addOption("tailcrop", "NumberOption")
    .addOutputInterface("Output")
    .onCalculate((n) => {
      console.log("need to pass through a dictionary or something here");
    })
    .build();


    /**
     * 
Options for filtering reads on.:
  -l, --length LENGTH   Filter on a minimum read length
  --maxlength MAXLENGTH Filter on a maximum read length
  -q, --quality QUALITY Filter on a minimum average read quality score
  --minGC MINGC         Sequences must have GC content >= to this. Float between 0.0 and 1.0. Ignored if
                        using summary file.
  --maxGC MAXGC         Sequences must have GC content <= to this. Float between 0.0 and 1.0. Ignored if
                        using summary file.

Options for trimming reads.:
  --headcrop HEADCROP   Trim n nucleotides from start of read
  --tailcrop TAILCROP   Trim n nucleotides from end of read

Input options.:
  -s, --summary SUMMARY Use albacore or guppy summary file for quality scores
  --readtype            Which read type to extr
     */