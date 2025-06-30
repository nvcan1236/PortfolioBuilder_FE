export type TemplateKey = 'classic' | 'modern' | 'minimal';

type TemplateConfig = {
  key: TemplateKey;
  name: string;
  description: string;
  components: {
    header: string;
    content: string;
    footer: string;
  };
  props: {
    header: {
      title: string;
    };
    content: {
      title: string;
    };
    footer: {
      title: string;
    };
  };
};

export const templateConfigs: Record<TemplateKey, TemplateConfig> = {
  classic: {
    key: 'classic',
    name: 'Classic Template',
    description: 'A clean and professional layout',
    components: {
      header: 'ClassicHeader',
      content: 'ClassicContent',
      footer: 'ClassicFooter'
    },
    props: {
      header: {
        title: 'My Portfolio'
      },
      content: {
        title: 'My Portfolio'
      },
      footer: {
        title: 'My Portfolio'
      }
    }
  },
  modern: {
    key: 'modern',
    name: 'Modern Template',
    description: 'A contemporary and dynamic design',
    components: {
      header: 'ModernHeader',
      content: 'ModernContent',
      footer: 'ModernFooter'
    },
    props: {
      header: {
        title: 'My Portfolio'
      },
      content: {
        title: 'My Portfolio'
      },
      footer: {
        title: 'My Portfolio'
      }
    }
  },
  minimal: {
    key: 'minimal',
    name: 'Minimal Template',
    description: 'A minimalist and elegant design',
    components: {
      header: 'MinimalHeader',
      content: 'MinimalContent',
      footer: 'MinimalFooter'
    },
    props: {
      header: {
        title: 'My Portfolio'
      },
      content: {
        title: 'My Portfolio'
      },
      footer: {
        title: 'My Portfolio'
      }
    }
  }
};

export const getTemplateConfig = (templateKey: TemplateKey) => {
  return templateConfigs[templateKey] || templateConfigs.classic;
};
