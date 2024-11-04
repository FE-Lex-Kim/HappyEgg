// stories/Home.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import Video from "app/_components/homeVideo.tsx";

const meta = {
  title: "Components/Home/Video",
  component: Video,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Video>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
