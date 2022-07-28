import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Thumbnail } from '../Thumbnail';

export default {
  title: 'exercise1/atoms/Thumbnail',
  component: Thumbnail,
  parameters: {
    docs: {
      description: {
        component: '画像コンポーネント',
      },
    },
  },
} as ComponentMeta<typeof Thumbnail>;

const Template: ComponentStory<typeof Thumbnail> = (args) => <Thumbnail {...args} />;

export const MvIllust = Template.bind({});
MvIllust.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '335px',
          height: '209px',
          backgroundColor: 'black',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

MvIllust.args = {
  src: '/img/mv_illust.svg',
  alt: 'メインビジュアルの写真',
  objectFit: 'contain',
  layout: 'fill',
};

export const DmyThumb = Template.bind({});
DmyThumb.decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '334px',
          height: '160px',
          position: 'relative',
        }}
      >
        <Story />
      </div>
    </div>
  ),
];

DmyThumb.args = {
  src: '/img/dmy_thumb01.jpg',
  alt: 'ダミーのサムネイル写真',
  objectFit: 'contain',
  layout: 'fill',
};