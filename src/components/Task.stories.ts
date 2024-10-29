import { fn } from "@storybook/test";

import type { Meta, StoryObj } from "@storybook/react";

import Task from "./Task";

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta: Meta<typeof Task> = {
  component: Task,
  title: "Task",
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Task>;

export const defaultData = {
  id: "1",
  title: "Test Task",
  state: "TASK_INBOX",
};

export const Default: Story = {
  args: {
    task: {
      ...defaultData,
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...defaultData,
      state: "TASK_PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...defaultData,
      state: "TASK_ARCHIVED",
    },
  },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle: Story = {
  args: {
    task: {
      ...defaultData,
      title: longTitleString,
    },
  },
};
