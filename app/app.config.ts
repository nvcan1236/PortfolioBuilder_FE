export default defineAppConfig({
  ui: {
    input: {
      slots: {
        base: "h-12 border-[1.5px] border-[#E2E2E2] gap-2 px-6 py-4 bg-[#FCFCFC]",
      },
    },
    button: {
      slots: {
        base: "py-2.5 min-h-10 px-6",
        // label: '!text-[13px] leading-[100%]'
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class:
            "font-semibold text-white bg-gradient-to-b from-blue-normal to-blue-normal-active shadow-[0_0_0_1px_#004CBF,inset_0_-1px_1px_#0065ff,0_2px_4px_-1px_rgba(0,61,153,0.5),inset_0_0.5px_1px_rgba(255,255,255,0.15)]",
        },
        {
          color: "neutral",
          variant: "subtle",
          class:
            "font-semibold text-black bg-gradient-to-b from-[#E5E5E5] to-[#E2E2E2] shadow-[inset_0_1px_0_rgba(255,255,255,0.33),0_3px_4px_-1px_rgba(0,0,0,0.15),0_0_0_1px_#D4D4D4]",
        },
      ],
    },
    modal: {
      slots: {
        overlay: "bg-black/30",
        content: "p-4",
      },
    },
  },
});
