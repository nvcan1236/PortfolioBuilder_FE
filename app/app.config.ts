export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'border-px',
        label: '!text-[13px] leading-[100%]'
      },
      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class:
            " bg-gradient-to-bl from-blue-normal to-blue-normal-active",
        },
        {
          color: "neutral",
          variant: "subtle",
          class: ""
        }
      ],

    },
  },
});
